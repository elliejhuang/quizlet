import React, { useState } from 'react';
import './CardEditor.css';

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


    const cards = props.cards.map((c,index) => {
        console.log(c)
        return (
            <tr key={index}>
                <td>{c.front}</td>
                <td>{c.back}</td>
                <td><button>Delete card</button></td>
            </tr>
        
        );
    });

    return (
        <div>
            <h2>Card Editor</h2>
            <table>
                <thead>
                    <tr>
                        <th>front</th>
                        <th>back</th>
                        <th>delete</th>
                    </tr>
                </thead>
                <tbody>{cards}</tbody>
            </table>
            <br/>

            <input onChange={handleFrontChange} placeholder='Front of card' value={front}/>
            <input onChange={handleBackChange} placeholder='Back of card'value={back}/>
            <button onClick = {()=>(props.addCard({front, back}))}> Add Card</button>
        </div>
    );
}
export default CardEditor;