import Box from '@mui/material/Box';
import Container from '@mui/material/Container';

export default function SimpleContainer({children}) {
return (
    <Box className='bg-gray-900 min-h-screen p-10 flex items-center'>
        <Container className='pb-6 max-h-[80vh] overflow-scroll shadow-md min-h-70 rounded-lg ' maxWidth="sm" sx={{ bgcolor: 'white' }}>
            {children}
        </Container>
    </Box>
);
}