import { CircularProgress } from "@mui/material";
import { Box } from "@mui/system";
import styles from './CircularLoader.module.css';

const CircularLoader = () => {
    const { circularProgressBoxStyles } = styles;

    return (
        <Box className={ circularProgressBoxStyles }>
            <CircularProgress />
        </Box>
    );
}

export default CircularLoader;
