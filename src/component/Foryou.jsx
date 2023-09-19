import { useState, useEffect } from 'react'
import '../App.css'
// import RowItems from './RowItems'
import SecondCard from './SecondCard';
import Carousel from './Carousel';


const Foryou = () => {
    const [mRated, setMrated] = useState([]);
    const [mPopular, setMpopular] = useState([]);
    const [mUpcoming, setMupcoming] = useState([]);
    const [mNowPlaying, setMplaying] = useState([]);

    // api call for top rated movies
    useEffect(() => {
        let apicall = async () => {
            let url = "https://api.themoviedb.org/3/movie/top_rated?api_key=5caf8c9432c960a3aa1d97e95cd24463";
            let data = await fetch(url);
            let parsedData = await data.json();
            let results = parsedData.results;
            setMrated(results);
        }
        apicall();

    }, [])

    // api call for top Popular movies
    useEffect(() => {
        let apicall = async () => {
            let url = "https://api.themoviedb.org/3/movie/popular?api_key=5caf8c9432c960a3aa1d97e95cd24463";
            let data = await fetch(url);
            let parsedData = await data.json();
            let results = parsedData.results;
            setMpopular(results);
        }
        apicall();

    }, [])

    // api call for upcoming movies
    useEffect(() => {
        let apicall = async () => {
            let url = "https://api.themoviedb.org/3/movie/upcoming?api_key=5caf8c9432c960a3aa1d97e95cd24463";
            let data = await fetch(url);
            let parsedData = await data.json();
            let results = parsedData.results;
            setMupcoming(results);
        }
        apicall();

    }, [])

    // api call for now playing videos in carousel
    useEffect(() => {
        let apicall = async () => {
            let url = "https://api.themoviedb.org/3/movie/now_playing?api_key=5caf8c9432c960a3aa1d97e95cd24463";
            let data = await fetch(url);
            let parsedData = await data.json();
            let results = parsedData.results;
            setMplaying(results);
        }
        apicall();

    }, [])

    return (
        <>
            {/* here is crousel section  now playing*/}

            {mNowPlaying.map((item) => {
                return (
                    <Carousel key={item.id} CarouselmoviePoster={`https://image.tmdb.org/t/p/w500${item.poster_path}`} CarouselMovieTitle={item.title} Carouselreleasedate={item.release_date} />

                )
            })

            }

            {/* add row for top rated movies */}
            <div className='row1'>
                <h4 className="bg-dark text-white">Top Rated Movies</h4>
                <div>
                    {
                        mRated.map((items) => {
                            return <div key={items.id}>
                                <SecondCard posterPath={`https://image.tmdb.org/t/p/w500${items.poster_path}`} title={items.title} /> </div>

                        })
                    }
                </div>
            </div >

            {/* add row for popular movies */}
            <div className='row1'>
                <h4 className="bg-dark text-white">Popular Movies</h4>
                <div>
                    {
                        mPopular.map((items) => {
                            return <div key={items.id}>
                                <SecondCard posterPath={`https://image.tmdb.org/t/p/w500${items.poster_path}`} title={items.title} /> </div>

                        })
                    }
                </div>
            </div >

            {/* add row for upcoming movies */}
            <div className='row1'>
                <h4 className="bg-dark text-white">Upcoming Movies</h4>
                <div>
                    {
                        mUpcoming.map((items) => {
                            return <div key={items.id}>
                                <SecondCard posterPath={`https://image.tmdb.org/t/p/w500${items.poster_path}`} title={items.title} /> </div>

                        })
                    }
                </div>
            </div >
        </>
    )
}

export default Foryou
