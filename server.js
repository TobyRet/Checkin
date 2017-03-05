const express = require('express')
const app = express()
const path = require('path')

app.use('/static', express.static('build'))

app.get('*', (req, res) => {
  res.sendFile(path.join(__dirname,'index.html'))
})

app.listen(process.env.PORT || 8080, () => {
  console.log('Listening on port 8080')
})
