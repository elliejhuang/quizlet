import React, {useState} from 'react';
import CardEditor from './CardEditor';
import CardViewer from './CardViewer';
import Card from './Card';

function App(props) {

  const [cards, setCards] = useState([
    {front: 'front', back: 'back'},
    {front: 'front1', back: 'back2'}
    ]);

  const [editor, setEditor] = useState (true);

  const addCard = (card) => {
    
    console.log(card)
    const newCards = cards.slice().concat(card);
    setCards(newCards)
    console.log("newCards", newCards)
    
  };

  const deleteCard = (index) => {
    console.log(index)
    let newCards = cards.slice();
    newCards.splice(index, 1);
    setCards(newCards);
  };


  const editCard = (inputFront, inputBack, index) => {
    let newCards=cards.map((i, card) => {
      if (i === index){
        return {front: inputFront, back: inputBack}
      }
      else {
        return card
      }

    });

    setCards(newCards);
  }


  const switchMode = () => {
    setEditor(!editor);
  }

  return (
    <div>
    {editor ? <CardEditor cards={cards} addCard={addCard} deleteCard={deleteCard} switchMode={switchMode} editCard = {editCard}/> : <CardViewer cards = {cards} switchMode = {switchMode} />}
    </div>
  ) 
}

export default App;
