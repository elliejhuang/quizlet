import React, { useState } from 'react';
import { Link } from 'react-router-dom'; 


function Card(props) {

    const [front, setFront] = useState ('')
    const [back, setBack] = useState ('')
    const [editState, setEdit] = useState (false)


    const handleFrontChange = event => {
        console.log("front", event.target.value);
        setFront (event.target.value)
    }

    const handleBackChange = event => {
        console.log("back:" ,event.target.value);
        setBack (event.target.value)
    }

    const editCard = event => {
        setEdit(true);
    }

    const saveCard = event => {
        console.log(front, back)
        props.saveCard (front, back, props.index);
        setEdit(false)
    }




    if (editState===true) {
        console.log("console log here:",props.cards)
        return(
            <tr key={props.index}>
            <td><input onChange={handleFrontChange} placeholder='Enter new text' value={front}/></td>
            <td><input onChange={handleBackChange} placeholder='Enter new text' value={back}/></td>
            <td><button onClick = {() => (props.deleteCard(props.index))}>Delete card</button></td>
            <td><button onClick = {() => (saveCard())}>Save card</button></td>
            </tr>
        );
    }
    else {
        console.log("SAVE", props.card)
        return(
            <tr key={props.index}>
            <td>{props.card.front}</td>
            <td>{props.card.back}</td>
            <td><button onClick = {() => (props.deleteCard(props.index))}>Delete card</button></td>
            <td><button onClick = {() => (editCard(props.index))}>Edit card</button></td>
            </tr>
        );
   }
}

export default Card;