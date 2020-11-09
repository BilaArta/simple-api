const express = require('express');
const bodyParser = require('body-parser');
const userRoutes = require('./routes/userRoute')

const app = express()
app.use(bodyParser.json());


app.get('/', (req,res) => {
    console.log('asd');
    res.send('Hello World')
})

app.use('/', userRoutes)

const PORT = process.env.PORT || 8000
app.listen(PORT, () => console.log("server running on port : " + PORT));