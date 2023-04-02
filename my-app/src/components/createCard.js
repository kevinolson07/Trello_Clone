import React, { Component, useState } from "react";
import Toast from 'react-bootstrap/Toast';
import 'bootstrap/dist/css/bootstrap.min.css';




const CardForm = () => {
  const [title, setTitle] = useState('')
  const [description, setDescription] = useState('')
  const [error, setError] = useState(null)

  const handleSubmit = async (e) => {


    const card = { title, description}

    const response = await fetch('/cards/add', {
      method: 'POST',
      body: JSON.stringify(card),
      headers: {
        'Content-Type': 'application/json'
      }
    })
    const json = await response.json

    if (!response.ok) {
      setError(json.error)

    }
    if (response.ok) {
      setTitle('')
      setDescription('')
      setError(null)
      console.log('new card added', json)
    }
  }



  return(
    <Toast>
    <form className="create" onSubmit={handleSubmit}>
      <input
      placeholder="Title"
      type="text"
      onChange={(e) => setTitle(e.target.value)}
      value={title}/>
      <input
      placeholder="Description"
      type="text"
      onChange={(e) => setDescription(e.target.value)}
      value={description}/>
      <button>Add Card</button>
    </form>
    </Toast>
  )
}

export default CardForm;
