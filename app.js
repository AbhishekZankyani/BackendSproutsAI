const express = require('express')
const app = express()
const dotenv = require('dotenv').config()
const cors = require('cors')

const mongoose= require('mongoose')
const task = require('./Jobs/changeStatusJob')
const url = 'mongodb+srv://zankyaniabhishek:wocDDDQ0Xz3bUYvv@cluster0.jgykfzi.mongodb.net/SproutsAI'
app.use(cors())
mongoose.connect(url,{})
const con = mongoose.connection
con.on('open',()=>{
    console.log(`Connected to the database ${process.env.DBURL}`)
})

app.use(express.json())
app.use('/',require('./routes/user'))
app.use('/Roles',require('./routes/roles'))
app.use('/Tasks',require('./routes/tasks'))



task.start()

const port = process.env.PORT||1234
app.listen(port,()=>{
    console.log(`server Connected go to server by line http://localhost:${port}`)
})
