const mongoose = require("mongoose")

const Mongodb = mongoose.connect("mongodb+srv://pathanarbaj03328:HMBROJiWe5kzB5XW@cluster0.3pqmoz2.mongodb.net/?retryWrites=true&w=majority&appName=Cluster0",{
    family:4,
    useNewUrlParser : true,
    useUnifiedTopology : true,
}).then(()=>{
    console.log("connect mongoose with mongodb")
}).catch(()=>{
    console.log("canoot connect mongoose with mongodb !")
})


