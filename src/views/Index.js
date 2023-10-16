import React from "react";

// reactstrap components
import {
  Button,
  Input,
  InputGroupAddon,
  InputGroupText,
  InputGroup,
  Container,
  Row,
  Col
} from "reactstrap";

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
import DetailedView from "./DetailedView.js";





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
          {/* About Us */}
          <Container style={{ textAlign: "center", padding: "2em 0" }}>
            <Row style={{ paddingTop: "2em" }}>
              <Col md="12">
                <h1 className="title-main">Tripper <span>Hub</span></h1>
              </Col>
              <Col md="12">
                <p className="text-main"><span>Tripperhub.com</span> agency based in New Delhi. Offering tailor-made tour packages of India at competitive prices. We organize various quality travel arrangements like escorted tours, incentive travel, and discounted hotel bookings in India. There are some parts of the world that, once visited, get into your heart and won’t go. For us, India is such a place... </p>
              </Col>
            </Row>



          </Container>
          <Container>
            <Slider tittle={"Trending"} clrtitle={" Destinations"}></Slider>
          </Container>
          <Container>
            
          </Container>

        </div>

      </div>
    </>
  );
}

export default Index;
