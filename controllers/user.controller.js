const { v4: uuidv4 } = require("uuid");
const User = require("../models/user.models");

const getAllUsers = async (req, res) => {
  try{
   const users=await User.find()
  res.status(200).json(users)
  }
  catch(err){
   res.status(500).send(err.message)
  }
};
const getOneUser = async (req, res) => {
  try{
   const user=await User.findOne({id:req.params.id})
   res.status(200).json(user)
  }
  catch(err){
    res.status(500).send(err.message)
  }
};

const createUser = async (req, res) => {
   try {
     console.log(req.body);  // Add this line to log incoming request data

     const newUser = new User({
       id: uuidv4(),
       name: req.body.name,
       age: Number(req.body.age),
     });
     await newUser.save();
     res.status(201).json(newUser);
   } catch (error) {
     res.status(500).send(error.message);
   }
};

const updateUser=async(req,res)=>{
   try{
      const user=await User.findOne({id:req.params.id})
   user.name=req.body.name
   user.age=Number(req.body.age)

   await user.save()
   res.status(200).json(user)
   }
 catch(err){
      res.status(500).send(err.message)
 }

}


const deleteUser = async(req, res) => {
 try{
   await User.deleteOne({id:req.params.id})
 res.status(200).json({
   message:"The user is Deleted"
 })
 }
 catch(err){
  res.status(500).send(err.message)
 }
};

module.exports = { getAllUsers, getOneUser, createUser, deleteUser,updateUser };
