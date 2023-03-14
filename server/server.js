const express= require('express');
const mongoose= require('mongoose');
const bodyParser= require('body-parser');
const app= express();

app.use(bodyParser.json());

const connectionString='mongodb+srv://admin:123@clustershoppingcart.dgy50gg.mongodb.net/test';
mongoose.connect(connectionString,{
    useNewUrlParser:true,
    useUnifiedTopology:true
})
.then(res=>console.log("conn done"));
const Product=mongoose.model("product",new mongoose.Schema({
        id:String,
        title:String,
        imageUrl:String,
        desc:String,
        price:Number,
        size:[String]
}));

app.get('/api/products',async (req,res)=>{
    const products=await Product.find();
    res.send(products);
});


app.post('/api/products',async (req,res)=>{
    const newProduct =new Product(req.body);
    const savedProduct=await newProduct.save();
    res.send(savedProduct);
})


app.delete('/api/products/:id',async (req,res)=>{
    const deletesdProduct=await Product.findByIdAndDelete(req.params.id);
    res.send(deletesdProduct);
});

app.listen(5001,()=>{
    console.log("running on port 5001");
})





