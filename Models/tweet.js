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



    // One To Millionzzzzz
const  userSchema = new Schema({
    username: String,
    age: Number
})

const tweetSchema = new Schema({
    text: String,
    likes: Number,
    user: {
        type: Schema.Types.ObjectId, ref: 'User'
    }
})

// const farmSchema = new mongoose.Schema({
//     name: String,
//     city: String,
//     products: [
//         {type: Schema.Types.ObjectId, ref:'Product'}
//     ]
// })

const User = mongoose.model('User', userSchema);
const Tweet = mongoose.model('Tweet', tweetSchema);


// const makeTweet = async ()=> {
//     const user = await User.findOne({username: 'Chulo', age: 42})
//     const tweet2 = new Tweet({text:'Look who is here now', likes:10})
//     tweet2.user = user;
//     tweet2.save();
// }
// makeTweet();

const findTweet = async ()=>{
 const t = await Tweet.find({}).populate('user',)
 console.log(t);
}

findTweet();