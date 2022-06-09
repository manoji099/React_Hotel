import { Fab, makeStyles, TextField, Typography } from "@material-ui/core";
import { useState } from "react";
import { useForm } from "react-hook-form";
import { useNavigate } from "react-router-dom";
import LoadingSpinner from "./LoadingSpinner";



const useStyles = makeStyles({
    parentContainer: {
        width: '100%',
        height: '100%',
        display: 'flex',
        justifyContent: 'center',
        alignItems: 'center'
    },
    container: {
        width: '75%',
        display: 'flex',
        flexDirection: 'column',
        gap: '15px'
    },
    buttons: {
        display: 'flex',
        justifyContent: 'center',
        gap: '10px'
    },
    title: {
        display: 'flex',
        justifyContent: 'center',
    },
    errorMessage: {
        color: 'red'
    }

})

interface IAuthentication {

    title: string;
    showLoginbutton?: Boolean;
    showSignUpbutton?: Boolean;
    showFirstName?: Boolean;
    //showLastName?: Boolean;
    onSubmitClick: (email: string, password: string, displayName?: string) => Promise<string>;
    //, lastName: string
}

interface IAuthenticationForm {
    firstName: string;
    //lastName: string;
    email: string;
    password: string;
}

export default function Authentication(props: IAuthentication) {

    const [showLoadingSpinner, setLoadingSpinner] = useState<boolean>(false);
    const [errorMessage, setErrorMessage] = useState<string>("");
    const { register, reset, handleSubmit, formState } = useForm<IAuthenticationForm>();
    const style = useStyles();
    const navigate = useNavigate();


    async function onSubmitClick(data: IAuthenticationForm) {
        setLoadingSpinner(true);
        const message = await props.onSubmitClick(data.email, data.password, data.firstName); // data.lastName
        setLoadingSpinner(false);
        if (message) {
            setErrorMessage(message);
        } else {
            navigate("/Home");
        }
    }
    return (

        <div className={style.parentContainer}>

            <form onSubmit={handleSubmit(onSubmitClick)} className={style.container} >
                <Typography variant="h3" className={style.title}>{props.title}</Typography>
                {props.showFirstName && <TextField variant="outlined" placeholder="First Name" {...register("firstName", {
                    required: true,
                    minLength: { value: 2, message: "Name should have minimum of 2 letter" }
                })} error={formState.errors?.firstName !== undefined}
                    helperText={formState.errors?.firstName?.message}
                />}

                {/* {props.showLastName && <TextField variant="outlined" placeholder="Last Name" {...register("lastName")}
                    error={formState.errors?.lastName !== undefined}
                    helperText={formState.errors?.lastName.message}
                />} */}

                <TextField variant="outlined" placeholder="email" type={"email"} {...register("email", {
                    required: true,
                    pattern: { value: /[\w.]+@\w+\.[\w.]+/, message: "email is invalid" }
                })}
                    error={formState.errors?.email !== undefined}
                    helperText={formState.errors?.email?.message} />

                <TextField variant="outlined" placeholder="Password" type={"password"} {...register("password", {
                    required: true,
                    minLength: { value: 4, message: "Name should have minimum of 4 letter" }
                })}
                    error={formState.errors?.password !== undefined}
                    helperText={formState.errors?.password?.message}
                />

                <div className={style.buttons}>
                    <Fab color="primary" variant="extended" id="submit" type="submit">Submit</Fab>
                    <Fab color="secondary" variant="extended" id="reset" onClick={() => reset()}> Reset</Fab>
                    {props.showSignUpbutton && <Fab variant="extended" onClick={() => navigate("/SignUp")}>SignUp</Fab>}
                    {props.showLoginbutton && <Fab variant="extended" onClick={() => navigate("/Login")}>Login</Fab>}
                    <Fab variant="extended" onClick={() => navigate("/Home")}>Home</Fab>
                </div>
                {showLoadingSpinner && <LoadingSpinner showBackDrop={true} />}
                {errorMessage && <Typography variant="h5" id="errorMessage" className={style.errorMessage}>{errorMessage}</Typography>}

            </form>
        </div >
    );
}