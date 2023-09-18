
import '../App.css'
const SecondCard = (prop) => {
    return (
        <>
            {/* <div className="card" style={{width: '15rem',height:'13rem', margin:'0 0.6rem'}}>
                <img src={prop.posterPath} className="card-img-top card-image-height" alt="moviePoster"/>
                    <div className="card-body">
                        <p className="card-text">paragraph</p>
                        <h5>{prop.title}</h5>
                    </div>
            </div> */}

            <div className="card" style={{ width: '15rem', height: '13rem', margin: '0 0.6rem' }}>
                <img src={prop.posterPath} className="card-img-top card-image-height" alt="..." />
                
            </div>

        </>
    )
}

export default SecondCard
