const express = require('express');

// Create an instance of Express
const app = express();

const  PORT = 4029;
const HOSTNAME = "localhost";

let counter = 0;


app.get('/',(req,res)=>{
    
    res.json({counter:'counter'});

})

// Define API endpoint to increment the counter
app.get('/increment', (req, res) => {
  counter++;
  res.json({ message: 'increment counter by 1' });
  console.log(counter);
});

// Define API endpoint to decrement the counter
app.get('/decrement', (req, res) => {
  counter--;
  res.json({ message: 'decrement counter by 1' });
  console.log(counter);
});


// Start the server
app.listen(PORT,()=>{
    console.log(`server running at ${HOSTNAME}: ${PORT} `);
})