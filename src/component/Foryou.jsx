import { useState, useEffect } from 'react'
import '../App.css'
// import RowItems from './RowItems'
import SecondCard from './SecondCard';


const Foryou = () => {
    const [mData, setMdata] = useState([]);
    useEffect(() => {
        let apicall = async () => {
            let url = "https://api.themoviedb.org/3/movie/top_rated?api_key=7a3c4af06a979a783478c392fe50b96f&pageSize=7";
            let data = await fetch(url);
            let parsedData = await data.json();
            let results = parsedData.results;
            setMdata(results);
        }
        apicall();
    }, [])

    return (
        <>
            {/* here is crousel section */}
            <div className="main-section">
                <div className="first-constainer"></div>
                <div className="second-constainer">
                    <div id="carouselExampleCaptions" className="carousel slide">
                        <div className="carousel-indicators">
                            <button type="button" data-bs-target="#carouselExampleCaptions" data-bs-slide-to="0" className="active" aria-current="true" aria-label="Slide 1"></button>
                            <button type="button" data-bs-target="#carouselExampleCaptions" data-bs-slide-to="1" aria-label="Slide 2"></button>
                            <button type="button" data-bs-target="#carouselExampleCaptions" data-bs-slide-to="2" aria-label="Slide 3"></button>
                        </div>
                        <div className="carousel-inner">
                            <div className="carousel-item active">
                                <img src="https://plus.unsplash.com/premium_photo-1685145255405-05ffbe7ce81b?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MXx8ZnJlZXxlbnwwfHwwfHx8MA%3D%3D&auto=format&fit=crop&w=900&q=60" className="d-block w-100" alt="..." />
                                <div className="carousel-caption d-none d-md-block">
                                    <h5>First slide label</h5>
                                    <p>Some representative placeholder content for the first slide.</p>
                                </div>
                            </div>
                        </div>
                        <button className="carousel-control-prev" type="button" data-bs-target="#carouselExampleCaptions" data-bs-slide="prev">
                            <span className="carousel-control-prev-icon" aria-hidden="true"></span>
                            <span className="visually-hidden">Previous</span>
                        </button>
                        <button className="carousel-control-next" type="button" data-bs-target="#carouselExampleCaptions" data-bs-slide="next">
                            <span className="carousel-control-next-icon" aria-hidden="true"></span>
                            <span className="visually-hidden">Next</span>
                        </button>
                    </div>
                </div>
            </div>

            {/* add row  */}
            <div className='row1'>
                <h4 className="bg-dark text-white">Latest and Tranding</h4>
                <div>
                    {
                        mData.map((items) => {
                            return <div key={items.id}>
                                <SecondCard title={items.title} /> </div>

                        })
                    }
                </div>
            </div >
        </>
    )
}

export default Foryou
