
import '../App.css'
const SecondCard = (prop) => {
    return (
        <>
            <div className="card" style={{ width: '15rem', height: '9rem', margin: '0 0.6rem' }}>
                <img src={prop.posterPath} className="card-img-top card-image-height" alt="..." />
            </div>

        </>
    )
}

export default SecondCard
