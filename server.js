const express = require("express");
const mongoose = require("mongoose");
const dotenv = require('dotenv');
const Job = require ('./models/Job');
const app = express();
const cors = require('cors');

dotenv.config();

const PORT = process.env.PORT || 5000;

app.use(express.json());
app.use(cors());
mongoose.connect('mongodb://localhost:27017/SARKARIRESULT_CLONE').then(()=>{
    console.log('mongodb connected');
}).catch(()=>{
    console.log('connection error', err)
})

app.get( '/' ,(req, res)=>{
    res.send('welcome to the sarkari result clone')
});

//fetch all job
app.get ('/api/jobs', async(req,res)=>{
    try{
 const jobs= await Job.find();
 res.json(jobs);
    }catch (err){
        res.status(500).json({ message: 'Server Error', error: err });
    }
});

//add a new job
app.post ('/api/jobs', async(req,res)=>{
    try{
const newJob = new Job(req.body);
await newJob.save();
res.status(201).json(newJob);     
}catch(err){
    res.status(400).json({ message: 'Failed to create job', error: err });
}
});

app.listen(PORT ,()=>{
    console.log(`server is running on Port :${PORT}`)
})

