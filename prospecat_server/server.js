const express = require("express")
const app = express()

const cors = require("cors")
app.use(cors())

const mongoose = require("mongoose")
mongoose.connect("mongodb+srv://prospecat:prospecat@cluster0.h1vp0lq.mongodb.net/prospecat?retryWrites=true&w=majority")


// User model
const PlansModel = require('./models/Plans')

// Get request
app.get("/users", async(req,res)=>{
    const users = await PlansModel.find();
    res.json(users)
})

/*app.post("/createUser", async (req, res) => {
    const newPlan = new PlansModel(req.body);
    await newPlan.save();
    res.json(req.body)
})*/



app.listen("3001", ()=>{
    console.log("server works!!")
})