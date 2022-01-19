import React, { useEffect } from 'react'
import {API_KEY,imageUrl} from '../../constants/Constants'
import './Banner.css'
import  instance  from '../../Axios'
import { useState } from 'react'

function Banner() {
  const [movie, setMovie] = useState()
    useEffect(() => {
        
      instance.get(`trending/all/week?api_key=${API_KEY}&language=en-US`).then((Response)=>{
          console.log(Response.data.results[0])
          setMovie(Response.data.results[4])
      })
    }, [])
    return (
        <div
        style={{backgroundImage:`url(${movie ? imageUrl+movie.backdrop_path:""})`}}
         className='banner'>
        <div className='content'>
<h1 className='title'>{movie?movie.title:""}</h1>
<div className='banner-buttons'>
    <button className='button'>Play</button>
    <button className='button'>MyList</button>
</div>
<h1 className='description'>{movie ? movie.overview:""}</h1>
        </div>
        <div className="fade">

        </div>
        </div>
    )
}

export default Banner


