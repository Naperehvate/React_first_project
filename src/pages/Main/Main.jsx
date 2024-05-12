import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Home from "./Home/Home";
import About from "./About/About";
import Contacts from "./Contacts/Contacts";
import Header from "../Header/Header";
import Blogs from "./Blogs/Blogs";
import NotFound from "./NotFound/NotFound";
import CinemaBlog from "./Blogs/components/CinemaBlog";
import SportBlog from "./Blogs/components/SportBlog";

const Main = () => {
    return (
        <>
            <Router>
                <Header />
                <Routes>
                    <Route path="/" element={<Home />} />
                    <Route path="/about" element={<About />} />
                    <Route path="/contacts" element={<Contacts />} />
                    <Route path="/blogs/*" element={<Blogs />}>
                        <Route path="cinema-blog" element={<CinemaBlog />} />
                        <Route path="sport-blog" element={<SportBlog />} />
                    </Route>
                    <Route path="*" element={<NotFound />} />
                </Routes>
            </Router>
        </>
    );
};

export default Main;
