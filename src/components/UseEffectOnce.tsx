import { useEffect, useState } from "react";

export default function UseEffectOnce() {

    const [title, setTitle] = useState("");
    useEffect(() => {
        async function api() {

            const response = await fetch('https://jsonplaceholder.typicode.com/todos/1');
            const json: { title: string } = await response.json();
            const tile = json.title;
            setTitle(tile);
        }
        api();
    }, []);

    return (
        <>
            <h2>This is Ajax call Once</h2>
            <h3>The result is : </h3>
            <div> {title}</div>

        </>



    )
}