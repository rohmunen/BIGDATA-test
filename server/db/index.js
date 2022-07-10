const sqlite3 = require('sqlite3').verbose()
const fs = require('fs')
const path = require('path')
const location = process.env.SQLITE_DB_LOCATION || '/etc/comments/comments.db'

let db

const init = () => {
  const dirName = path.dirname(location)
  if (!fs.existsSync(dirName)) {
    fs.mkdirSync(dirName, {recursive: true})
  }

  return new Promise((res, rej) => {
    db = new sqlite3.Database(location, err => {
      if (err) return rej(err)

      console.log(`sqlite db at ${location}`)

      db.run(
        'CREATE TABLE IF NOT EXISTS comments_list (id varchar(40), author varchar(255), message text, movieId varchar(40))',
        (err, result) => {
          if (err) return rej(err);
          res()
        },
      )
    })
  })}


const shutdown = async () => {
    return new Promise((res, rej) => {
      db.close(err => {
        if (err) rej(err);
        else res()
      })
    })
  }

const getCommentsByMovieId = async (movieId) => {
  return new Promise((res, rej) => { 
    db.all(`SELECT * FROM comments_list WHERE movieId='${movieId}'`, (err,rows) => {
      if (err) return rej(err)
      res(rows)
    })
  })
}

const getComments = async () => {
  return new Promise((res, rej) => {
    db.all('SELECT * FROM comments_list', (err,row) => {
      if (err) return rej(err)
      res(row)
    })
  })
}

const removeComment = async (movieId, commentId) => {
  return new Promise((res, rej) => {
    db.run(`DELETE FROM comments_list WHERE id='${commentId}' and movieId='${movieId}'`, err=> {
      if (err) return rej(err)
      res()
    })
  })
}

const addComment = async (comment) => {
  return new Promise((res, rej) => {
    db.run(
      `INSERT INTO comments_list (id, movieId, author, message) VALUES ('${comment.id}', '${comment.movieId}', '${comment.author}', '${comment.message}')`, err => {
        if (err) return rej(err)
        res()
      })
  })
}

module.exports = {
  init,
  shutdown,
  getCommentsByMovieId,
  removeComment,
  addComment,
  getComments,
}