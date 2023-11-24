const express = require('express')
const router = express.Router();
const mongoose = require('mongoose')
const studentModel = require('../models/student')


router.get('/' , async (req,res) =>{
   try{
    const students = await studentModel.find()
    res.json(students)
    

   }catch(err){
    res.status(500).json({message: err.message})
   }
})
router.get('/update' , async (req, res) => {
    var id = new mongoose.Types.ObjectId(req.query.id)

    var std = await studentModel.findById(id).exec().then(
        (student) =>{
            if(!student){
                res.json({message:"could not find the order..."})
            }
            res.render('update.ejs', {student})
        }
    )   
})

router.get('/add' , (req, res) => {
    res.render('addStudent.ejs')
})

router.get('/:id' , async (req,res) =>{
   var id = new mongoose.Types.ObjectId(req.params.id)
   let std
   try{
    std = await studentModel.findById(id).exec()
    if(std == null){
        res.json({message: "Could not find the order..."})
    }
   }catch(err){
    res.status(500).json({message: err.message})
   }
   res.json(std)
})

router.delete('/:id' , async (req,res) =>{
    var id = new mongoose.Types.ObjectId(req.params.id)
    try{
        var std  = await studentModel.findByIdAndDelete(id)
        if(!std){
            res.json({message: "Student not found..."})
        }
        res.status(200).json({message: 'Order deleted succesfully'})

    }catch(err){
        res.status(500).json({message: err.message})
    }
})
router.post('/add', async (req, res) => {
    const { fullName, email } = req.body;
  
    const std = new studentModel({
      fullName,
      email,
    });  
    try {
      const newStudent = await std.save();
      console.log('ok from server');
      res.status(201).json(newStudent);  
    } catch (err) {
      res.status(400).json({ message: err.message });
    }
  });
router.post('/update' , async (req, res) => {
    try {    
        const id = req.body.id; 
        const updatedData = {
          fullName: req.body.fullName,
          email: req.body.email,
        };
        const student = await studentModel.findByIdAndUpdate(id, updatedData, { new: true }); 
          
        if (!student) {
          return res.status(404).json({ message: "Order not found..." });
        }   
        res.redirect('/students');
      } catch (err) {
        res.status(500).json({ message: err.message });
      }
})


router.patch('/:id' , async (req,res) =>{
    var id = new mongoose.Types.ObjectId(req.params.id)
    const { fullName } = req.body
    try{
        var student = await studentModel.findById(id).exec()
        if(!student){
            res.status(404).json({message: "Order not found..."})
        }
        student.fullName = fullName
        var updatedStudent = await student.save()
        res.json(updatedStudent)
    }
    catch(err){
        res.status(500).json({message: err.message})
    }
})


module.exports = router;




