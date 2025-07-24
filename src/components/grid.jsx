import Grid from '@mui/material/Grid';
import Button from '@mui/material/Button';
import { Box, Stack } from '@mui/material';
import TextField from '@mui/material/TextField';
import { useState,useContext } from 'react';
import { v4 as uuidv4 } from 'uuid';

import { cardsContext } from '../context/context';
import { snackbarContext } from '../context/snackbarContext';


export default function FullWidthGrid() {
    const {open,setOpen,message,setMessage} = useContext(snackbarContext)
    const {cards,setCards} = useContext(cardsContext)
    const [input,setInput] = useState("")
    const [error,setError] = useState(false)

    function handleInput(event){
        return setInput(event)
    }
    function handleClick(){
        if(input.trim()){
            setCards([...cards,{id:uuidv4(),title:input,note:null,isCompleted:false}])
            setInput("")
            setError(false)
            setMessage("تمت الإضافة بنجاح")
            setOpen(true)
            setTimeout(()=>setOpen(false),3000)
        }
        else {
            setError(true)
            // alert('you cant add an empty task')
        }
    }
    function ButtonSizes() {
        return (
      <Button disabled={input.length<1?true:false} sx={{width:'100%',padding:"15px",fontWeight:'bold'}} onClick={handleClick} variant="contained">إضافة</Button>
        );
        
}
// localStorage.setItem("todos",JSON.stringify(cards))
    return (
        <Box sx={{ flexGrow: 1 }}>
            <Grid container spacing={1} marginTop={"20px"} >
                <Grid  size={8}>
                    <TextField  value={input} 
                        onKeyDown={(e) => {if (e.key === "Enter") handleClick()}} 
                        onChange={(event)=>handleInput(event.target.value)} 
                        label="عنوان المهمة" variant="outlined" 
                        className='w-full break-words' />
                    {/* <input style={{width:'100%',height:'100%',border:'1.5px solid black', borderRadius:'5px',outline:'none',padding:'0px 5px'}} type="text" /> */}
                </Grid>
                <Grid size={4} sx={{borderRadius:"5px"}} color='primary'>
                    <ButtonSizes  />
                </Grid>
                {error?<div className='text-red-600 text-shadow-sm'>لا يمكنك اضافة مهمة فارغة</div>:<></>}
            </Grid>
        </Box>
    );
}
