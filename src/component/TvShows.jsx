import { useEffect, useState } from "react"
import SecondCard from "./SecondCard"
import '../App.css'
import CarouselForTvShow from "./CarouselForTvShow";


const TvShows = () => {
  const [tvPopular, setTvPopular] = useState([]);
  const [tvTopRated, setTvTopRated] = useState([]);
  const [tvLatest, setTvLatest] = useState([]);
  const [tvOntheAir, settvOntheAir] = useState([]);

  // api call for Popular tv show 
  useEffect(() => {
    let tvApiCall = async () => {
      let res = await fetch(`
      https://api.themoviedb.org/3/tv/popular?api_key=5caf8c9432c960a3aa1d97e95cd24463`);
      let data = await res.json();
      setTvPopular(data.results);
    }
    tvApiCall();
  })

  // api call for  Top Rated tv show
  useEffect(() => {
    let tvApiCall = async () => {
      let res = await fetch(`
      https://api.themoviedb.org/3/tv/top_rated?api_key=5caf8c9432c960a3aa1d97e95cd24463`);
      let data = await res.json();
      setTvTopRated(data.results);
    }
    tvApiCall();
  })

  // api call for tv show ariving today
  useEffect(() => {
    let tvApiCall = async () => {
      let res = await fetch(`
      https://api.themoviedb.org/3/tv/airing_today?api_key=5caf8c9432c960a3aa1d97e95cd24463`);
      let data = await res.json();
      setTvLatest(data.results);
    }
    tvApiCall();
  })

  // api call for tv Show On the Air
  useEffect(() => {
    let tvApiCall = async () => {
      let res = await fetch(`
      https://api.themoviedb.org/3/tv/on_the_air?api_key=5caf8c9432c960a3aa1d97e95cd24463`);
      let data = await res.json();
      settvOntheAir(data.results);
    }
    tvApiCall();
  })


  return (
    <>
    {/* carousel */}
    <CarouselForTvShow />

      {/* row for popular tv shows */}
      <div className='row1'>
        <h4 className="bg-dark text-white">Popular Tv Shows</h4>
        <div>
          {
            tvPopular.map((items) => {
              return <div key={items.id}>
                <SecondCard posterPath={`https://image.tmdb.org/t/p/w500${items.poster_path}`} title={items.title} /> </div>

            })
          }
        </div>
      </div >

      {/* row for Top Rated tv shows */}
      <div className='row1'>
        <h4 className="bg-dark text-white">Top Rated Tv Shows</h4>
        <div>
          {
            tvTopRated.map((items) => {
              return <div key={items.id}>
                <SecondCard posterPath={`https://image.tmdb.org/t/p/w500${items.poster_path}`} title={items.title} /> </div>

            })
          }
        </div>
      </div >


      {/* row for airing today tv shows */}
      <div className='row1'>
        <h4 className="bg-dark text-white">Airing Today</h4>
        <div>
          {
            tvLatest.map((items) => {
              return <div key={items.id}>
                <SecondCard posterPath={`https://image.tmdb.org/t/p/w500${items.poster_path}`} title={items.title} /> </div>

            })
          }
        </div>
      </div >

      {/* row for On airt tv shows */}
      <div className='row1'>
        <h4 className="bg-dark text-white">On air Tv Show</h4>
        <div>
          {
            tvOntheAir.map((items) => {
              return <div key={items.id}>
                <SecondCard posterPath={`https://image.tmdb.org/t/p/w500${items.poster_path}`} title={items.title} /> </div>

            })
          }
        </div>
      </div >

    </>
  )
}

export default TvShows
