const express = require('express')
const app = express()

const posts = [
  {
    username: 'Kyle',
    title: 'Post 1'
  },
  {
    username: 'Jim',
    title: 'Post 2'
  }
]

app.get('/posts', (req, res) => {
  res.json(posts)
})

app.get('/login', (req, res) => {
  
})

app.listen(3000)