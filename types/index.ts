export type Movie = {
  id: number,
  title: string,
  rating: number,
  description_full: string,
  medium_cover_image: string,
}

export type Comment = {
  author: string,
  message: string,
}