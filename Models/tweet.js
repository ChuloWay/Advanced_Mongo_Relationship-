const mongoose = require('mongoose');
const {Schema}= mongoose;


mongoose.connect('mongodb://localhost:27017/relationshipDemo', { useNewUrlParser: true })
    .then(() => {
        console.log(("MONGO CONNECTION OPEN!!!"));
    })
    .catch(err => {
        console.log("Oh No Error!!");
        console.log(err);
    })


const  userSchema = new Schema({
    username: String,
    age: Number
})

const tweetSchema = new Schema({
    text: String,
    likes: Number,
    
})

const farmSchema = new mongoose.Schema({
    name: String,
    city: String,
    products: [
        {type: Schema.Types.ObjectId, ref:'Product'}
    ]
})