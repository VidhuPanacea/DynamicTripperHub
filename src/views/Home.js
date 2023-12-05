import React, { useState } from "react";

// reactstrap components
import {
  Button,
  Input,
  InputGroupAddon,
  InputGroupText,
  InputGroup,
  Container,
  Row,
  Col,
  Card
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
import DestinationService from "service/destination.service";
import Budgets from "components/Budgets";
import Calltoaction from "components/Calltoaction";

function Home() {
  const [domestic, setDomestic] = useState([])
  const [international, setInternational] = useState([])
  const [getaway, setGetaway] = useState([])


  React.useEffect(() => {
    DestinationService.GetDestinations()
      .then(res => {
        setDomestic(res.filter(res => res.type == "Domestic"))
        setInternational(res.filter(res => res.type == "International"))
        setGetaway(res.filter(res => res.categoryId == 1))
      })


    document.body.classList.add("index-page");
    document.body.classList.add("sidebar-collapse");
    document.documentElement.classList.remove("nav-open");
    window.scrollTo(0, 0);
    document.body.scrollTop = 0;
    return function cleanup() {
      document.body.classList.remove("index-page");
      document.body.classList.remove("sidebar-collapse");
    };
  }, []);


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
              <Col md="12" >
                <p className="text-main"><span>Tripperhub.com</span> agency based in New Delhi. Offering tailor-made tour packages of India at competitive prices. <br /> We organize various quality travel arrangements like escorted tours, incentive travel, and discounted hotel bookings in India. There are some parts of the world that, once visited, get into your heart and wont go. For us, India is such a place... </p>
              </Col>

            </Row>
            <Row style={{ paddingTop: "4em" }}>

              <Col md="4">
                <img width={180} src={dream} alt="" />
                <h3 style={{ marginTop: "1em", fontWeight: "500", fontSize: "1.25rem" }}>Dream</h3>

              </Col>
              <Col md="4">
                <img width={180} src={discover} alt="" />
                <h3 style={{ marginTop: "1em", fontWeight: "500", fontSize: "1.25rem" }}>Discover</h3>

              </Col>
              <Col md="4">
                <img width={180} src={destination} alt="" />
                <h3 style={{ marginTop: "1em", fontWeight: "500", fontSize: "1.25rem" }}>Destination</h3>
              </Col>

            </Row>
          </Container>
          <Container>
            <Slider data={domestic} uptext={"Explore"} tittle={"Trending"} clrtitle={" Destinations"}></Slider>
          </Container>
          <Container>
            <Slider data={international} uptext={"Amazing"} tittle={"International"} clrtitle={" Tours"}></Slider>
          </Container>



          <div className="slider-wrapper" style={{ backgroundColor: "rgb(255, 246, 243", paddingBottom: "4em", margin: "4em 0" }}>
            <Container>
              <Slider data={getaway} uptext={"Lead out"} tittle={"Getaway"} clrtitle={" Destinations"}></Slider>
            </Container>
          </div>


          <Themes />


          <div className="slider-wrapper" style={{ backgroundColor: "#FFFBEB", paddingBottom: "4em", margin: "4em 0" }}>
            <Container>
              <Slider data={international} uptext={"Lead out"} tittle={"Getaway"} clrtitle={" Destinations"}></Slider>
            </Container>
          </div>
          <Container>
            <Slider data={international} uptext={"Discover"} tittle={" Himalyan"} clrtitle={" Peaks"}></Slider>
          </Container>
          <Budgets />

          {/* <Container>
            <Row>
              <Col md="6">
                <Card>
                  <img src="https://images.unsplash.com/photo-1549534077-1b4f31dd59ea?q=80&w=1964&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D" alt="" />
                </Card>
              </Col>
              <Col md="6">
                <Card>
                  <img src="https://images.unsplash.com/photo-1549534077-1b4f31dd59ea?q=80&w=1964&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D" alt="" />
                </Card>
              </Col>
            </Row>
          </Container> */}

          <Container>
            <div className="home-review">
              " <span style={{ color: "var(--cprimary)" }}>TripperHub</span> uses its unique matching algorithms and price comparison engine to help travellers create customised tour packages at competitive online prices.”
            </div>
          </Container>


          <Calltoaction></Calltoaction>


          <DarkFooter></DarkFooter>

        </div>

      </div>
    </>
  );
}

export default Home;
