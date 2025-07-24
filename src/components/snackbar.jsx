import * as React from 'react';
import Button from '@mui/material/Button';
import Snackbar from '@mui/material/Snackbar';
import IconButton from '@mui/material/IconButton';
import CloseIcon from '@mui/icons-material/Close';
import { useContext } from 'react';
import { Alert } from '@mui/material';

import { snackbarContext } from '../context/snackbarContext';

export default function SimpleSnackbar({message}) {
const {open,setOpen} = useContext(snackbarContext)
// setOpen(true);
//   const handleClose = (event, reason) => {
//     if (reason === 'clickaway') {
//       return;
//     }

//     setOpen(false);
//   };


return (
    <>
        <Snackbar
            className='text-500!'
            open={open}
            autoHideDuration={6000}
            // onClose={handleClose}
        >
        <Alert variant="filled" severity={message=="لم يتم التعديل بنجاح"?"error":"success"}>
            {message}
        </Alert>
        </Snackbar>
    </>
);
}