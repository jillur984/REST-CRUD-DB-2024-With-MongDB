const express=require('express')

const app=express()
const cors=require('cors')
require('./config/db')
const userRouter=require('./routes/user.routes')


app.use(cors())
app.use(express.urlencoded({extended:true}))
app.use(express.json())
app.use("/api/users",userRouter)


// error handling of Route Error


app.get("/",(req,res)=>{
    res.sendFile(__dirname+"/views/index.html")
})



app.use((req,res,next)=>{
    res.status(404).json({
        message:"Route Not Found"
    })
})

app.use((err,req,res,next)=>{
    res.status(500).json({
        message:"Server is Broken by You"
    })
})



module.exports=app;
