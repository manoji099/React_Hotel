import { Backdrop, CircularProgress, makeStyles } from "@material-ui/core";

const useStyle = makeStyles({

    container: {
        height: '110%',
        width: '100%',
        display: 'flex',
        justifyContent: 'center',
        alignItems: 'center',
    },

    backdrop: {
        zIndex: 100,
    }
})

interface IProps {
    showBackDrop: boolean;
}

export default function LoadingSpinner(props: IProps) {
    const styles = useStyle();
    return (
        <Backdrop open className={styles.backdrop}>
            <div>
                <CircularProgress className={styles.container} />
            </div>
        </Backdrop>
    )
}