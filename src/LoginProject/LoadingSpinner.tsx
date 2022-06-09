import { Backdrop, CircularProgress, makeStyles } from "@material-ui/core";

const useStyle = makeStyles({

    container: {
        height: '100%',
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
    const renderLoadingSpinner = () => {

        return (
            <div className={styles.container}>
                <CircularProgress />
            </div>
        )
    }
    if (props.showBackDrop) {
        return (
            <Backdrop open={props.showBackDrop} className={styles.backdrop}>
                {renderLoadingSpinner()}
            </Backdrop>
        )
    }
    return renderLoadingSpinner();
}