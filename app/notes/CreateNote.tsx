'use client'

import {useState} from "react";
import {db} from "../../utils/db";

export default function CreateNote() {
    const [title, setTitle] = useState('')
    const [content, setContent] = useState('')

    const handleSubmit = async (e:any) => {
        e.preventDefault()

        await db.records.create("notes", {
            title,
            content
        })
    }

    return (
        <form onSubmit={handleSubmit}>
            <h3>Create a note</h3>
            <input placeholder="Title" type="text" value={title} onChange={e => setTitle(e.target.value)}/>
            <textarea placeholder="Content" value={content} onChange={e => setContent(e.target.value)}/>
            <button type={"submit"}>Create note</button>
        </form>
    )

}
