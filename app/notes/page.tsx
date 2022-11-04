import Link from "next/link";

async function getNotes() {
    const res = await fetch('http://localhost:8090/api/collections/notes/records?page=1&perPage=10'),
        data = await res.json()
    return data?.items as any[]

}

export default async function NotesPage() {
    const notes = await getNotes()
    return (
        <>
            <h1 className={"text-4xl"}>Notes</h1>
            <div className={"grid gap-6 grid-flow-col auto-cols-max mt-6"}>
                {
                    notes.map((note) => (
                        <Note key={note.id} note={note}/>
                    ))
                }
            </div>
        </>
    )
}

function Note({note}: any) {
    const {id, title, content, created} = note || {}

    return (
        <div className={"w-96 bg-green-300 px-6 py-4 flex flex-col"}>
            <h2>{title}</h2>
            <h5>{content}</h5>
            <p>{created}</p>
            <Link className={"self-end justify-self-end"} href={`/notes/${id}`}>more</Link>
        </div>
    )
}
