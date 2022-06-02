import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { AppState } from "../AppState";
import { write } from "../UsersReducer";
import { IPerson, renderPerson, } from "./DisplayPerson";

export default function ReduserUi() {

    const dispatch = useDispatch();
    const userReducer = useSelector((x: AppState) => x.UsersReducer);
    useEffect(() => {

        async function api() {

            const response = await fetch('https://reqres.in/api/users?page=2');
            const json: { data: IPerson[] } = await response.json();
            dispatch(write(json.data));
        }
        api();
    }, [dispatch]);
    return (
        <>
            {userReducer.map(renderPerson)};
        </>
    )
}