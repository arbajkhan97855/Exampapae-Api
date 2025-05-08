const express = require("express")
const app = express()
const cors = require("cors")
const bodyparser = require("body-parser")
const connectdata = require("./Schema/Connect")
const Qschema = require("./Schema/QuestionSchema")
const Sschema = require("./Schema/ScorecartSchema")
const Uschema = require("./Schema/UsersSchema")
const Env = require('dotenv').config();

app.use(bodyparser.json())
app.use(cors(origin = "*"))
const port = 5000

app.get("/",async(req,res)=>{
    const udatta = await Uschema.find();
    const sdatta = await Sschema.find();
    const qdatta = await Qschema.find();
    res.send({ "users" : udatta,
               "question" : qdatta,
               "scorecard" : sdatta
    })
})

app.get("/users",async(req,res)=>{
    const datta = await Uschema.find();
    res.send({datta})
})

app.get("/scorecard",async(req,res)=>{
    const datta = await Sschema.find();
    res.json(datta)
})

app.get("/question",async(req,res)=>{
    const datta = await Qschema.find();
    res.json(datta)
})

//  paramiter
app.get("/users/:id",async(req,res)=>{
    const datta = await Uschema.findOne({"_id" : req.params.id});
    res.json(datta)
})

app.get("/scorecard/:id",async(req,res)=>{
    const datta = await Sschema.findOne({"_id" : req.params.id});
    res.json(datta)
})

app.get("/question/:id",async(req,res)=>{
    const datta = await Qschema.findOne({"_id" : req.params.id});
    res.json(datta)
})

// POST
app.post("/users",async(req,res)=>{
    const mydata = new Uschema();
    mydata.username = req.body.username;
    mydata.email = req.body.email;
    mydata.number = req.body.number;
    mydata.password = req.body.password;
    mydata.useimage = req.body.useimage;

    const datavalue = await mydata.save()
    if(datavalue){
        console.log(`successfull post data for ${mydata.username}`)
        res.status(200).json({ message: "User created successfully" });//jab backend se msg dena ho/ya alert me dikhana ho post hone pr 
    }else{
        console.log("cannot successfull post data")
    }
})

app.post("/scorecard",async(req,res)=>{
    const mydata = new Sschema();
    mydata.jsscoral = req.body.jsscoral;
    mydata.reactscore = req.body.reactscore;   
    const datavalue = await mydata.save()
    if(datavalue){
        res.status(200).json({ message: "User created successfully" });//jab backend se msg dena ho/ya alert me dikhana ho post hone pr 
    }else{
        console.log("cannot successfull post data")
    }
})

app.post("/question",async(req,res)=>{
    const mydata = new Qschema();
    mydata.category = req.body.category;
    mydata.qst = req.body.qst;
    mydata.options1 = req.body.options1;
    mydata.options2 = req.body.options2;
    mydata.options3 = req.body.options3;
    mydata.options4 = req.body.options4;
    mydata.result= req.body.result;

    const datavalue = await mydata.save()
    if(datavalue){
        console.log(`successfull post data for ${mydata.category}`)
        res.status(200).json({ message: "User created successfully" });//jab backend se msg dena ho/ya alert me dikhana ho post hone pr 
    }else{
        console.log("cannot successfull post datakk")
    }
})

// patch
app.patch("/users/:id", async (req, res) => {
    const datta = await Uschema.findByIdAndUpdate(req.params.id, req.body);
    const updatedata = res.send(datta);
    if(updatedata){
        res.status(200).json({
            message : "succefull data edit"
        })
    }else{
        res.status(404).json({ message: "User not edit" });
    }
})

app.patch("/scorecard/:id", async (req, res) => {
    const datta = await Sschema.findByIdAndUpdate(req.params.id, req.body);
    const updatedata = res.json(datta);
    if(updatedata){
        res.status(200).json({
            message : "succefull data edit"
        })
    }else{
        res.status(404).json({ message: "User not edit" });
    }
})

app.patch("/question/:id", async (req, res) => {
    const datta = await Qschema.findByIdAndUpdate(req.params.id, req.body);
    const updatedata = res.json(datta);
    if(updatedata){
        res.status(200).json({
            message : "succefull data edit"
        })
    }else{
        res.status(404).json({ message: "User not edit" });
    }
})

// DELETE
app.delete("/users/:id", async(req, res) =>{
    const datta = await Uschema.findByIdAndDelete(req.params.id)
    if(datta){
        res.status(200).json({
            message : "succefully delete"
        })
    }else{
        res.status(404).json({ message: "User not delete" });
    }
})

app.delete("/scorecard/:id", async(req, res) =>{
    const datta = await Sschema.findByIdAndDelete(req.params.id)
    if(datta){
        res.status(200).json({
            message : "succefully delete"
        })
    }else{
        res.status(404).json({ message: "User not delete" });
    }
})

app.delete("/question/:id", async(req, res) =>{
    const datta = await Qschema.findByIdAndDelete(req.params.id)
    if(datta){
        res.status(200).json({
            message : "succefully delete"
        })
    }else{
        res.status(404).json({ message: "User not delete" });
    }
})
app.listen(port,(req,res)=>{
    console.log("website succefull run ", port);
    
})



