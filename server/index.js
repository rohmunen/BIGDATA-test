const express = require('express')
const app = express()
const db = require('./db');
const addcomment = require('./routes/addcomment');
const getcommentbymovieid = require('./routes/getcommentbymovieid');
const getcomments = require('./routes/getcomments');
const removecomment = require('./routes/removecomment');
var cors = require('cors')


app.use(express.json())
app.use(cors())

app.get('/comments/:movieId', getcommentbymovieid);
app.get('/comments', getcomments)
app.post('/comments', addcomment);
app.delete('/comments/:movieId/:commentId', removecomment);

db.init().then(() => {
  app.listen(3001, () => console.log('Listening on port 3001'))
}).catch((err) => {
  console.error(err)
  process.exit(1)
})

const shutDown = () => {
  db.shutdown()
  .catch(() => {})
  .then(() => process.exit())
}

process.on('SIGINT', shutDown);
process.on('SIGTERM', shutDown);
process.on('SIGUSR2', shutDown);