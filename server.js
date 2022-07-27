// console.log("hii")
const express = require('express')

const app = express()
app.use(express.static("public"))
app.use(express.urlencoded({ extended:true }))
app.use(express.json())
app.set('view engine','ejs')

// app.use(logger)

// app.get("/",logger,(req,res) =>{
//     console.log("here")
//     // res.status(500).send("hii")  //high priority to message = hii

//     // res.sendStatus(500).send("high priority to status")  //high priority to message.

//     // res.json({message : "error"})  //json object is printed on webpage

//     // res.download("hello.txt") //download the file

//     res.render("index",{text : "Vaishnavi"})
// })

const userRouter = require('./routes/users')

app.use('/users',userRouter)

// function logger(req,res,next){   //function ehich runs middleware
//     console.log(req.originalUrl)
//     next()
// }

app.listen(process.env.PORT ||3000)
