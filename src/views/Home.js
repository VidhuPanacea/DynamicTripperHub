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

import Slider from "components/Slider/Slider.js";
import dream from "../assets/img/svg 1.png"
import discover from "../assets/img/airplane 1.png"
import destination from "../assets/img/suitcase 1.png"
import Themes from "components/Themes";




function Home() {
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
                <h3 className="style-heading">Welcome to</h3>
                <h1 className="title-main">Tripper <span>Hub</span></h1>
              </Col>
              <Col md="12">
                <p className="text-main"><span>Tripperhub.com</span> agency based in New Delhi. Offering tailor-made tour packages of India at competitive prices. We organize various quality travel arrangements like escorted tours, incentive travel, and discounted hotel bookings in India. There are some parts of the world that, once visited, get into your heart and won’t go. For us, India is such a place... </p>
              </Col>

            </Row>
            <Row style={{ paddingTop: "4em" }}>

              <Col md="4">
                <img width={200} src={dream} alt="" />
                <h3 style={{ marginTop: "1em", fontWeight: "500", fontSize: "1.25rem" }}>Dream</h3>

              </Col>
              <Col md="4">
                <img width={200} src={discover} alt="" />
                <h3 style={{ marginTop: "1em", fontWeight: "500", fontSize: "1.25rem" }}>Discover</h3>

              </Col>
              <Col md="4">
                <img width={200} src={destination} alt="" />
                <h3 style={{ marginTop: "1em", fontWeight: "500", fontSize: "1.25rem" }}>Destination</h3>
              </Col>

            </Row>
          </Container>
          <Container>
            <Slider uptext={"Explore"} tittle={"Trending"} clrtitle={" Destinations"}></Slider>
          </Container>
          <Container>
            <Slider uptext={"Amazing"} tittle={"International"} clrtitle={" Tours"}></Slider>
          </Container>

          <Themes></Themes>


          <DarkFooter></DarkFooter>

        </div>

      </div>
    </>
  );
}

export default Home;
