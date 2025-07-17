import Button from '@mui/material/Button';
import Dialog from '@mui/material/Dialog';
import DialogActions from '@mui/material/DialogActions';
import DialogContent from '@mui/material/DialogContent';
import DialogContentText from '@mui/material/DialogContentText';
import DialogTitle from '@mui/material/DialogTitle';
import { useState } from 'react';
import { cardsContext } from '../context/context';
import { useContext } from 'react';

export default function AlertDialog({card,deleted,setDeleted}) {
    const {cards,setCards} = useContext(cardsContext)
    const [open, setOpen] = useState(true);
    
    const handleClose = () => {
        setOpen(false);
        setDeleted(false);
    };
    const handleDelete= () =>{
        handleClose()
        setCards((prev)=>prev.filter((e)=>e.id!=card.id))
    }

  return (
    <>
      <Dialog
        style={{direction:'rtl'}}
        open={open}
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
