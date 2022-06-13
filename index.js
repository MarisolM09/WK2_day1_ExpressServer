
const express = require('express')
const app = express()
const port = process.env.PORT || 4000

// middleware from express "body-parser"
app.use(express.json());

// this connects to our folder state.js
const { users } = require('./state');

/* BEGIN - create routes here */
let newUser = {
  "id": 6,
  "name": "Max Jason",
  "occupation": "Pooper Scooper",
  "avatar": "https://upload.wikimedia.org/wikipedia/en/5/50/Agentdalecooper.jpg"
}


// Gets all users
app.get('/users', (req, res) => res.json(users));


// Gets 1 user
app.get('/users/:id', (req, res) => {
  res.json(users.filter(user => user.id === parseInt(req.params.id)))
});


// added new User with Post
app.post('/users', (req, res) => {
  const length = users.length;
  const newPerson = {
    id: length + 1,
    ...req.body
  }
  users.push(newPerson)
  res.json(users)
})

// Update user info
app.put('/users/:id', (req, res) => {
  let id = +req.params.id;
  let body = req.body;
  let index = users.findIndex((user) => user.id === id);
  let updatedUser = { id: id, ...body };
  users[index] = updatedUser;
  res.send(updatedUser)
});

// Delete User
app.delete('/users/:id', (req, res) => {
  let id = +req.params.id;
  let index = users.findIndex((user) => user.id === id);
  let deletedUser = users.splice(index, 1);
  res.send(deletedUser);
  
});

/* END - create routes here */

app.listen(port, () => 
  console.log(`Example app listening on port ${port}!`))