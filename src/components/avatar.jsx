import Avatar from '@mui/material/Avatar';
import { useContext } from 'react';

import { cardContext } from '../context/context';


export default function LetterAvatars({color=null,children}) {
    const card = useContext(cardContext)
return (
        <Avatar className='hover:bg-gray-300! hover:shadow-xl/30 duration-300' 
            sx={{ bgcolor:card.isCompleted?'green':'white', border:`1.5px solid ${color}` }}>
            {children}
        </Avatar>
);
}
