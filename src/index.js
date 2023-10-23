
import React from "react";
import ReactDOM from "react-dom/client";
import { BrowserRouter, Route, Routes, Navigate, Router } from "react-router-dom";

// styles for this kit
import "assets/css/bootstrap.min.css";
import "assets/scss/now-ui-kit.scss?v=1.5.0";
import "assets/demo/demo.css?v=1.5.0";
import "assets/demo/nucleo-icons-page-styles.css?v=1.5.0";
import 'swiper/css';
import 'swiper/css/pagination';
import './assets/css/customs.css'
import Home from "views/Home.js";
import Packages from "views/Packages";
import PackageListing from "views/PackageListing";
import PackageDetails from "views/PackageDetails";
import Blogs from "views/Blogs";
import DetailedBlog from "views/DetailedBlog";
import About from "views/About";
import Contact from "views/Contact";


const root = ReactDOM.createRoot(document.getElementById("root"));

root.render(
  <BrowserRouter>
    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="/packages" element={<Packages/>} />  
      <Route path="/packages/:destination" element={<PackageListing />} />
      <Route path="/packages/:destination/:packageName" element={<PackageDetails />} />
      <Route path="/blogs" element={<Blogs />} />
      <Route path="/blogs/:blogName" element={<DetailedBlog />} />
      <Route path="/about-us" element={<About />} />
      <Route path="/contact-us" element={<Contact />} />
      <Route path="*" element={<Navigate to="/home" replace />} />
    </Routes>
  </BrowserRouter>
);


//Packages Flow
//Home > Packages/Destinations > DestinationName > PackageName  
//<Home> --  <Packages> --  <PackageListing> --  <DetailedPackage>
 



// <BrowserRouter>
//   <Routes>
//     <Route path="/home" element={<Home />} />
//     <Route path="/page/:pagename" element={<Page />} />
//     <Route path="/detailed" element={<DetailedView />} />
//     <Route path="/nucleo-icons" element={<NucleoIcons />} />
//     <Route path="/login-page" element={<LoginPage />} />
//     <Route path="/row-slide" element={<Slider />} />
//     <Route path="/landing-page" element={<LandingPage />} />
//     <Route path="/packages/:packagename" element={<ProfilePage />} />
//     <Route path="/div-explor" element={<Explor />} />
//     <Route path="*" element={<Navigate to="/home" replace />} />
//   </Routes>
// </BrowserRouter>