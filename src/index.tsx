import { Loader, Pagination } from '@mantine/core'
import axios from 'axios'
import React, { useEffect, useState } from 'react'
import ReactDOM from 'react-dom/client'
import {
  BrowserRouter,
  Routes,
  Route,
} from "react-router-dom";
import { Movie } from '../types'
import { MainLayout } from './components/Layout'
import { MoviesList } from './components/MoviesList'

const root = ReactDOM.createRoot(document.getElementById('root')!)

const App = () => {
  const [ total, setTotal ] = useState(0)
  const [ loading, setLoading ] = useState(false)
  const [ currentPage, setCurrentPage ] = useState(1)
  const [ movies, setMovies ] = useState<Array<Movie>>([])

  useEffect(() => {
    axios.get(`https://yts.mx/api/v2/list_movies.json?page=${currentPage}&limit=10`).then(res => {
      setTotal(Math.floor(res.data.data.movie_count / 5) + 2)
    })
  }, [])

  useEffect(() => {
    setLoading(true)
    axios.get(`https://yts.mx/api/v2/list_movies.json?page=${currentPage}&limit=5`).then(res => {
      setMovies(res.data.data.movies)
      setLoading(false)
    }
    )
  }, [ currentPage ])

  return (
    <MainLayout>
      <MoviesList movies={ movies } loading={ loading } />
      <Pagination page={ currentPage } onChange={ setCurrentPage } total={ total } />
    </MainLayout>
  )
}

root.render(
  <BrowserRouter>
    <Routes>
      <Route path='/' element={ <App /> } />
      <Route
        path="/xd"
        element={
          <main style={ { padding: "1rem" } }>
            <p>There's nothing here!</p>
          </main>
        }
      />
    </Routes>
  </BrowserRouter>
)