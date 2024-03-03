import React, {useState} from 'react';
import CardEditor from './CardEditor';
import CardViewer from './CardViewer';
import Card from './Card';
import {
  BrowserRouter as Router,
  Switch,
  Route,
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
  
  // if (editor === true) {
  //   return (
  //     <div>
  //       <ul>
  //         <li>
  //           <Link to="/"> CardEditor </Link>
  //         </li>
  //       </ul>
  //     </div>

  //   )
  // }
  return (
    <div>
    {editor ? <CardEditor cards={cards} addCard={addCard} deleteCard={deleteCard} switchMode={switchMode} saveCard = {saveCard}/> : <CardViewer cards = {cards} switchMode = {switchMode} />}
    </div>
  ) 
}

export default App;
