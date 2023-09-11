import { BrowserRouter, Routes, Route } from "react-router-dom";
import Navbar from "./Navbar";
import Foryou from "./Foryou";

const Home = () => {
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
