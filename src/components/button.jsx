import Button from '@mui/material/Button';
import { cardsContext } from '../context/context';
import { cardContext } from '../context/context';
import { useContext } from 'react';

export default function BasicButtons({children}) {
  const {cards,setCards} = useContext(cardsContext)
  // console.log(cards)

  const card = useContext(cardContext)
  function handleCompleted(){
    setCards((prev)=>prev.map((e)=>e.id===card.id?{...e,isCompleted:!e.isCompleted}:e))
    console.log(card.id,card.title,card.isCompleted)
  }
  return (
      <Button onClick={handleCompleted} variant="text">{children}</Button>
  );
}