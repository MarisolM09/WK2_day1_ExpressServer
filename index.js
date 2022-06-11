
const express = require('express')
const app = express()
const port = process.env.PORT || 4000

// this connects to our folder state.js
const { users } = require('./state');

/* BEGIN - create routes here */

app.get('/users', (req, res) => {
  res.json(users);
})

app.get('/users/1', (req, res) => {
  
})



/* END - create routes here */

app.listen(port, () => 
  console.log(`Example app listening on port ${port}!`))