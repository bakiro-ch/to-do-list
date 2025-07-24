import IconButton from '@mui/material/IconButton';
import { useContext, useState } from 'react';

import { cardsContext,cardContext } from '../context/context';
import FormDialog from './editing';
import AlertDialog from './alert';
import { snackbarContext } from '../context/snackbarContext';


export default function IconButtons({color=null,children}) {
    const {cards,setCards} = useContext(cardsContext)
    const [isEdited,setEdited] = useState(false)
    const [deleted,setDeleted] = useState(false)
    const card = useContext(cardContext)
    const {setMessage,setOpen} = useContext(snackbarContext)
    
    function handleCompleted(){
        if(color=="green"){
        setCards((prev)=>prev.map((e)=>e.id===card.id?{...e,isCompleted:!e.isCompleted}:e))
        if(!card.isCompleted){
            setMessage("تمت الإضافة الى المهام المنجزة")
            setOpen(true)
            setTimeout(()=>setOpen(false),3000)
        }else{
            setMessage("تم الحذف من المهام المنجزة")
            setOpen(true)
            setTimeout(()=>setOpen(false),3000)
        }
        // console.log(card.id,card.title,card.isCompleted)
    }
        else if(color=="red"){
            // setCards((prev)=>prev.filter((e)=>e.id!=card.id))
            setDeleted(true)
        }
        else if(color=="blue"){
            setEdited(true)
            setCards((prev)=>prev.map((e)=>{
                if(e.id===card.id){
                    // const newTitle = prompt('ادخل العنوان الجديد: ')
                    // const newNote = prompt('أدخل الملاحظة الجديدة: ')
                    return e
                }
                return e
            }))
        }
    }
return (
    <>
        <IconButton onClick={handleCompleted} 
            sx={{border: `2px solid ${color}`,marginLeft:color=='green'?'8px':'0px', bgcolor:color=='green'&&card.isCompleted?'green':'white'}} 
            className='transition-all! hover:shadow-xl/30 duration-700'>
            {children}
        </IconButton>
        {isEdited?<FormDialog card={card} isEdited={isEdited} setEdited={setEdited}/>:<></>}
        {deleted?<AlertDialog card={card} deleted={deleted} setDeleted={setDeleted}/>:<></>}
    </>
        
);
}
