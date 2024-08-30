const express = require('express');
const app = express();
const path = require("path");
const port = 8080;

app.use(express.static('public'));
app.listen(port,()=>{
    console.log(`Server running at ${port}`);
})

app.get('/Home',(req, res)=>{
    console.log("Get")
    res.sendFile(path.join(__dirname ,'public' , 'index.html'));
})