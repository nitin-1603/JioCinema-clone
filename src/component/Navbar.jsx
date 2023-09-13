import { NavLink } from 'react-router-dom';
import '../App.css'
const Navbar = () => {
    return (
        <>
            <ul className="nav bg-dark">
                <li className="nav-item ">
                    <NavLink className="nav-link active nave-item" aria-current="page" to="/"><img id='brandLogo' src="https://www.jiocinema.com/images/jc_logo_v2.svg" ></img></NavLink>
                </li>
                <li className="nav-item ">
                    <NavLink className="nav-link nave-item" to="/subscribe">Subscribe</NavLink>
                </li>
                <li className="nav-item ">
                    <NavLink className="nav-link nave-item" to="/foryou">For You</NavLink>
                </li>
                <li className="nav-item ">
                    <NavLink className="nav-link nave-item" to="/sports">Sports</NavLink>
                </li>
                <li className="nav-item ">
                    <NavLink className="nav-link nave-item" to="/movies">Movies</NavLink>
                </li>
                <li className="nav-item ">
                    <NavLink className="nav-link nave-item" to="/tvshows">Tv Shows</NavLink>
                </li>
                <li className="nav-item ">
                    <NavLink className="nav-link nave-item" to="/news">News</NavLink>
                </li>
            </ul>
        </>
    )
}

export default Navbar
