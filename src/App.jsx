import { useState } from 'react'
import {BrowserRouter as Router,Routes,Route} from "react-router-dom"

import './App.css'
import Header from './components/header/Header'
import Home from './Pages/home/Homes'
import MovieList from './components/movieList/MovieList'
import Movie from './Pages/movieDetail/Movie'

function App() {
  

  return (
    <>
    <div className="App">

      <Router>
        <Header/>
        <Routes>
          <Route index element={<Home/>}></Route>
          <Route path='movie/:id' element={<Movie/>}></Route>
          <Route path='movies/:type' element={<MovieList/>}></Route>
        </Routes>

        
      </Router>
    

    </div>

   
      
    </>
  )
}

export default App
