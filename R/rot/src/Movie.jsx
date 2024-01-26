import React from 'react'
import { Link } from 'react-router-dom'
import { useState } from 'react'
import {props} from 'react'
import MovieLoop from "./MovieLoop"
const Movie = () => {
const [movie, setMovies] = useState([{
    desc:'Peaky Blinders is a crime drama centred on a family of mixed Irish Traveller and Romani origins based in Birmingham, England, starting in 1919, several months after the end of the First World War. It centres on the Peaky Blinders street gang and their ambitious, cunning crime boss Tommy Shelby.', path: "https://youtu.be/M-7v9bP10-U?si=dIe3Ivy72IIEBhhO",
}])
  return (
    <div>
     
    <MovieLoop movie={movie} />
    
    </div>
  )
}

export default Movie