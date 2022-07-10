const db = require('../db')

module.exports = async (req,res) => {
  const comments = await db.getComments()
  res.send(comments);
}