import Button from '@mui/material/Button';
import ButtonGroup from '@mui/material/ButtonGroup';
import Box from '@mui/material/Box';
import { filterContext } from '../context/context';
import { useContext } from 'react';

export default function VariantButtonGroup({array}) {
    const {filter,setFilter} = useContext(filterContext)
    function handleFilter(element){
        if(element==='منجز'){
            setFilter("done")
        }
        else if(element==='غير منجز'){
            setFilter("undone")
        }
        else setFilter("all")
    }
return (
    <Box
        sx={{
            display: 'flex',
            justifyContent:'center',
            marginTop:'20px',
        }}
        dir='ltr'
    >
        <ButtonGroup variant="outlined" aria-label="Basic button group">
            {array.map((element)=><Button onClick={()=>handleFilter(element)} >{element}</Button>)}
        </ButtonGroup>
    </Box>
);
}