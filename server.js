import express from "express";
import mongoose from "mongoose";
import cors from "cors";
import Cards from './schema.js'

// App Confuguration

const app = express();
const port = process.env.PORT || 5000;
const connectionURL = `mongodb+srv://admin:admin123@cluster0.h7i4u5y.mongodb.net/tinderdb?retryWrites=true&w=majority`

// MuiddleWare

app.use(express.json());
app.use(cors());

// DB Config

// mongoose.connect(ConnectionURL, {
//     useNewUrlParser: true,
//     useCreateIndex: true,
//     useUnifiedTopology: true
// })

mongoose.connect(connectionURL, { autoIndex: false });

// API Endpoints

app.get('/', (req, res) => {
    res.send('Hello World');
})


app.get('/tinder/cards', (req, res)=>{
    
    Cards.find((err, data)=>{
        if(err){
            res.status(500).send(err)
        }else{
            res.status(200).send(data)
        }
    })
    
})

app.post('/tinder/cards', (req, res)=>{
    const cardDB = req.body;
    Cards.create(cardDB, (err, data)=>{
        if(err){
            res.status(500).send(err);
        }else{
            res.status(201).send(data);
        }
    })

})

// Listner

app.listen(port, () => console.log(`Listening on port ${port}`));
