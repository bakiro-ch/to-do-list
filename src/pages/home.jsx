import { useEffect, useState } from "react"
import { v4 as uuidv4 } from 'uuid';

import SimpleContainer from "../components/container"
import VariantButtonGroup from "../components/button-group"
import BasicCard from "../components/card"
import FullWidthGrid from "../components/grid"
import { cardsContext,filterContext } from '../context/context'
import { snackbarContext } from "../context/snackbarContext";
import SimpleSnackbar from "../components/snackbar";


export default function Home() {
  const [cards, setCards] = useState(() => {
  const saved = JSON.parse(localStorage.getItem("Cards"));
  return saved?saved:[]
});

  const [open,setOpen] = useState()
  const [message,setMessage] = useState("")

  // 🟢 حفظ البيانات في localStorage كل ما cards تتبدل
  useEffect(() => {
    localStorage.setItem("Cards", JSON.stringify(cards));
  }, [cards]);

  let buttonGroup = ['غير منجز', 'منجز', 'الكل'];
  const [filter,setFilter] = useState("all")

  return (
  <filterContext.Provider value={{filter,setFilter}}>
    <cardsContext.Provider value={{ cards, setCards }}>
      <snackbarContext.Provider value={{open,setOpen,message,setMessage}}>
        <div dir="rtl">
          <SimpleContainer>
            <h1 className="text-7xl text-center font-bold font-[Almarai] py-3">مهامي<hr /></h1>
            <VariantButtonGroup array={buttonGroup} />
            {cards.map((card) => {
              if(filter==="done"){
                if(card.isCompleted)
                return <BasicCard key={card.id} card={card}/>
              }
              else if(filter==="undone"){
                if(card.isCompleted==false)
                return <BasicCard key={card.id} card={card}/>
              }
              else return <BasicCard key={card.id} card={card}/>
  })}
            <FullWidthGrid />
          </SimpleContainer>
          {open?<SimpleSnackbar message={message}/>:<></>}
        </div>
      </snackbarContext.Provider>
    </cardsContext.Provider>
  </filterContext.Provider>
  );
}
