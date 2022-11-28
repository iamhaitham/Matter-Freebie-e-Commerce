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
import { axiosLoginInstance, useLoginReducer } from '../services/custom';
import ToastNotification from '../shared/ToastNotification/ToastNotification';
import Loader from '../shared/Loader/Loader';
import { loginReducerTypes } from '../services/reducers';
import { useNavigate } from 'react-router';
import useLocalStorageState from 'use-local-storage-state';

const theme = createTheme();

export default function Login() {
    const navigate = useNavigate();
    const [, setUserToken] = useLocalStorageState('userToken');
    const [errorMessage, setErrorMessage] = useState('');
    const [state, dispatch] = useLoginReducer();
    const {
        Login_Loading,
        Login_SetEmail,
        Login_ValidateEmail,
        Login_IsUserAuthenticated
    } = loginReducerTypes;

    const handleEmailChange = (event) => {
        dispatch({
            type: Login_SetEmail,
            email: event.target.value
        });
        validateEmail(event);
    }

    const validateEmail = (event) =>  {
        dispatch({
            type: Login_ValidateEmail,
            isEmailValid: event.target.value
        });
    }

    const handleEmailFieldLeave = (event) => {
        validateEmail(event);
    }

    const handleSubmit = async (event) => {
        event.preventDefault();

        if (!state.isEmailValid) {
            const message = 'Email is not valid!';
            setErrorMessage(message)
            dispatch({
                type: Login_IsUserAuthenticated,
                isUserAuthenticated: false
            });
            return;
        }

        const form = new FormData(event.currentTarget);
        const password = form.get('password');

        dispatch({
            type: Login_Loading,
            isLoading: true
        });

        try {
            const { data: { token } } = await axiosLoginInstance.post('/login', {
                username: state.email.split('@')[0],
                password
            });

            dispatch({
                type: Login_IsUserAuthenticated,
                isUserAuthenticated: true
            });

            setUserToken(token);

            navigate('/');
        } catch (error) {          
            if (error.response.status === 401) {
                setErrorMessage('Incorrect email or password!')
            } else {
                setErrorMessage('Server Error!')
            }

            dispatch({
                type: Login_IsUserAuthenticated,
                isUserAuthenticated: false
            });
        }

        dispatch({
            type: Login_Loading,
            isLoading: false
        });
    }

    const showLoader = () => {
        if (state.isLoading)
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
                            error={ !state.isEmailValid }
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
        if (state.isUserAuthenticated === false && errorMessage.length) 
            return (
                <ToastNotification key={ errorMessage } 
                                   setErrorMessage={ setErrorMessage }
                                   errorMessage={ errorMessage }/>
            );
    }

    return (
        <ThemeProvider theme={theme}>
            { showLoader() }
            { showToastNotification() }
        </ThemeProvider>
    );
}
