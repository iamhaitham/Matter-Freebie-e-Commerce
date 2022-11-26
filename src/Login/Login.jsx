import { useState } from 'react';
import Avatar from '@mui/material/Avatar';
import Button from '@mui/material/Button';
import CssBaseline from '@mui/material/CssBaseline';
import TextField from '@mui/material/TextField';
import FormControlLabel from '@mui/material/FormControlLabel';
import Checkbox from '@mui/material/Checkbox';
import Box from '@mui/material/Box';
import LockOutlinedIcon from '@mui/icons-material/LockOutlined';
import Typography from '@mui/material/Typography';
import Container from '@mui/material/Container';
import { createTheme, ThemeProvider } from '@mui/material/styles';
import { axiosLoginInstance } from '../services/custom';
import ToastNotification from '../shared/ToastNotification/ToastNotification';
import Loader from '../shared/Loader/Loader';

const theme = createTheme();

export default function Login() {
    const [isLoader, setIsLoader] = useState(false);
    const [email, setEmail] = useState('');
    const [isEmailValid, setIsEmailValid] = useState(true);
    const [isAuthenticated, setIsAuthenticated] = useState(null);
    const [errorMessage, setErrorMessage] = useState();

    const handleEmailChange = (event) => {
        setEmail(event.target.value);
        setIsEmailValid(true);
    }

    const handleEmailFieldLeave = (event) => {
        setIsEmailValid(!!event.target.value.match(/^[\w-\.]+@([\w-]+\.)+[\w-]{2,4}$/))
    }

    const handleSubmit = async (event) => {
        event.preventDefault();

        if (!isEmailValid) {
            const message = 'Email is not valid!';
            setErrorMessage(message)
            setIsAuthenticated(false);
            throw new Error(message);
        }

        const form = new FormData(event.currentTarget);
        const password = form.get('password');

        setIsLoader(true);

        try {
            await axiosLoginInstance.post('/login', {
                username: email.split('@')[0],
                password
            });

            setIsAuthenticated(true);
        } catch (error) {          
            if (error.response.status === 401) {
                setErrorMessage('Incorrect email or password!')
            } else {
                setErrorMessage('Server Error!')
            }

            setIsAuthenticated(false);
        }

        setIsLoader(false);
    }

    const showLoader = () => {
        if (isLoader)
            return (
                <Loader/>
            );
        else 
            return (
                <Container component="main" maxWidth="xs">
                    <CssBaseline />
                    <Box
                        sx={{
                        marginTop: 4,
                        marginBottom: 6,
                        display: 'flex',
                        flexDirection: 'column',
                        alignItems: 'center',
                        }}>
                        <Avatar sx={{ m: 1, bgcolor: 'secondary.main' }}>
                            <LockOutlinedIcon />
                        </Avatar>
                        <Typography component="h1" variant="h5">
                            Sign in
                        </Typography>
                        <Box component="form" onSubmit={ (event) => handleSubmit(event) } noValidate sx={{ mt: 1 }}>
                            <TextField
                            onChange={ (event) => handleEmailChange(event) }
                            onBlur={ (event) => handleEmailFieldLeave(event) }
                            error={ !isEmailValid }
                            margin="normal"
                            required
                            fullWidth
                            id="email"
                            label="Email Address"
                            name="email"
                            autoComplete="email"
                            autoFocus/>
                            <TextField
                            margin="normal"
                            required
                            fullWidth
                            name="password"
                            label="Password"
                            type="password"
                            id="password"
                            autoComplete="current-password"/>
                            <FormControlLabel
                            control={<Checkbox value="remember" color="primary" />}
                            label="Remember me"/>
                            <Button
                            type="submit"
                            fullWidth
                            variant="contained"
                            sx={{ mt: 3, mb: 2 }}>
                            Sign In
                            </Button>
                        </Box>
                    </Box>
            </Container>
        );
    }

    const showToastNotification  = () => {
        if (isAuthenticated === false) 
            return (
                <ToastNotification errorMessage={ errorMessage }/>
            );
    }

    return (
        <ThemeProvider theme={theme}>
            { showLoader() }
            { showToastNotification() }
        </ThemeProvider>
    );
}
