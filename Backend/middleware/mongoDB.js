const mongoose = require('mongoose')
mongoose.connect('mongodb+srv://Ambili97:thiruvonum001@cluster0.pkmrzlb.mongodb.net/LibraryApp?retryWrites=true&w=majority ', {
    useNewUrlParser: true,
    useUnifiedTopology: true
}). then(()=>{
    console.log('mongoDB connected successfully!!!')
}).catch((error)=>{
    console.log(error.message)
})