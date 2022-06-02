import { useState } from "react";

export default function Listnote() {
    const [notes, setNotes] = useState<string[]>([]);
    const [currentNode, setCurrentNotes] = useState<string>('');
    const updateNotes = () => {
        setNotes([...notes, currentNode])
    }
    const deleteNote = (index: number) => {

        const clone = [...notes];
        setNotes(clone.filter((x, i) => i !== index))


    }

    const renderList = (value: string, index: number) => {
        return (
            <li key={index}>
                <div>{value}</div>
                <button onClick={() => deleteNote(index)}> delete </button>
            </li>
        )
    }

    return (
        <>
            <input type="text" onChange={(e) => setCurrentNotes(e.target.value)} />
            <button onClick={updateNotes}>submit</button>
            <ul>
                {notes.map(renderList)}
            </ul>
        </>
    )
}