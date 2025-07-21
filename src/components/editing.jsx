import Button from '@mui/material/Button';
import TextField from '@mui/material/TextField';
import Dialog from '@mui/material/Dialog';
import DialogActions from '@mui/material/DialogActions';
import DialogContent from '@mui/material/DialogContent';
import DialogContentText from '@mui/material/DialogContentText';
import DialogTitle from '@mui/material/DialogTitle';
import { useState,useMemo } from 'react';
import { cardsContext } from '../context/context';
import { useContext } from 'react';

export default function FormDialog({card,isEdited,setEdited}) {
    const {cards,setCards} = useContext(cardsContext)
    const [open, setOpen] = useState(true);
    const [inputs,setInputs] = useState({
        title: card.title,
        note: card.note,
    })
    const [error,setError] = useState(false)
    
    const handleClose = () => {
    setOpen(false);
    setEdited(false);
    };

    const handleSubmit = (event) => {
        event.preventDefault();
        if(inputs.note.trim()||inputs.title.trim()){
        setCards((prev)=>prev.map((e)=>e.id===card.id?{...e,title:inputs.title.trim()||inputs.note.trim()?inputs.title:card.title,
            note:inputs.note.trim()||inputs.title.trim()?inputs.note:card.note}:e))
        handleClose();
        setError(false)
}
        else setError(true)
    };
return (
    <>
        <Dialog style={{direction:'rtl'}} open={open} onClose={handleClose}>
            <DialogTitle>التعديل:</DialogTitle>
            <DialogContent sx={{ paddingBottom: 0 }}>
                <DialogContentText>
                    يمكنك تغيير العنوان والملاحظة: 
                </DialogContentText>
                <form onSubmit={handleSubmit}>
                    <TextField
                        value={inputs.title}
                        onChange={(event)=>setInputs({...inputs,title:event.target.value})}
                        autoFocus
                        margin="dense"
                        id="name"
                        name="title"
                        label="العنوان"
                        type="title"
                        fullWidth
                        variant="standard"
                    />
                    <TextField
                        value={inputs.note}
                        onChange={(event)=>setInputs({...inputs,note:event.target.value})}
                        autoFocus
                        margin="dense"
                        id="name"
                        name="note"
                        label="تعديل الملاحظة"
                        type="text"
                        fullWidth
                        variant="standard"
                    />
                    {error?<div className='text-red-600 text-shadow-sm'>اسف لا يمكنك اضافة مهمة فارغة</div>:<></>}
                    <DialogActions>
                        <Button onClick={handleClose}>إغلاق</Button>
                        <Button type="submit">حفظ التغيرات</Button>
                    </DialogActions>
                </form>
            </DialogContent>
        </Dialog>
    </>
    );
}
