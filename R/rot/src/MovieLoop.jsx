import React from 'react';
import ReactPlayer from 'react-player/youtube'

const MovieLoop = (props) => {

  const movie = props.movie

  return (
    <div>
      
      {movie.map((mov) =>(
        <div key={mov.id} >
         <h1 className='text' >{mov.desc}</h1>
         <ReactPlayer url="https://youtu.be/ML-W1Wzv724?si=4KoEFyUHKpMtj6ad" controls={true} style={{marginLeft: "500px"}} height={400} width={500}  loop={true} />
        </div>
      ))}
    </div>
  )
}

export default MovieLoop