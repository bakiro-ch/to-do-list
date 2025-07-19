import Card from '@mui/material/Card';
import CardActions from '@mui/material/CardActions';
import CardContent from '@mui/material/CardContent';
import Typography from '@mui/material/Typography';
import { blue,grey } from '@mui/material/colors';
import DoneOutlineOutlinedIcon from '@mui/icons-material/DoneOutlineOutlined';
import ModeEditOutlineOutlinedIcon from '@mui/icons-material/ModeEditOutlineOutlined';
import DeleteOutlineOutlinedIcon from '@mui/icons-material/DeleteOutlineOutlined';
import IconButtons from './icon-button';
import { cardContext } from '../context/context';

export default function BasicCard({card}) {
    // console.log(cards,cardContext)

return (
    <cardContext.Provider value={card}>
        <Card className='hover:py-2 duration-300 transition-all!' sx={{ bgcolor: blue[900], marginTop:'20px', minWidth: 275, display:'flex', justifyContent:'space-between' }}>
            <CardContent >
                <Typography sx={{textDecorationLine:card.isCompleted?'line-through':'none'}} className='font-bold!'  variant='h4' color='white'>
                    {card.title}
                </Typography>
                <Typography gutterBottom sx={{color:grey[300],fontSize:'17px', marginTop:"5px"}}>
                    {card.note}
                </Typography>
            </CardContent>
            <CardActions sx={{gap:"20px"}}>
                {/* sx={{ bgcolor:card.isCompleted?'green':'white', border:`1.5px solid ` }} */}
                <IconButtons color={'green'}>
                    <DoneOutlineOutlinedIcon sx={{color:card.isCompleted?'white':'green'}}/>
                </IconButtons>
                <IconButtons color={'blue'}>
                    <ModeEditOutlineOutlinedIcon sx={{color:'blue'}}/>
                </IconButtons>
                <IconButtons color={'red'}>
                    <DeleteOutlineOutlinedIcon sx={{color:'red'}}/>
                </IconButtons>
            </CardActions>
        </Card>
    </cardContext.Provider>
);
}
