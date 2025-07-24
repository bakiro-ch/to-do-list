import Box from '@mui/material/Box';
import Container from '@mui/material/Container';


export default function SimpleContainer({children}) {
return (
    <Box className='bg-gray-900 min-h-screen flex items-center'>
        <Container className='pb-6 sm:max-h-[90vh] overflow-auto shadow-md rounded-lg ' maxWidth="sm" sx={{ bgcolor: 'white' }}>
            {children}
        </Container>
    </Box>
);
}