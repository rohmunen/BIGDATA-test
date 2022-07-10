const db = require('../db')

module.exports = async (req,res) => {
  await db.removeComment(req.params.movieId, req.params.commentId)
  res.sendStatus(200)
}