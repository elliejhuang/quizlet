import React, { useState } from 'react';
import './CardEditor.css';
import Card from './Card';
import { Link } from 'react-router-dom'; 

function CardEditor (props) {

    const [front, setFront] = useState ('')
    const [back, setBack] = useState ('')



    const handleFrontChange = event => {
        console.log("front", event.target.value);
        setFront (event.target.value)
    }

    const handleBackChange = event => {
        console.log("back:" ,event.target.value);
        setBack (event.target.value)
        
    }

    // const editCard =(event,index) => {
    //     props.editCard (front, back, index);
    //     // setEdit(true);
    // }


    const deleteCard = (event,index) => {
        props.deleteCard(index)
    }


    const cards = props.cards.map((c,index) => {
        console.log ("cards in cardEditor", c)
        return (
        <Card card={c} index={index} deleteCard= {deleteCard} saveCard={props.saveCard}/>
        )

    })



    return (
        <div>
            <h2>Card Editor</h2>
            <table>
                <thead>
                    <tr>
                        <th>front</th>
                        <th>back</th>
                        <th>delete</th>
                        <th>edit</th>
                    </tr>
                </thead>
                <tbody>
                {cards}
                </tbody>
            </table>
            <br/>
            <input onChange={handleFrontChange} placeholder='Front of card' value={front}/>
            <input onChange={handleBackChange} placeholder='Back of card'value={back}/>
            <button onClick = {()=>(props.addCard({front, back}))}> Add Card</button>
            {/* <button type="button" onClick = {() => props.switchMode()}> switch to card viewer</button> */}
            <Link to= "/viewer">Card Viewer</Link>

        </div>
    );
}
export default CardEditor;