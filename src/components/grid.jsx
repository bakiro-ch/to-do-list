import Grid from '@mui/material/Grid';
import Button from '@mui/material/Button';
import { Box } from '@mui/material';
import { red } from '@mui/material/colors';
import TextField from '@mui/material/TextField';
import { useState } from 'react';
import { v4 as uuidv4 } from 'uuid';
import { useContext } from 'react';
import { cardsContext } from '../context/context';

export default function FullWidthGrid() {
    const {cards,setCards} = useContext(cardsContext)
    const [input,setInput] = useState("")
    function handleInput(event){
        return setInput(event)
    }
    function handleClick(){
        if(input){
            setCards([...cards,{id:uuidv4(),title:input,note:null,isCompleted:false}])
            setInput("")}
    }
    function ButtonSizes() {
        
        return (
            <Button onClick={handleClick} size="Large" sx={{padding:"15px",fontWeight:'bold' ,width:'100%',color:'white'}} >إضافة</Button>
        );
        
}
// localStorage.setItem("todos",JSON.stringify(cards))
    return (
        <Box sx={{ flexGrow: 1 }}>
            <Grid container spacing={1} marginTop={"20px"} >
                <Grid  size={8}>
                    <TextField value={input} 
                        onKeyDown={(e) => {if (e.key === "Enter") handleClick()}} 
                        onChange={(event)=>handleInput(event.target.value)} 
                        label="عنوان المهمة" variant="outlined" className='w-full' />
                    {/* <input style={{width:'100%',height:'100%',border:'1.5px solid black', borderRadius:'5px',outline:'none',padding:'0px 5px'}} type="text" /> */}
                </Grid>
                <Grid size={4} sx={{borderRadius:"5px",bgcolor:red[900]}} bgcolor={red[900]}>
                    <ButtonSizes />
                </Grid>
            </Grid>
        </Box>
    );
}
