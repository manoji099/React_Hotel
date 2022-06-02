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
    resturant: IHotel
}

export default function Home() {
    const style = useStyle();
    const dispatch = useDispatch();
    const [searchString, setSearchString] = useState<string>('');
    const hotelReducer = useSelector((x: AppState) => x.HotelReducer);
    useEffect(() => {
        async function api() {
            const response = await fetch("/hotel.json");
            const json: IFile[] = await response.json();
            dispatch(completed(json.map(x => x.resturant)))
        }
        dispatch(started());
        api();
    }, [dispatch]);
    return (
        <>
            <TopBar searchString={searchString} setSearchString={setSearchString} />
            {hotelReducer.isLoading && <LoadingSpinner showBackDrop={false} />}
            <Grid container spacing={10} className={style.grid}>
                {hotelReducer.isLoading && hotelReducer.hotels.filter(x => x.fname.toLowerCase().includes(searchString.toLowerCase())).map(x => <Grid item> <HotelCard {...x} /> </ Grid>)}
            </Grid>
        </>
    )
}