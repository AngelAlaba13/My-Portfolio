import {Routes, Route} from "react-router-dom";
import Home from "../pages/Home";
import Proofs from "../pages/Proofs";
import Skills from "../pages/Skills";
import Header from "../components/Header";
import Contact from "../pages/Contact";
import Testemonies from "../pages/reviews/Testemonies";

function MainPage(){
    return(
        <>
            <Header/>
            <Home/>
            <Proofs/>
            <Skills/>
            <Contact/>
        </>
    );
}

function AppRoutes(){
    return(
        <Routes>
            <Route path="/" element={<MainPage/>} />
            <Route path="/reviews" element={<Testemonies/>}/>
        </Routes>
    )
}

export default AppRoutes