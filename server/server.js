const express = require('express');

const app = express();
const cors = require('cors');
app.use(cors())
app.use(express.json())
const jwt = require('jsonwebtoken');
const bcrypt = require('bcrypt');

const   userName ="prospecat",
        password =process.env.PASSWORD,
        database ="prospecat";

const mongoose = require("mongoose")
mongoose.connect(`mongodb+srv://${userName}:${password}@cluster0.h1vp0lq.mongodb.net/${database}?retryWrites=true&w=majority`)


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


// User model
const UsersModel = require('./models/Users')

// Show Users
app.get("/users", async(req,res)=>{
    try {
        const users = await UsersModel.find();
        res.json(users)
    } catch (error) {
        res.status(500).json({ message: "Error retrieving users", error: error });
    }
})

// register
app.post("/register", async (req, res) => {
    try {
        const register = new UsersModel(req.body);
        await register.save();
        res.json(req.body)
    } catch (error) {
        res.status(500).json({ message: "Error creating user", error: error });
    }
})

// Login
app.post("/login", async (req, res) => {
    try {
        const { email, password } = req.body;
        const user = await UsersModel.findOne({ email });
        if (!user) {
            return res.status(401).json({ message: "Authentication failed" });
        }
        const isPasswordValid = await bcrypt.compare(password, user.password);
        if (!isPasswordValid) {
            return res.status(401).json({ message: "Authentication failed" });
        }
        // At this point, the user has provided valid credentials
        const token = jwt.sign({ id: user._id }, 'secret_key', { expiresIn: '1d' });
        res.json({ token });
    } catch (error) {
        res.status(500).json({ message: "Error authenticating user", error: error });
    }
});



app.listen("3001", ()=>{
    console.log("Server started on port 3001")
})