import React from 'react'
import ReactDOM from 'react-dom/client'
import { MoviesList } from './components/MoviesList'

const root = ReactDOM.createRoot(document.getElementById('root')!)

const App = () => {
  return (
    <div>
      <MoviesList movies={ [ { title: 'morbius', rating: 10 }, { title: 'Tenet', rating: 0 } ] } />
    </div>
  )
}

root.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>
)