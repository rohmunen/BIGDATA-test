const db = require('../db')

module.exports = async (req,res) => {
  const comments = await db.getCommentsByMovieId(req.params.movieId)
  res.send(comments);
}