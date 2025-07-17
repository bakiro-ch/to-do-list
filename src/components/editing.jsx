import Button from '@mui/material/Button';
import TextField from '@mui/material/TextField';
import Dialog from '@mui/material/Dialog';
import DialogActions from '@mui/material/DialogActions';
import DialogContent from '@mui/material/DialogContent';
import DialogContentText from '@mui/material/DialogContentText';
import DialogTitle from '@mui/material/DialogTitle';
import { useState } from 'react';
import { cardsContext } from '../context/context';
import { useContext } from 'react';

export default function FormDialog({card,isEdited,setEdited}) {
    const {cards,setCards} = useContext(cardsContext)
    const [open, setOpen] = useState(true);
    const [inputs,setInputs] = useState({title:"",note:""})
    
    const handleClose = () => {
    setOpen(false);
    setEdited(false);
    };

    const handleSubmit = (event) => {
        event.preventDefault();
        setCards((prev)=>prev.map((e)=>e.id===card.id?{...e,title:inputs.title!=""?inputs.title:e.title,note:inputs.note!=""?inputs.note:e.note}:e))
        // const formData = new FormData(event.currentTarget);
        // const formJson = Object.fromEntries(formData.entries());
        // const email = formJson.email;
        // console.log(email);
        handleClose();
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
