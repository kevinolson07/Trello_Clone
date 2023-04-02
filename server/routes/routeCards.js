const router = require('express').Router();
const {
    createCard,
    getCards,
    getCard,
    deleteCard,
    updateCard
} = require('../controllers/cardController')

//get all cards
router.get('/', getCards)


//Get a single card
router.get('/:id', getCard)


//Post a new card
router.post('/add', createCard)





router.delete('/:id', deleteCard)

router.patch('/update/:id', updateCard)

module.exports = router;