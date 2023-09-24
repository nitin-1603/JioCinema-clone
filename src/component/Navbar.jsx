import { NavLink } from 'react-router-dom';
import '../App.css'

const Navbar = () => {
    return (
        <>
            <ul className="nav bg-dark">
                <li className="nav-item ">
                    <NavLink className="nav-link " aria-current="page" to="/"><img id='brandLogo' src="https://www.jiocinema.com/images/jc_logo_v2.svg" ></img></NavLink>
                </li>
                <li className="nav-item ">
                    <NavLink className="nav-link " to="/subscribe">Subscribe</NavLink>
                </li>
                <li className="nav-item ">
                    <NavLink className="nav-link " to="/foryou">For You</NavLink>
                </li>
                <li className="nav-item ">
                    <NavLink className="nav-link " to="/tvshows">Tv Shows</NavLink>
                </li>
                <li className="nav-item ">
                    <NavLink className="nav-link " to="/movies">Movies</NavLink>
                </li>
                <li className="nav-item ">
                    <NavLink className="nav-link " to="/sports">Sports</NavLink>
                </li>
                <li className="nav-item ">
                    <NavLink className="nav-link " to="/news">News</NavLink>
                </li>
                
                <li className="nav-item ">
                    <button className='nav-link bg-dark'>Login</button>
                </li>

            </ul>
        </>
    )
}

export default Navbar
