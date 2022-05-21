const mongoose = require('mongoose');

mongoose.connect('mongodb://localhost:27017/relationshipDemo',{ useNewUrlParser: true})
.then(() => {
    console.log(("MONGO CONNECTION OPEN!!!"));
})
.catch(err =>{
    console.log("Oh No Error!!");
    console.log(err);
})

const userSchema = new mongoose.Schema({
    first: String,
    last: String,
    addresses: [
        { _id: {id: false},
            street: String,
            city: String,
            state: String,
            country: String
        }
    ]
})
const User = mongoose.model('User', userSchema);

const makeUser = async ()=>{
    const u = new User({
        first: 'Harry',
        last: 'Potter'
    })
    u.addresses.push({
        street: '123 Sesame',
        city: 'New York',
        state:'NY',
        country: 'USA'
    })
  const res = await  u.save()
  console.log(res);
}

makeUser();