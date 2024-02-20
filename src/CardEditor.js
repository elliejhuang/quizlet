import React, { useState } from 'react';
import './CardEditor.css';

function CardEditor (props) {

    const [front, setFront] = useState ('')
    const [back, setBack] = useState ('')
    const [edit, setEdit] = useState(null)



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
        setEdit(index);
    }


    const cards = props.cards.map((c,index) => {
        console.log(c)


        if (index===edit) {
            console.log ("yes its editing", edit)
            return(
                <tr key={index}>
                <input onChange={handleFrontChange} placeholder='Enter new text' value={front}/>
                <input onChange={handleBackChange} placeholder='Enter new text' value={back}/>
                <td><button onClick = {() => (props.deleteCard(index))}>Delete card</button></td>
                <td><button onClick = {() => (handleEdit(index))}>Edit card</button></td>
                </tr>
            );
        }
        else {
            return(
                <tr key={index}>
                <td>{c.front}</td>
                <td>{c.back}</td>
                <td><button onClick = {() => (props.deleteCard(index))}>Delete card</button></td>
                <td><button onClick = {() => (handleEdit(index))}>Edit card</button></td>
                </tr>
            );
        }
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
            <button type="button" onClick = {() => props.switchMode()}> switch to card viewer</button>
        </div>
    );
}
export default CardEditor;