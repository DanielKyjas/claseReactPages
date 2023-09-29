import AboutPage from "../Pages/AboutPage";
import ContentPage from "../Pages/ContenPage";
import HomePage from "../Pages/HomePage";
import Navbar from "./Navbar"
import {Routes,Route} from "react-router-dom";

const AppRouter = () => {
    return <>
        <Navbar/>
        <Routes>
            <Route path="/*" element={<HomePage/>}/>
            <Route path="/home" element={<HomePage/>}/>
            <Route path="/content" element={<ContentPage/>}/>
            <Route path="/about" element={<AboutPage/>}/>

        </Routes>
    </>
}
export default AppRouter