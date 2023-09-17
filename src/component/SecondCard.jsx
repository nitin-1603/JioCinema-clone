
import '../App.css'
const SecondCard = (prop) => {
    return (
        <>
            <div className="card" style={{width: '18rem',height:'10rem', margin:'0 0.6rem'}}>
                <img src="..." className="card-img-top" alt="..."/>
                    <div className="card-body">
                        <p className="card-text">paragraph</p>
                        <h5>{prop.title}</h5>
                    </div>
            </div>

        </>
    )
}

export default SecondCard
