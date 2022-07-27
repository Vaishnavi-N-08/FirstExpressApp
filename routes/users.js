const { render } = require("ejs")
const express = require("express")
const router = express.Router()

router.get("/",(req,res) =>{
    console.log(req.query.name)
    res.send("User List")
})

router.get("/new",(req,res) =>{
    // res.send("User New Form")
    res.render("users/new")
})

router.post("/",(req,res)=>{
    const isValid = true
    if(isValid)
    {
        users.push({firstname:req.body.firstname})
        res.redirect(`/users/${users.length-1}`)
    }
    else{
        console.log("error")
        res.render('users/new',{firstname:req.body.firstname})
    }
    // console.log(req.body.firstname)  //firtsname = name given in html input tag
    // res.send("hii")
})

router.route("/:id").get((req,res) =>{
    console.log(req.user)
    res.send(`Hello User With Id ${req.params.id}`)
   
}).put((req,res) =>{
    res.send(`update User With Id ${req.params.id}`)
}).delete((req,res) =>{
    res.send(`delete User With Id ${req.params.id}`)
})
const users = [{name:"Vaishnavi"},{name:"Narkhede"}]
router.param("id",(req,res,next,id)=>{
    req.user = users[id]
    console.log(id)
    next()
})  //It is a one version of middleware.

// router.get('/:id',(req,res)=>{
//     userid=req.params.id
//     res.send(`Hello User With Id ${req.params.id}`)
// })
// router.put('/:id',(req,res)=>{
//     userid=req.params.id
//     res.send(`update User With Id ${req.params.id}`)
// })
// router.delete('/:id',(req,res)=>{
//     userid=req.params.id
//     res.send(`delete User With Id ${req.params.id}`)
// })

module.exports = router