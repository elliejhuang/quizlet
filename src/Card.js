import React, { useState } from 'react';


function Card(props) {

    const [front, setFront] = useState ('')
    const [back, setBack] = useState ('')
    const [editState, setEdit] = useState (false)

    console.log("console log here:",props.cards)

    const handleFrontChange = event => {
        console.log("front", event.target.value);
        setFront (event.target.value)
    }

    const handleBackChange = event => {
        console.log("back:" ,event.target.value);
        setBack (event.target.value)
        
    }

    const handleEdit =(event,index) => {
        props.editCard (front, back, index);
        setEdit(props.index);
    }

    if (editState===true) {
        console.log("console log here:",props.cards)
        return(
            <tr key={props.index}>
            <input onChange={handleFrontChange} placeholder='Enter new text' value={front}/>
            <input onChange={handleBackChange} placeholder='Enter new text' value={back}/>
            <td><button onClick = {() => (props.deleteCard(props.index))}>Delete card</button></td>
            <td><button onClick = {() => (handleEdit(props.index))}>Edit card</button></td>
            </tr>
        );
    }
    else {
        console.log("console log here:",props.cards)
        return(
            <tr key={props.index}>
            <td>{props.cards.front}</td>
            <td>{props.cards.back}</td>
            <td><button onClick = {() => (props.deleteCard(props.index))}>Delete card</button></td>
            <td><button onClick = {() => (handleEdit(props.index))}>Edit card</button></td>
            </tr>
        );
   }
}

export default Card;