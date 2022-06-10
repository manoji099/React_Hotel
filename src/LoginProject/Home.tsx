import { Grid, makeStyles } from "@material-ui/core";
import { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { AppState } from "../AppState";
import HotelCard from "./HotelCard";
import { completed, IHotel, started } from "./HotelReducer";
import LoadingSpinner from "./LoadingSpinner";
import TopBar from "./TopBar";


const useStyle = makeStyles({
    grid: {
        marginTop: '50px'
    }
})

interface IFile {
    data: { hotels: IHotel[] };
}

export default function Home() {
    const style = useStyle();
    const dispatch = useDispatch();
    const [searchString, setSearchString] = useState<string>('');
    const HotelReducer = useSelector((x: AppState) => x.HotelReducer);
    useEffect(() => {
        async function api() {
            const myHeaders = new Headers();
            myHeaders.append("Content-Type", "application/json");

            const raw = JSON.stringify({
                "query": "{\n  hotels{\n    id\n    name\n    cuisines,\n    featured_image\n  }\n}\n"
            });

            const requestOptions = {
                method: 'POST',
                headers: myHeaders,
                body: raw

            };


            const response = await fetch("https://stormy-beyond-99802.herokuapp.com/graphql",
                requestOptions);
            const json: IFile = await response.json();
            dispatch(completed(json.data.hotels));
        }
        dispatch(started());
        api();
    }, [dispatch]);
    return (
        <>
            <TopBar searchString={searchString} setSearchString={setSearchString} />
            {HotelReducer.isLoading && <LoadingSpinner showBackDrop={true} />}
            <Grid container spacing={8} className={style.grid}>
                {!HotelReducer.isLoading && HotelReducer.hotels.filter(x => x.name.toLowerCase().includes(searchString?.toLowerCase())).map(x => <Grid item> <HotelCard {...x} /> </ Grid>)}
            </Grid>
        </>
    )
}