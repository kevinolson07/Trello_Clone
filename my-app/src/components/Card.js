import React, { useEffect, useState } from 'react';

// import Jumbotron from 'react-bootstrap/Jumbotron';
import Toast from 'react-bootstrap/Toast';
import Container from 'react-bootstrap/Container';
import Button from 'react-bootstrap/Button';






export default function Card() {

    const [cards, setCards] = useState(null)

    useEffect(() => {
        const fetchCards = async () => {
            const response = await fetch('/cards')
            const json = await response.json()

            if (response.ok) {
                setCards(json)
            }
        }

        fetchCards()
    }, [])
    
    return(
            
        <div className='cards'>
            {cards && cards.map((card) => (
            <Toast>
                <p key={card._id}>{card.title}</p>
            </Toast>
            ))}
            
       </div>
            
       
    );
}