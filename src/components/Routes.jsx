import {Routes, Route} from "react-router-dom";
import Home from "../pages/Home";
import Proofs from "../pages/Proofs";
import Skills from "../pages/Skills";
import Header from "../components/Header";
import Contact from "../pages/Contact";
import Gallery from "../pages/headers/AboutMe";
import AboutMe from "../pages/headers/Gallery";
import MyWorks from "../pages/headers/MyWorks";
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
            <Route path="/headers/About" element={<AboutMe/>}/>
            <Route path="/headers/Gallery" element={<Gallery/>}/>
            <Route path="/headers/MyWorks" element={<MyWorks/>}/>
            <Route path="/reviews/Testemonies" element={<Testemonies/>}/>
        </Routes>
    )
}

export default AppRoutes;