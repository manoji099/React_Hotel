import { useRef } from "react"

export default function UseRefExample() {

    const ref = useRef<HTMLInputElement>(null);
    const onClick = () => {
        alert(ref.current?.id! + ref.current?.value);
    }
    // to access value from the textbox

    /*
    1. state
    2.ref
    3.document.getElementById()   -- this should not be used in react component

    */

    return (
        <>
            <input type="text" id="input" ref={ref} />
            <button onClick={onClick}>submit</button>
        </>
    )
}