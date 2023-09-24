const express =require ("express");


const app =express();


const  PORT = 4032;
const HOSTNAME = "localhost"


app.get('/random',(req,res)=>{
    const randomNumber =Math.floor(Math.random());
    res.json({Number:randomNumber})
});






app.listen(PORT,()=>{
    console.log(`server running at ${HOSTNAME}: ${PORT} `);
})