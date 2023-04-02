let Card = require('../Models/cardModel');
const mongoose = require('mongoose')


//get all cards 
const getCards = async (req, res) => {
    try{
        const cards = await Card.find().sort({createdAt: -1})

        res.status(200).json(cards)
    } catch (error){
        res.status(500).json({ message: err.message })
    } 
}


//get a single a card
const getCard = async (req, res) => {
    const { id } = req.params
    if (!mongoose.Types.ObjectId.isValid(id)) {
        return res.status(404).json({error: 'No such card'})
    }
    const card = await Card.findById(id)

    if (!card) {
        return res.status(404).json({error: 'No such card'})
    }

    res.status(200).json(card)
}


//create card 
const createCard = async (req, res) => {
    const { title, description } = req.body

    try {
        const card = await Card.create({title, description})
        res.status(200).json(card)
    } catch (error){
        res.status(400).json({error: error.message})
    }
}


//delete card
const deleteCard = async(req, res) => {
    const { id } = req.params
    if (!mongoose.Types.ObjectId.isValid(id)) {
        return res.status(404).json({error: 'No such card'})
    }
    const card = await Card.findOneAndDelete({_id: id})

    if (!card) {
        return res.status(404).json({error: 'No such card'})
    }

    res.status(200).json(card)
}


//update card
const updateCard = async(req, res) => {
    const { id } = req.params
    if (!mongoose.Types.ObjectId.isValid(id)) {
        return res.status(404).json({error: 'No such card'})
    }
    const card = await Card.findOneAndUpdate({_id: id}, {
        ...req.body
    })

    if (!card) {
        return res.status(404).json({error: 'No such card'})
    }

    res.status(200).json(card)
}


module.exports = {
    createCard,
    getCards,
    getCard,
    deleteCard,
    updateCard
}