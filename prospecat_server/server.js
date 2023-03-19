const express = require("express")
const app = express()
const cors = require('cors')
app.use(cors())
app.use(express.json())

const mongoose = require("mongoose")
mongoose.connect("mongodb+srv://prospecat:prospecat@cluster0.h1vp0lq.mongodb.net/prospecat?retryWrites=true&w=majority")


// Plan model
const PlansModel = require('./models/Plans')

// Show Plans
app.get("/plans", async(req,res)=>{
    const plans = await PlansModel.find();
    res.json(plans)
})

// Create Plan
app.post("/createPlan", async (req, res) => {
    const newPlan = new PlansModel(req.body);
    await newPlan.save();
    res.json(req.body)
})


// Delete Plan
app.delete("/deletePlan/:id", async (req, res) => {
    try {
        const planId = req.params.id;
        const result = await PlansModel.deleteOne({ _id: planId });
        res.json({ message: "Plan deleted successfully", result: result });
    } catch (error) {
        res.status(500).json({ message: "Error deleting plan", error: error });
    }
  });


// Update Plan
app.put('/updatePlan/:id', async (req, res) => {
    const { id } = req.params;
    const { title, price, leadssearch, emailsearch, mlps, importcsv } = req.body;
    try {
      const updatedPlan = await PlansModel.findByIdAndUpdate(
        id,
        { title, price, leadssearch, emailsearch, mlps, importcsv },
        { new: true }
      );
      res.json(updatedPlan);
    } catch (error) {
      console.error(error);
      res.status(500).send('Error updating plan');
    }
  });
  


app.listen("3001", ()=>{
    console.log("server works!!")
})