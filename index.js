const express = require('express')

const app = express()

const PORT = 3991

app.use(require('body-parser').json())
app.use(require('cors')())

app.post('/alert', (req, res)=>{
    console.log(req.body)
    res.send("OK")
})

app.listen(PORT, ()=>{
    console.log('App listen on port', PORT)
})