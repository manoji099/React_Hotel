import { useEffect, useState } from "react";

export interface IPerson {

    id: number;
    first_name: string;
    last_name: string;
    avatar: string;
}

export default function DisplayPerson() {
    const [person, setPerson] = useState<IPerson[]>([]);
    const [search, setSearch] = useState<string>("");
    useEffect(() => {

        async function api() {

            const response = await fetch('https://reqres.in/api/users?page=2');
            const json: { data: IPerson[] } = await response.json();
            setPerson(json.data);
        }
        api();

    }, []);

    const filterPerson = (person: IPerson) => {
        const name = [person.first_name.toLocaleLowerCase(), person.last_name.toLocaleLowerCase()];
        return name.some(x => x.includes(search.toLocaleLowerCase()));
    }

    return (
        <>
            <input className="searchBar" type="text" onChange={e => setSearch(e.target.value)} />
            <div className="gridContainer">
                {person.filter(filterPerson).map(renderPerson)}
            </div>
        </>
    )
}

export function renderPerson(person: IPerson, index: number) {
    return (
        <div key={index}>

            <img src={person.avatar} alt={person.first_name} />
            <div>{person.first_name + " " + person.last_name}</div>
        </div>

    )

}