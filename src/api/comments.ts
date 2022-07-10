import axios from "axios";
import { Comment } from "../../types";

export const getCommentsByMovieId = async (movieId: number) => {
  const comments = await axios.get<Array<Comment>>(`http://localhost:3001/comments/${movieId}`)
  return comments
}

export const createComment = (movieId: number, comment: Comment) => {
  axios.post(`http://localhost:3001/comments`, {movieId, comment})
}

export const deleteComment = (movieId: number, commentId: string) => {
  axios.delete(`http://localhost:3001/comments/${movieId}/${commentId}`)
}