import Button from '@mui/material/Button';
import ButtonGroup from '@mui/material/ButtonGroup';
import Box from '@mui/material/Box';

export default function VariantButtonGroup({array}) {
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
            {array.map((element)=><Button className='hover:text-red-700! hover:bg-red-50!'>{element}</Button>)}
        </ButtonGroup>
    </Box>
);
}