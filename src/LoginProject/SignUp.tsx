import firebase from "firebase";
import Authentication from "./Authentication";

export default function SignUp() {
    const onSubmitClick = async (email: string, password: string, displayName?: string) => {
        try {
            const account = await firebase.auth().createUserWithEmailAndPassword(email, password);
            await account?.user?.updateProfile({ displayName });
            return;
        } catch (e: any) {
            console.error(e);
            return e.message;
        }
    };
    return (
        <Authentication title='Welcome to the SignUp Page' showSignUpbutton={false} showLoginbutton={true}
            showFirstName={true} onSubmitClick={onSubmitClick} />  //showLastName={true}
    )
}