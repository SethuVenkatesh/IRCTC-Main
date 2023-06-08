const express=require('express')
const mongoose=require('mongoose')
const cors=require('cors')
const bodyParser=require('body-parser')

const PORT=3001
//mongodb connection

mongoose.connect('mongodb+srv://admin:admin@cluster0.hi9dbus.mongodb.net/?retryWrites=true&w=majority',
  {
    useNewUrlParser: true,
    useUnifiedTopology: true
  }
);

//initialzing app
const app=express()

//routes path
const train=require('./routes/trains')
const booking=require("./routes/booking")

//applying middlewares cors and bodyparser
app.use(cors())
app.use(bodyParser.json())


app.use('/train',train)
app.use('/booking',booking)




//end points
app.listen(PORT,(req,res)=>{
    console.log(`Listening on port ${PORT}`)
})

