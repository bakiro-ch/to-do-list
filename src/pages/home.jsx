import SimpleContainer from "../components/container"
import VariantButtonGroup from "../components/button-group"
import BasicCard from "../components/card"
import FullWidthGrid from "../components/grid"
import { useEffect, useState } from "react"
import { v4 as uuidv4 } from 'uuid';
import { cardsContext } from '../context/context'

export default function Home() {
  const [cards, setCards] = useState(() => {
  const saved = JSON.parse(localStorage.getItem("Cards"));
  return saved && Array.isArray(saved)
    ? saved
    : [{ id: uuidv4(), title: 'إنهاء كورس رياكت', isCompleted: false }];
});


  // 🟢 حفظ البيانات في localStorage كل ما cards تتبدل
  useEffect(() => {
    localStorage.setItem("Cards", JSON.stringify(cards));
  }, [cards]);

  let buttonGroup = ['غير منجز', 'منجز', 'الكل'];

  return (
    <cardsContext.Provider value={{ cards, setCards }}>
      <div dir="rtl">
        <SimpleContainer>
          <h1 className="text-7xl text-center font-bold font-[Almarai] py-3">مهامي<hr /></h1>
          <VariantButtonGroup array={buttonGroup} />
          {cards.map((card) => (
            <BasicCard key={card.id} card={card} />
          ))}
          <FullWidthGrid />
        </SimpleContainer>
      </div>
    </cardsContext.Provider>
  );
}
