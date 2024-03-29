import { Fab, makeStyles, Typography } from "@material-ui/core";
import firebase from "firebase";
import { useContext } from "react";
import { useNavigate } from "react-router-dom";
import { Context } from "./UserContext";



const useStyle = makeStyles({
    parentContainer: {
        width: '100%',
        height: '100%',
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center'
    },
    container: {
        display: 'flex',
        flexDirection: 'column',
        gap: '15px'
    },
    buttons: {
        display: 'flex',
        justifyContent: 'flex-end',
        gap: '10px'
    }

});
export default function Profile() {
    const context = useContext(Context);
    const style = useStyle();
    const navigate = useNavigate();
    const userSignOut = () => {
        firebase.auth().signOut();
        navigate("/Home");
    }
    return (
        <div>
            <div className={style.parentContainer}>
                <div className={style.container}>
                    <Typography variant="h3">Welcome to the profile page</Typography>
                    <Typography variant="h5" id="name">{context?.displayName}</Typography>
                    <Typography variant="h5" id="email">{context?.email}</Typography>
                    <Typography variant="h5" id="uid">{context?.uid}</Typography>
                    <div className={style.buttons}>
                        <Fab color="primary" variant="extended" id="signout" onClick={userSignOut}>Signout</Fab>
                        <Fab color="secondary" variant="extended" id="home" onClick={() => navigate("/Home")}>Home</Fab>
                    </div>
                </div>
            </div>
        </div>
    )
}