// https://as2.ftcdn.net/v2/jpg/05/62/78/85/1000_F_562788544_gBBydDZ7jt9eYjTmsXhsXVzPjL2yQfsg.jpg

import '../App.css';
const RowItems = (prop) => {
    return (
        <>

            <div className="card1">
                <img id='cardImage' src={prop.posterPath} alt="card" />
                <h3>{prop.title}</h3>
                <a className='playlink' href="http://"  >Play </a>
            </div>

        </>
    )
}

export default RowItems
