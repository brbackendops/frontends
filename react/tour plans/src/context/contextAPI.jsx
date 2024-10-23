import { createContext, useState } from "react";


let cardList = createContext();
cardList.displayName = 'cardList';

function CardProvider({ children }){
    
    const [cards,setCards] = useState([])
    const pushInto = (card) => setCards([...cards,card]);

    const updateArr = (idx,value) => {
        setCards((prev) => {
            const updatedCards = prev.map((card,indx) => {
                if (indx === idx){
                    return {...card,completed:value}
                }
                return card
            });
            return updatedCards
        });
    }
    
    return (
        <cardList.Provider value={{ cards , pushInto , updateArr }}>
            {children}
        </cardList.Provider>
    )
}

export  {
    CardProvider,
    cardList
};
