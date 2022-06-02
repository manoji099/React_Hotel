import { AppBar, Button, Card, CardActions, CardContent, CardMedia, CircularProgress, Fab, Grid, InputBase, TextField, Theme, Toolbar, Typography } from "@material-ui/core"
import { makeStyles } from "@material-ui/styles";

const cssStyles = makeStyles({
    searchBox: {
        backgroundColor: 'white'
    }
});

interface IStyles {
    backgroundColor: string,
    color: string;
}
const useStyles = makeStyles<Theme, IStyles>({
    searchBox: {
        backgroundColor: props => props.backgroundColor
    },
    submitButton: {
        color: 'white'
    },
    button: {
        color: props => props.color
    }
});

export default function MaterialUi() {
    const style = cssStyles();
    const withProps = useStyles({
        backgroundColor: 'wheat',
        color: "Teal"
    });
    return (
        <>

            < TextField variant="outlined" />

            <Button variant="contained" color="primary">Testing</Button>

            <Fab color="secondary" variant="extended">Submit</Fab>

            <Typography variant="h5" color="primary" >This Testing</Typography>

            <CircularProgress />

            <Grid container spacing={6}>
                <Grid item xs={3}>Home</Grid>
                <Grid item xs={3}>Products</Grid>
                <Grid item xs={3}>Careeer</Grid>
                <Grid item xs={3}>Contact Us</Grid>
            </Grid>

            <Card>
                <CardMedia component="img" height="500" width="500" alt="Product Restore"
                    image="https://images.unsplash.com/photo-1466637574441-749b8f19452f?crop=entropy&cs=tinysrgb&fm=jpg&ixlib=rb-1.2.1&q=60&raw_url=true&ixid=MnwxMjA3fDB8MHxzZWFyY2h8M3x8Zm9vZHxlbnwwfDJ8MHx8&auto=format&fit=crop&w=500"></CardMedia>
                <CardContent>
                    <Typography variant="body1" color="textSecondary">Arrow Top</Typography>
                </CardContent>
                <CardActions>
                    <Button size="small" className={withProps.button} variant="contained">Add to cart</Button>
                    <Button size="small" className={withProps.button} variant="contained">Wishlist</Button>
                </CardActions>
            </Card>

            <AppBar>
                <Toolbar>
                    <InputBase className={style.searchBox} />
                    <InputBase className={withProps.searchBox} />

                    <Button className={withProps.submitButton}>Submit</Button>
                </Toolbar>

            </AppBar>

        </>

    );
}