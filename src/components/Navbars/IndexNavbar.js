import React, { useState } from "react";
import { Link } from "react-router-dom";
// reactstrap components
import {
  Button,
  Collapse,
  DropdownToggle,
  DropdownMenu,
  DropdownItem,
  UncontrolledDropdown,
  NavbarBrand,
  Navbar,
  NavItem,
  NavLink,
  Nav,
  Container,
  UncontrolledTooltip,
} from "reactstrap";

import logo from "../../assets/img/tripperHubpng 1.png"
import NavigationService from "service/navigation.service";



function IndexNavbar() {
  const [navbarColor, setNavbarColor] = React.useState("navbar-transparent");
  const [collapseOpen, setCollapseOpen] = React.useState(false);
  const [menu, setMenu] = useState([])
  const [domestic, setDomestic] = useState([])
  const [international, setInternational] = useState([])

  React.useEffect(() => {
    NavigationService.GetNavMenu()
      .then(res => {
        setMenu(res)
      })

    // DestinationService.GetDestinations()
    //   .then(res => {
    //     setDomestic(res.filter(res => res.type == "Domestic"))
    //     setInternational(res.filter(res => res.type == "International"))
    //   })
    const updateNavbarColor = () => {
      if (
        document.documentElement.scrollTop > 399 ||
        document.body.scrollTop > 399
      ) {
        setNavbarColor("");
      } else if (
        document.documentElement.scrollTop < 400 ||
        document.body.scrollTop < 400
      ) {
        setNavbarColor("navbar-transparent");
      }
    };
    window.addEventListener("scroll", updateNavbarColor);
    return function cleanup() {
      window.removeEventListener("scroll", updateNavbarColor);
    };


  }, []);

  return (
    <>
      {collapseOpen ? (
        <div
          id="bodyClick"
          onClick={() => {
            document.documentElement.classList.toggle("nav-open");
            setCollapseOpen(false);
          }}
        />
      ) : null}
      <Navbar className={"fixed-top " + navbarColor} expand="lg" color={"orangered"}>
        <Container>
          <div className="navbar-translate">
            <NavbarBrand
              href="/"
              id="navbar-brand"
            >
              <img width="220px" src={logo} alt="" />
            </NavbarBrand>
            <button
              className="navbar-toggler navbar-toggler"
              onClick={() => {
                document.documentElement.classList.toggle("nav-open");
                setCollapseOpen(!collapseOpen);
              }}
              aria-expanded={collapseOpen}
              type="button"
            >
              <span className="navbar-toggler-bar top-bar"></span>
              <span className="navbar-toggler-bar middle-bar"></span>
              <span className="navbar-toggler-bar bottom-bar"></span>
            </button>
          </div>
          <Collapse
            className="justify-content-end"
            isOpen={collapseOpen}
            navbar
          >


            <Nav navbar>

              {menu.filter((m) => m.parentId == 0).map((m) => {
                if (menu.filter((m1) => m1.parentId == m.id).length > 0) {

                  return <UncontrolledDropdown nav>
                    <DropdownToggle
                      caret
                      color="default"
                      nav
                      onClick={(e) => e.preventDefault()}
                    >
                      <p >{m.name}</p>
                    </DropdownToggle>

                    <DropdownMenu>
                      {menu.filter((m1) => m1.parentId == m.id)?.map((sm) => (<DropdownItem tag={Link} to={`/packages/${sm.name}`}>
                        {sm.name}
                      </DropdownItem>))}
                    </DropdownMenu>
                  </UncontrolledDropdown>
                }
                else {
                  return <NavItem>
                    <NavLink tag={Link} to={`/${m.name}`}>
                      <p>{m.name}</p>
                    </NavLink>
                  </NavItem>
                }

              })}




            </Nav>
          </Collapse>
        </Container>
      </Navbar>
    </>
  );
}

export default IndexNavbar;
