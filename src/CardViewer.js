import React, { useState } from 'react';


function CardViewer (props) {


const [index, setIndex] = useState(0);
const [showFront, setShowFront] = useState(true);

const displayCard = () => {
    let currentCard = showFront ? props.cards.index.front : props.cards.index.back;

    return (
        <div>
        {currentCard}
        </div>
    );
    };


    return (
        <div>
        <button type="button" onClick = {() => setShowFront (!showFront)}>flip card</button>
        <button type="button" disabled={index===0} onClick = {() => setIndex(index - 1)}> previous </button>
        <button type="button" disabled={index===((props.cards.length)-1)} onClick = {() => setIndex(index + 1)}> next </button>
        <h2> card viewer</h2>
        {displayCard}
        <button type="button" onClick = {() => props.switchMode()}> switch to card editor</button>
        </div>
    );
};



export default CardViewer;