const db = require('../db')
const { v4: uuidv4 } = require('uuid');

module.exports = async (req,res) => {
  const comment = {
    id: uuidv4(),
    movieId: req.body.movieId,
    author: req.body.comment.author,
    message: req.body.comment.message,
  }
  await db.addComment(comment);
  res.send(comment);
}