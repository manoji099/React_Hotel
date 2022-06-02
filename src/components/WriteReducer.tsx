import { useDispatch } from "react-redux";
import { write } from "../TextReducer";
import ReadReducer from "./ReadReducer";

export default function WriteReducer() {

    const dispatch = useDispatch();
    return (
        <>
            <input type="text" onChange={e => dispatch(write(e.target.value))} />
            <ReadReducer />
        </>

    )
}