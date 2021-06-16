const express=require('express')
const path=require('path')

const app=express()

// app.use(function(req,res,next){
//     console.log('start')
//     next()
// })

app.get('/signup',function(req,res){
    res.sendFile(path.join(__dirname,'signup.html'))
    // console.log('middle')
    // next()
})

// app.use(function(req,res){
//     console.log('end')
// })

app.post('/signup',function(req,res){
    res.send('Account created')
})

app.get('/about',(req,res)=>res.send('about'))



app.listen(3000,function (){

    console.log(__dirname)
    console.log('Server started.')
})