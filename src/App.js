import React, {useState} from 'react';
import CardEditor from './CardEditor';
import CardViewer from './CardViewer';
import Card from './Card';
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Routes,
  Navigate,
  Link,
  useRouteMatch,
  useParams,
} from 'react-router-dom';

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


  const saveCard = (front, back, index) => {
    console.log ("app savecard", front, back)
    let newCards = cards.slice()

    newCards.splice(index, 1, {front, back})

    console.log("this is newCards", newCards)

    setCards(newCards);
  }



  const switchMode = () => {
    setEditor(!editor);
  }
  
  return (
    <Router>
      <Routes>
        <Route path= "/edit" element = {<CardEditor cards={cards} addCard={addCard} deleteCard={deleteCard} switchMode={switchMode} saveCard = {saveCard} />}/>
        <Route path="/viewer" element = {<CardViewer cards = {cards} switchMode = {switchMode} />}/>
        <Route path="*" element= {<Navigate to="/edit" />}/>
      </Routes>
    </Router>
  );
}

export default App;
