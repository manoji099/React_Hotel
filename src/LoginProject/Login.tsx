import firebase from "firebase";
import Authentication from "./Authentication";

export default function Login() {

    async function onSubmitClick(email: string, password: string) {
        try {
            await firebase.auth().signInWithEmailAndPassword(email, password);
            return;
        } catch (e: any) {
            return e.message;
        }
    }

    return <Authentication title='Welcome to the Login Page' showSignUpbutton={true} showLoginbutton={false}
        showFirstName={false} onSubmitClick={onSubmitClick} />  //showLastName={false}
}