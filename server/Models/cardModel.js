const mongoose = require('mongoose');


const Schema = mongoose.Schema;

const cardSchema = new Schema({
    title: {
        type: String,
        required: true
    },
    description: {
        type: String, 
        required: true
    },
}, { timestamps: true });
// const cardSchema = mongoose.Schema({
//     title: {
//         type: String,
//         require: true,
//     },
//     description: {
//         type: String,
//         require: true,
//         // default: '',
//     },
//     date: {
//         _id: false,
//         startDate: {
//             type: Date,
//         },
//         dueDate: {
//             type: Date,
//         },
//         dueTime: {
//             type: String,
//         },
//         reminder: {
//             type: Boolean,
//         },
//         completed: {
//             type: Boolean,
//             default: false,
//         },
// 	},
//     owner: {
// 		type: mongoose.Schema.Types.ObjectId,
// 		ref: 'list',
// 	},
// });
const Card = mongoose.model('Card', cardSchema);
module.exports = Card;