import { createContext, useEffect, useState } from "react";
import firebase from "firebase";
import LoadingSpinner from "./LoadingSpinner";


interface IProps {
    children: React.ReactNode;
}
export const context = createContext<firebase.User | null>(null);

export default function UserContext(props: IProps) {
    const [user, setUser] = useState<firebase.User | null>(null);
    const [showLoadingspinner, setLoadingSpinner] = useState<boolean>(true);
    useEffect(() => {
        firebase.auth().onAuthStateChanged((user: firebase.User | null) => {
            setLoadingSpinner(true);
            setUser(user);
            setLoadingSpinner(false);
        })
    }, []);

    return (
        <context.Provider value={user}>
            {!showLoadingspinner && props.children}
            {showLoadingspinner && <LoadingSpinner showBackDrop={true} />}
        </context.Provider>
    );
}