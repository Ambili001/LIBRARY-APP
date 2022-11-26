const express = require("express");
const app = new express();
require('./middleware/mongoDB')
app.use(express.json())
app.use(express.urlencoded({extended:true}))
const cors=require("cors");
app.use(cors());
const UserData = require('./models/user')

const BookData = require('./models/book')

app.post('/api/booklist', (req, res) => {
     BookData.find((error,data)=>{
    if(error){
        res.send(error);
    }
    else{
        res.send(data);
    }
})

})
app.delete('/api/bookdelete/:id', async (req, res) => {
    let id=req.params.id;
await BookData.findByIdAndDelete({"_id":req.body._id},id)
})
app.put('/api/bookupdate', async (req, res) => {
let data = req.body;
await BookData.findByIdAndUpdate({"_id":req.body._id},data)
    res.send(data)
})
app.post('/api/bookadd',async (req, res) => {
let data = req.body;
const book = new BookData(data);
await book.save((error,data)=>{
if(error){
res.send(error);
}
else{res.send(data);}
})
})

app.post('/api/usersignup', async (req, res) => {
    let data = req.body;
    const user = new UserData(data);
    await user.save((error,data)=>{
    if(error){
    res.send(error);
    }
    else{res.send(data);}
    })
  
})



app.listen(3000,()=>{
    console.log("Server is listening to http://localhost:3000");
})
