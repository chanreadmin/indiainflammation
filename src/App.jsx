import { useEffect, useState } from "react";

import "./App.css";
import Header from "./components/navbar/Header";

import Footer from "./components/footer/Footer";
import { BrowserRouter, HashRouter, Route, Routes } from "react-router-dom";
import Home from "./pages/home/Home";
import About from "./pages/about/About";
import Membership from "./pages/membership/Membership";
import Gallery from "./pages/gallery/Gallery";
import Contact from "./pages/contact/Contact";
import AOS from "aos";
import 'aos/dist/aos.css';
import SirconGallery from "./components/sircongallery/SirconGallery";
import SirconGallery18 from "./components/sircongallery/SirconGallery18";
import SirconGallery19 from "./components/sircongallery/SirconGallery19";
import SirconGallery20 from "./components/sircongallery/SirconGallery20";
import SirconGallery21 from "./components/sircongallery/SirconGallery21";
import SirconGallery22 from "./components/sircongallery/SirconGallery22";
import SirconGallery23 from "./components/sircongallery/SirconGallery23";
import Sircon from "./pages/sircon/Sircon";
// import Team from "./components/team/Team";
import PostDetails from "./components/posts/PostDetails";
import Blog from "./pages/blog/Blog";
import SirconEvents from "./pages/sircon/sirevents/SirconEvents";
import Donate from "./pages/donate/Donate";

function App() {
  const [count, setCount] = useState(0);
  useEffect(() => {
    AOS.init();
  })
  return (
    <div className="font-sans antialiased">

      <Header />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/about" element={<About />} />
        <Route path="/membership" element={<Membership />} />
        <Route path="/gallery" element={<Gallery />} />
        <Route path="/contact" element={<Contact />} />
        <Route path="/sircongallery/:id" element={<SirconGallery />} />
        <Route path="/sircongallery18" element={<SirconGallery18 />} />
        <Route path="/sircongallery19" element={<SirconGallery19 />} />
        <Route path="/sircongallery20" element={<SirconGallery20 />} />
        <Route path="/sircongallery21" element={<SirconGallery21 />} />
        <Route path="/sircongallery22" element={<SirconGallery22 />} />
        <Route path="/sircongallery23" element={<SirconGallery23 />} />
        <Route path="/sircon" element={<Sircon />} />
        <Route path="/postdetails/:id" element={<PostDetails />} />
        <Route path="/blog" element={<Blog />} />
        <Route path="/sirconevent/:id" element={<SirconEvents />} />
        <Route path="/donate" element={<Donate />} />

      </Routes>

      <Footer />
    </div>
  );
}

export default App;
