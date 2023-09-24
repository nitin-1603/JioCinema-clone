import { useState, useEffect } from "react";
import '../App.css'
const Carousel = () => {
    const [mNowPlaying, setMplaying] = useState([]);

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
            <div id="carouselExample" className="carousel slide">
                <div className="carousel-inner">
                    {mNowPlaying.map((item) => {
                        return <div key={item.title} className="carousel-item active">
                            <img src={`https://image.tmdb.org/t/p/w500${item.poster_path}`} className="d-block w-100"  />
                        </div>
                    })
                    }
                </div>
                <button className="carousel-control-prev" type="button" data-bs-target="#carouselExample" data-bs-slide="prev">
                    <span className="carousel-control-prev-icon" aria-hidden="true"></span>
                    <span className="visually-hidden">Previous</span>
                </button>
                <button className="carousel-control-next" type="button" data-bs-target="#carouselExample" data-bs-slide="next">
                    <span className="carousel-control-next-icon" aria-hidden="true"></span>
                    <span className="visually-hidden">Next</span>
                </button>
            </div>

        </>
    )
}

export default Carousel
