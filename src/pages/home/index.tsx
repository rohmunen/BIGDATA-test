import { Movie } from '../../../types'
import { MainLayout } from '../../components/Layout'
import { MoviesList } from '../../components/MoviesList'
import { NotFound } from '../../components/NotFound';
import { Loader, Pagination } from '@mantine/core'
import axios from 'axios'
import React, { useEffect, useState } from 'react'
import styles from './styles.module.scss'


export const Home = () => {
  const [ total, setTotal ] = useState(0)
  const [ loading, setLoading ] = useState(false)
  const [ currentPage, setCurrentPage ] = useState(1)
  const [ movies, setMovies ] = useState<Array<Movie>>([])

  useEffect(() => {
    axios.get(`https://yts.mx/api/v2/list_movies.json?page=${currentPage}&limit=10`).then(res => {
      setTotal(Math.ceil(res.data.data.movie_count / 5))
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
      <Pagination className={styles.pagination} page={ currentPage } onChange={ setCurrentPage } total={ total } />
    </MainLayout>
  )
}