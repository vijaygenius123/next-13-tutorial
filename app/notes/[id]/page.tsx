import {db} from "../../../utils/db";
import Link from "next/link";

async function getNote(noteId: string) {
    return await db.records.getOne('notes', noteId)
}

export default async function NotePage({params}: any) {
    const note = await getNote(params.id),
        {title, content, created} = note
    return (
        <div className={'bg-white p-2 h-screen'}>
            <div className={"flex justify-between heading-line"}>
                <h2 className={"font-bold"}>{title}</h2>
                <Link href={"/notes"} className={"link"}>Back</Link>
            </div>
            <h5 className={"flex-grow content-lines"}>{content.substring(0, 100)}</h5>
            <p>{created}</p>
        </div>
    )
}
