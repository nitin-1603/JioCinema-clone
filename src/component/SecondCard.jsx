
import '../App.css'
const SecondCard = (prop) => {
    return (
        <>
            <div className="card" style={{ width: '9rem', height: '14rem', margin: '0 0.6rem' }}>
                <img src={prop.posterPath} className="card-img-top card-image-height" alt="..." />
            </div>

        </>
    )
}

export default SecondCard
