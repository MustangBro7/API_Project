// Your backend server (Node.js example using Express)
const express = require('express');
const cors = require('cors');
// const fetch = require('node-fetch');
const axios =  require('axios');

const app = express();
const PORT = 3001;

app.use(cors());

app.get("/data/:id" ,async (req,res) =>{
  const id = req.params.id
  console.log(id)
  try{
  const response = await axios.get("https://www.thecocktaildb.com/api/json/v1/1/lookup.php?i="+id)
  // const data = 
  console.log(response.data)
  res.json(response.data  )
  }
  catch (error) {
    console.error('Error:', error.message);
    res.status(500).json({ error: 'Internal Server Error' });
  }
})

app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}`);
});
