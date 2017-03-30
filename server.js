const express = require('express')
const app = express()
const path = require('path')
const port = process.env.PORT || 8080

const MongoClient = require('mongodb').MongoClient
let db

MongoClient.connect('mongodb://localhost:3000', (err, database) => {
  if(err) return console.log(err)
  db = database
  app.listen(3000, () => {
    console.log('Mongo listening on 3000')
  })
})

app.use('/', express.static('build'))

app.get('/save-hello', (req, res) => {
  db.collection('greeting')
    .insertOne({
      greeting: 'Bonjour!'
    },
      () => { console.log('Mongo successful')})
  res.send('Hello saved')
})

app.get('/get-hello', (req, res) => {
  const greeting = db.collection('greeting').find().toArray().then(
    greeting => {
      console.log("GREETING!", greeting)
      res.send(greeting)
    }
  )
})

app.get('*', (req, res) => {
  res.sendFile(path.join(__dirname,'index.html'))
})

app.listen(port, () => {
  console.log(`Listening on port ${port}`)
})
