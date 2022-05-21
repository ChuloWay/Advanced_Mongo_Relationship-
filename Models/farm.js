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


const productSchema = new mongoose.Schema({
    name: String,
    price: Number,
    season: {
        type: String,
        enum: ['Spring', 'Summer', 'Fall', 'Winter']
    }
});
const farmSchema = new mongoose.Schema({
    name: String,
    city: String,
    products: [
        {type: Schema.Types.ObjectId, ref:'Product'}
    ]
})
const Product = mongoose.model('Product', productSchema);
const Farm = mongoose.model('Farm', farmSchema);



// 1st collection
// Product.insertMany([

//     { name: ' Goddess Melon', price: 3.99, season: 'Summer' },
//     { name: ' Sugar Baby Watermelon', price: 4.99, season: 'Summer' },
//     {
//         name: 'Asparagus', price: 3.59, season: 'Summer'
//     }])


// 2nd Collection where we ref products from the first collection through its objectId
// const makeFarm = async () => {
//     const farm =  new Farm({ name: 'Full Belly Farms', city: 'Guinda, CA'})
//     const melon = await Product.findOne({name: ' Goddess Melon'})
//     farm.products.push(melon)
//    await farm.save();
//     console.log(farm);
// }
// makeFarm();

const addProduct = async () => {
    const farm = await Farm.findOne({ name: 'Full Belly Farms'})
    const watermelon = await Product.findOne({name: 'Asparagus'})
    farm.products.push(watermelon)
    farm.save()
    console.log(farm);
}

addProduct();