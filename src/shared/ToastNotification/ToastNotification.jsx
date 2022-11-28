import Stack from '@mui/material/Stack';
import Snackbar from '@mui/material/Snackbar';
import MuiAlert from '@mui/material/Alert';
import { useState, forwardRef } from 'react';
import { loginReducerTypes } from '../../services/reducers';

const Alert = forwardRef(function Alert(props, ref) {
  return <MuiAlert elevation={6} ref={ref} variant="filled" {...props} />;
});

export default function ToastNotification({ errorMessage, dispatchErrorMessage }) {
  const { Login_SetErrorMessage } = loginReducerTypes;
  const [open, setOpen] = useState(true);

  const handleClose = (_, reason) => {
    if (reason === 'clickaway') {
      return;
    }

    setOpen(false);

    dispatchErrorMessage({
      type: Login_SetErrorMessage,
      errorMessage: ''
    });
  };

  return (
    <Stack spacing={2} sx={{ width: '100%' }}>
      <Snackbar open={open} autoHideDuration={6000} onClose={handleClose}>
        <Alert onClose={handleClose} severity="error" sx={{ width: '100%' }}>
            { errorMessage }
        </Alert>
      </Snackbar>
    </Stack>
  );
}