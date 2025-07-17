import IconButton from '@mui/material/IconButton';
import { cardsContext } from '../context/context';
import { cardContext } from '../context/context';
import { useContext, useState } from 'react';
import { green, grey } from '@mui/material/colors';
import FormDialog from './editing';
import AlertDialog from './alert';
// import editing from './editing';


export default function IconButtons({color=null,children}) {
    const {cards,setCards} = useContext(cardsContext)
    const [isEdited,setEdited] = useState(false)
    const [deleted,setDeleted] = useState(false)
    const card = useContext(cardContext)
    
    function handleCompleted(){
        if(color=="green"){
        setCards((prev)=>prev.map((e)=>e.id===card.id?{...e,isCompleted:!e.isCompleted}:e))
        console.log(card.id,card.title,card.isCompleted)}
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
            sx={{border: `2px solid ${color}`, bgcolor:color=='green'&&card.isCompleted?'green':'white'}} 
            className='transition-all! hover:shadow-xl/30 duration-700' aria-label="delete">
            {children}
        </IconButton>
        {isEdited?<FormDialog card={card} isEdited={isEdited} setEdited={setEdited}/>:<></>}
        {deleted?<AlertDialog card={card} deleted={deleted} setDeleted={setDeleted}/>:<></>}
    </>
        
);
}
