import { BrowserRouter, Routes, Route } from "react-router-dom";
import Navbar from "./Navbar";
import Foryou from "./Foryou";

const Home = () => {
  // let url = 'https://api.themoviedb.org/3/movie/popular?api_key=7a3c4af06a979a783478c392fe50b96f';


  return (
    <>
      <BrowserRouter>
      <Navbar/>
        {/* <Route path='/foryou' element={<Foryou/>} ></Route> */}
      <Routes>
        <Route path='/foryou' element={<Foryou/>} ></Route>
      </Routes>
      </BrowserRouter>
    </>
  )
}

export default Home
