//*************************import modules******************************
import express from "express";
import mongoose from "mongoose";
import Messages from './dbMessages.js';
import Pusher from "pusher";
import cors from "cors";



//*************************app config**********************************
const app = express()
const port = process.env.PORT || 5000


//************************middleware***********************************
app.use(express.json())
app.use(cors());

//*************************DB config***********************************
// const url = 'mongodb+srv://Ravi1234:tozzTzTspTZOb3dl@cluster0.4skmkwf.mongodb.net/?retryWrites=true&w=majority'
const uri = 'mongodb://root:password@db:27017/my_database';
mongoose.connect(url,{
    useNewUrlParser: true,
    useUnifiedTopology: true
}).catch(err => console.log(err))

const db = mongoose.connection;

db.once('open', ()=>{
    console.log('DB connected')

    const msgContent = db.collection('messagecontents')
    const changeStream = msgContent.watch();

    changeStream.on('change', (change)=>{
        console.log('The change is',change);

        if(change.operationType=="insert"){
            const messageDetails = change.fullDocument
            pusher.trigger("messages", "inserted", {
                name: messageDetails.name,
                message: messageDetails.message,
                timestamp: messageDetails.timestamp,
                recieved: messageDetails.recieved
            });
        }else{console.log("Error occured in Pusher")}
    })
})


//**************************puusher************************************
const pusher = new Pusher({
    appId: "1629666",
    key: "bd0a403dffe80809b82d",
    secret: "bcd71b4e8092aadc35f3",
    cluster: "mt1",
    useTLS: true
  });


//***************************api routes*********************************
app.get('/', (req,res)=>{res.status(200).send('hello world')});

app.get('/messages/sync', async(req, res)=>{
    
    try {
        const docs = await Messages.find({});
        console.log(docs)
        res.status(200).send(docs);
      } catch (err) {
        res.status(500).send(err);
      }
})

app.post('/messages/new', async(req, res)=>{
    const dbMessage = req.body

    try {
        const docs = await Messages.create(dbMessage)
            res.status(201).send(docs)
    } catch (error) {
        console.error(error)
        res.status(500).send(error)
    }
});

//******************************listen************************************
app.listen(port, ()=>console.log(`Listening on port ${port}`))
