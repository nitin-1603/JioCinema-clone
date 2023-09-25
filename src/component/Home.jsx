import { BrowserRouter, Routes, Route } from "react-router-dom";
import Navbar from "./Navbar";
import Foryou from "./Foryou";
import TvShows from "./TvShows";
import Movies from './Movies'
import Error404 from "./Error404";
import Login from "./Login";



const Home = () => {


    return (
        <>
            <BrowserRouter>
                <Navbar />
                <Routes>

                    {/* <Route render={() => (<Redirect to="/" />)} ></Route> */}
                    <Route index element={<Foryou />} ></Route>
                    <Route path='/foryou' element={<Foryou />} ></Route>
                    <Route path='/tvshows' element={<TvShows />} ></Route>
                    <Route path='/movies' element={<Movies />} ></Route>
                    <Route path='/sports' element={<Error404 sport='Sports' h1Error='h1Error' />} ></Route>
                    <Route path='/news' element={<Error404 news='News' h1Error='h1Error' />} ></Route>
                    <Route path='/login' element={<Login />} ></Route>

                </Routes>
            </BrowserRouter>
        </>
    )
}

export default Home