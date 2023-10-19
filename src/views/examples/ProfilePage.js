import React from "react";

// reactstrap components
import {
  Button,
  NavItem,
  NavLink,
  Nav,
  TabContent,
  TabPane,
  Container,
  Row,
  Col,
  UncontrolledTooltip
} from "reactstrap";

// core components
import ExamplesNavbar from "components/Navbars/ExamplesNavbar.js";
import ProfilePageHeader from "components/Headers/ProfilePageHeader.js";
import DefaultFooter from "components/Footers/DefaultFooter.js";
import IndexNavbar from "components/Navbars/IndexNavbar";
import ListingCard from "components/ListingCard";
import { useLocation } from "react-router-dom";
import { useState } from "react";

function ProfilePage(props) {
  const [pills, setPills] = React.useState("2");
  const [pkg, setPkg] = useState({})
  const location = useLocation()
  React.useEffect(() => {

    console.log(location?.state)
    setPkg(location?.state?.pkg)

    document.body.classList.add("profile-page");
    document.body.classList.add("sidebar-collapse");
    document.documentElement.classList.remove("nav-open");
    window.scrollTo(0, 0);
    document.body.scrollTop = 0;
    return function cleanup() {
      document.body.classList.remove("profile-page");
      document.body.classList.remove("sidebar-collapse");
    };

  }, []);

  return (
    <>
      <IndexNavbar />
      <div className="wrapper">
        <ProfilePageHeader pkg={pkg} />
        <div className="section">
          <Container>

            <h3 style={{ padding: "0" }} className="title"> {pkg.destinations} Packages </h3>
            <h5 className="description">
              An artist of considerable range, Ryan — the name taken by
              Melbourne-raised, Brooklyn-based Nick Murphy — writes, performs
              and records all of his own music, giving it a warm, intimate feel
              with a solid groove structure. An artist of considerable range.
            </h5>

          </Container>
          <Container>
            <ListingCard></ListingCard>

          </Container>
        </div>
        <DefaultFooter />
      </div>
    </>
  );
}

export default ProfilePage;
