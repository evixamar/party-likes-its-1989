import React, { Component } from 'react'
// import moment from 'moment'

import './App.css'

import Movie from './Movie'

import data from './data/party1989.json'
const baseURL = 'https://image.tmdb.org/t/p/w185_and_h278_bestv2/'
class App extends Component {
  render() {
    return (
      <main>
        <header>
          <h1>party-like-its-1989</h1>
        </header>
        <div>
          {data.results.map((movie, index) => {
            return (
              <Movie
                key={index}
                title={movie.title}
                src={`${baseURL}${movie.poster_path}`}
                overview={movie.overview}
                // release_date={moment(movie.release_date).format('MMM Do YY')}
              />
            )
          })}
        </div>
      </main>
    )
  }
}

export default App
