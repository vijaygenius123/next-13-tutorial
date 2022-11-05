import Link from "next/link";
import {db} from "../../utils/db";

async function getNotes() {
    const data = await db.records.getList('notes')
    return data?.items as any[]

}

export default async function NotesPage() {
    const notes = await getNotes()
    return (
        <>
            <h1 className={"text-4xl"}>Notes</h1>
            <div className={"grid gap-6 grid-cols-1 mt-6 justify-items-center xl:grid-cols-3 lg:grid-cols-2"}>
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
        <div className={"w-96 bg-white px-6 py-4 flex flex-col rounded"}>
            <h2 className={"heading-line font-bold"}>{title}</h2>
            <h5 className={"flex-grow content-lines"}>{content.substring(0,100)}</h5>
            <p>{created}</p>
            <Link className={"self-end justify-self-end link"}
                  href={`/notes/${id}`}>more</Link>
        </div>
    )
}
