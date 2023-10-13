import React from "react";

// reactstrap components
// import {
// } from "reactstrap";

// core components
import IndexNavbar from "components/Navbars/IndexNavbar.js";
import IndexHeader from "components/Headers/IndexHeader.js";
import DarkFooter from "components/Footers/DarkFooter.js";

// sections for this page
import Images from "./index-sections/Images.js";
import BasicElements from "./index-sections/BasicElements.js";
import Navbars from "./index-sections/Navbars.js";
import Tabs from "./index-sections/Tabs.js";
import Pagination from "./index-sections/Pagination.js";
import Notifications from "./index-sections/Notifications.js";
import Typography from "./index-sections/Typography.js";
import Javascript from "./index-sections/Javascript.js";
import Carousel from "./index-sections/Carousel.js";
import NucleoIcons from "./index-sections/NucleoIcons.js";
import CompleteExamples from "./index-sections/CompleteExamples.js";
import SignUp from "./index-sections/SignUp.js";
import Examples from "./index-sections/Examples.js";
import Download from "./index-sections/Download.js";
import TourSlider from "./index-sections/TourSlider.js";
import Slider from "components/Slider/Slider.js";
import Explor from "components/Explor/Explor.js";
import Travellers from "components/Travellers/Travellers.js";
import Fanbook from "components/Fanbook/Fanbook.js";
import KrishFlyier from "components/Krisflayer/KrishFlyier.js";
import Footer from "components/Footer/Footer.js";
import Holiday from "components/Holiday/Holiday.js";
import Press from "components/Press/Press.js";





function Index() {
  React.useEffect(() => {
    document.body.classList.add("index-page");
    document.body.classList.add("sidebar-collapse");
    document.documentElement.classList.remove("nav-open");
    window.scrollTo(0, 0);
    document.body.scrollTop = 0;
    return function cleanup() {
      document.body.classList.remove("index-page");
      document.body.classList.remove("sidebar-collapse");
    };
  });


  return (
    <>
      <IndexNavbar />
      <div className="wrapper">
        <IndexHeader />
        <div className="main">
          {/* <BasicElements /> */}
          <Slider/>
          <Slider tittle="VISA ON ARRIVAL DESTINATIONS"/>
          <Explor tittle="QUICK GETAWAY DESTINATIONS" tittle2="Ideal for 3-5 days trip"/>
          <Travellers/>
          <Explor tittle="EXPLORATIONS FAR AWAY" tittle2="Ideal for 5-14 days trip"/>
          <Fanbook/>
          <Slider tittle="TOURISM BOARD PARTNERS"/>
          <Slider tittle="OCEANIA"/>
          <Slider tittle="EUROPEAN HOLIDAYS"/>
          <Holiday/>
          <Slider tittle="SOUTH EAST ASIAN VACATIONS"/>
          <KrishFlyier/>
          <Slider tittle="MIDDLE EAST"/>
          <Slider tittle="SCANDINAVIA"/>
          <Slider tittle="DESTINATION GUIDES"/>
          <Press/>
          <Footer/>
          
          {/* <Typography /> */}
          {/* <Navbars />
          <Tabs />
          <Pagination />
          <Notifications />
          
          <Javascript />
          <Carousel />
          <NucleoIcons />
          <CompleteExamples />
          <SignUp />
          <Examples />
          <Download /> */}
        </div>
        {/* <DarkFooter /> */}
      </div>
    </>
  );
}

export default Index;
