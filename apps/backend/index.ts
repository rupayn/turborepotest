import express from "express"

const app = express()

app.get('/', (req, res) => {
    res.send("Welcome")
})

app.listen(4000,()=>{
    console.log(`listening on ${4000}`);
    
})