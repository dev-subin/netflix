import React from 'react'
import {API_KEY,imageUrl} from '../../constants/Constants'
import YouTube from 'react-youtube'
import {useEffect,useState}from 'react'
import instance from '../../Axios'
import './Rowpost.css'
function Rowpost(props) {
    const [movies, setmovies] = useState([])
    const[urlId,setUrlId] =  useState('')
    useEffect(() => {
       instance.get(props.url).then((Response)=>{
           console.log(Response.data)
           setmovies(Response.data.results)
       })
    }, [])
        const opts = {
          height: '390',
          width: '100%',
          playerVars: {
            // https://developers.google.com/youtube/player_parameters
            autoplay: 1,
          },
        };
        const handMovie=(id)=>{
console.log(id)
instance.get(`/movie/${id}/videos?api_key=${API_KEY}&language=en-US`).then((Response=>{
   if(Response.data.results.length!==0){
       setUrlId(Response.data.results[0])
   }
   else{
       console.log('array is empty')
   }
}))
        }
    return (
        <div className='row'>
            <h2>{props.title}</h2>
            <div className="posters">
                {
                    movies.map((obj)=>
                       <div className='container'> 
                           <img onClick={()=>handMovie(obj.id)} src={`${imageUrl+obj.backdrop_path}`} alt="poster" className={props.isSmall ? 'smallposter':'poster'} />
                           </div>
                    )
                }
               
                
            </div>
          { urlId&& <YouTube  opts={opts} videoId={urlId.key}/>  }
        </div>
    )

}

export default Rowpost