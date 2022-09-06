const express = require('express')
const app = express()
const mongoose = require('mongoose')
const Register = require('./Register')


mongoose.connect("mongodb://localhost:27017/pupa").catch(err => console.log(err))

app.use(express.json())


app.post('/register', async (req, res) => {

    let t = new Register(req.body)
    let result = await t.save()
    res.send(result);

})


app.listen(8080, () => {
    console.log('server is running...')
})