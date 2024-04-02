const Mongoose = require('mongoose');
const express = require('express');
const ToDo = require("./Schema/Note.model.js");
const User = require("./Schema/User.model.js");
const app = express();
app.use(express.json());
Mongoose.connect("mongodb+srv://sarminaroyce22:Sr1223@cluster0.ihgxscv.mongodb.net/?retryWrites=true&w=majority&appName=Cluster0")
.then(()=>{
    console.log("You are connected");
 })
 .catch((error)=>{
    console.log("Connection failed",error)
 });

app.listen(3000, () => {
  console.log("Server is running on port 3000");
});

app.post('/create', async (req, res) => {
    try {
      const toDo = new ToDo(req.body);
      await toDo.save();
      res.status(201).send(toDo);
    } catch (error) {
      res.status(400).send(error);
    }
});      

app.get('/view', async (req, res) => {
    try {
      const toDo = await ToDo.find();
        res.status(200).json(toDo);
    } catch (error) {
      res.status(400).send(error);
    }
   });

   app.get('/view/:id', async (req, res) => {
    try {
      const toDo = await ToDo.findById(req.params.id);
      res.status(200).json(toDo);
    } catch (error) {
      res.status(400).send(error);
    }
  });

  app.put('/list/update/:id', async (req, res) => {
    try {
      const {id} = req.params
      await ToDo.findByIdAndUpdate(id, req.body);
      const toDo = await ToDo.findById(id);
      res.status(200).json(toDo);
    } catch (error) {
      res.status(400).send(error);
    }
   });

   app.delete('/list/:id', async (req,res) => {
    try {
      await ToDo.findByIdAndDelete(req.params.id);
      if (!ToDo.findByIdAndDelete(req.params.id)) {
        res.status(404).send({message: "not found"})
      }
      res.status(200).json(await ToDo.findById(id));
      console.log("Deleted")
    }
    catch (error){
      res.status(400).send(error)
    }
   });


   app.post('/User/create', async (req, res) => {
    try {
      const user = new User(req.body);
      await user.save();
      res.status(201).send(user);
    } catch (error) {
      res.status(400).send(error);
    }
});      

app.get('/User/view', async (req, res) => {
  try {
    const toDo = await User.find();
      res.status(200).json(toDo);
  } catch (error) {
    res.status(400).send(error);
  }
 });

 app.get('/User/view/:id', async (req, res) => {
  try {
    const toDo = await User.findById(req.params.id);
    res.status(200).json(toDo);
  } catch (error) {
    res.status(400).send(error);
  }
});

app.put('/User/update/:id', async (req, res) => {
  try {
    const {id} = req.params
    await User.findByIdAndUpdate(id, req.body);
    const toDo = await User.findById(id);
    res.status(200).json(toDo);
  } catch (error) {
    res.status(400).send(error);
  }
 });

 app.delete('/User/:id', async (req,res) => {
  try {
    await User.findByIdAndDelete(req.params.id);
    if (!User.findByIdAndDelete(req.params.id)) {
      res.status(404).send({message: "not found"})
    }
    res.status(200).json(await User.findById(id));
    console.log("Deleted")
  }
  catch (error){
    res.status(400).send(error)
  }
 })

