const express = require("express");
const background = require("./background");
const app = express();
app.use(express.json());

app.get('/', (req, res)=>
{
    res.send("Server is running...")
})

app.post('/', async(req, res)=>
{
    const {url} = req.body;
    const data= await background(url);
    res.json(data);
})

app.listen(8080, ()=>
{
    console.log("Server is running at https://localhost:8080...");
})