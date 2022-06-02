import { useEffect, useState } from "react";

export default function UseEffectMutiple() {

    const [index, setIndex] = useState<number>(1);
    const [title, setTitle] = useState('');


    useEffect(() => {
        async function api() {
            const response = await fetch('https://jsonplaceholder.typicode.com/todos/' + index);
            const json: { title: string } = await response.json();
            const tile = json.title;
            setTitle(tile);
        }
        api();
    }, [index]);
    return (
        <>
            <h2>This is Ajax call Multiple</h2>
            <input type='text' onChange={e => setIndex(parseInt(e.target.value))} />
            <h3>The result is : </h3>
            <div>{title}</div>

        </>
    )

}