import Button from '@mui/material/Button';
import Dialog from '@mui/material/Dialog';
import DialogActions from '@mui/material/DialogActions';
import DialogContent from '@mui/material/DialogContent';
import DialogContentText from '@mui/material/DialogContentText';
import DialogTitle from '@mui/material/DialogTitle';
import { useState,useContext } from 'react';

import { cardsContext } from '../context/context';
import { snackbarContext } from '../context/snackbarContext';


export default function AlertDialog({card,setDeleted}) {
    const {cards,setCards} = useContext(cardsContext)
    const [Delete, SetDelete] = useState(true);
    const {open,setOpen,message,setMessage} = useContext(snackbarContext) 
    
    const handleClose = () => {
        SetDelete(false);
        setDeleted(false);
    };
    const handleDelete= () =>{
        handleClose()
        setCards((prev)=>prev.filter((e)=>e.id!=card.id))
        setMessage("تم الحذف بنجاح")
        setOpen(true)
        setTimeout(()=>setOpen(false),3000)
    }

  return (
    <>
      <Dialog
        style={{direction:'rtl'}}
        open={Delete}
        onClose={handleClose}
        aria-labelledby="alert-dialog-title"
        aria-describedby="alert-dialog-description"
      >
        <DialogTitle id="alert-dialog-title">
          {"هل أنت متأكد من رغبتك في حذف المهمة؟"}
        </DialogTitle>
        <DialogContent>
          <DialogContentText id="alert-dialog-description">
            لا يمكنك التراجع عن الحذف بعد اتمامه
          </DialogContentText>
        </DialogContent>
        <DialogActions>
          <Button onClick={handleClose}>إغلاق</Button>
          <Button onClick={handleDelete} autoFocus>
            نعم قم بالحذف
          </Button>
        </DialogActions>
      </Dialog>
    </>
  );
}
