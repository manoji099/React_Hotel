import { AppBar, Button, InputBase, makeStyles, Toolbar, Typography } from "@material-ui/core";
import SearchIcon from '@material-ui/icons/Search';
import { useContext } from "react";
import { useNavigate } from "react-router-dom";
import { context } from "./UserContext";

const useStyle = makeStyles({
    button: {
        color: 'white',
        fontWeight: 600
    },

    topBar: {
        backgroundColor: 'rgba( 255, 255, 255, 0.15)',
        color: 'white',
        display: 'flex',
        flexGrow: 'inherit',
        alignItems: 'center'

    },
    toolBar: {
        display: 'flex',
        justifyContent: 'space-between',
        backgroundColor: '#00A693'

    },
    searchIcon: {
        margin: '0 15px',

    },
    inputsearchBar: {
        color: 'white',
        fontWeight: 600
    },
    fontStyle: {
        fontFamily: 'Comic sans MS',
        fontStyle: 'italic',
        fontSize: '25px',
        color: 'white',
        fontWeight: 800
    }



})

interface IProps {
    searchString: string;
    setSearchString: (searchString: string) => void;
}

export default function TopBar(props: IProps) {

    const style = useStyle();
    const Context = useContext(context);
    const ifUserExist = Context && Context.uid;

    const navigate = useNavigate();
    return (
        <AppBar>
            <Toolbar className={style.toolBar}>
                <div className={style.topBar} >
                    <SearchIcon className={style.searchIcon} />
                    <InputBase placeholder="Search" className={style.inputsearchBar} value={props.searchString}
                        onChange={(e) => props.setSearchString(e.target.value)} />
                </div>
                <Typography className={style.fontStyle}>WELCOME TO APPLE GRAND</Typography>
                <div>
                    {!ifUserExist && <Button className={style.button} onClick={() => navigate('/SignUp')}>SIGN UP</Button>}
                    {!ifUserExist && <Button className={style.button} onClick={() => navigate('/Login')}>LOGIN </Button>}
                    {ifUserExist && <Button className={style.button} onClick={() => navigate('/Profile')}>PROFILE </Button>}
                </div>

            </Toolbar>
        </AppBar>
    )
}