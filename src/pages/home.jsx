import SimpleContainer from "../components/container"
import VariantButtonGroup from "../components/button-group"
import BasicCard from "../components/card"
import FullWidthGrid from "../components/grid"
import { useEffect, useState } from "react"
import { v4 as uuidv4 } from 'uuid';
import { cardsContext } from '../context/context'
import { filterContext } from "../context/context"

export default function Home() {
  const [cards, setCards] = useState(() => {
  const saved = JSON.parse(localStorage.getItem("Cards"));
  return saved?saved:[]
});


  // 🟢 حفظ البيانات في localStorage كل ما cards تتبدل
  useEffect(() => {
    localStorage.setItem("Cards", JSON.stringify(cards));
  }, [cards]);

  let buttonGroup = ['غير منجز', 'منجز', 'الكل'];
  const [filter,setFilter] = useState("all")

  return (
  <filterContext.Provider value={{filter,setFilter}}>
    <cardsContext.Provider value={{ cards, setCards }}>
      <div dir="rtl">
        <SimpleContainer>
          <h1 className="text-7xl text-center font-bold font-[Almarai] py-3">مهامي<hr /></h1>
          <VariantButtonGroup array={buttonGroup} />
          {cards.map((card) => {
            if(filter==="done"){
              return card.isCompleted?<BasicCard key={card.id} card={card}/>:<></>
            }
            else if(filter==="undone"){
              return !card.isCompleted?<BasicCard key={card.id} card={card}/>:<></>
            }
            else return <BasicCard key={card.id} card={card}/>
})}
          <FullWidthGrid />
        </SimpleContainer>
      </div>
    </cardsContext.Provider>
  </filterContext.Provider>
  );
}
