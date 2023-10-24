import React from "react";

// reactstrap components
import { Container } from "reactstrap";
import { useLocation } from "react-router-dom";
import { useState } from "react";

// core components

function ProfilePageHeader(props) {
  let pageHeader = React.createRef();
  const [pkg, setPkg] = useState({})
  const location = useLocation()
  React.useEffect(() => {
    if (location.state) {
      console.log(location?.state?.pkg, "state")
      setPkg(location?.state?.pkg)
    }
    else{
      console.log(pkg, "props")
      setPkg(props.pkg)
    }

    if (window.innerWidth > 991) {
      const updateScroll = () => {
        let windowScrollTop = window.pageYOffset / 3;
        // pageHeader.current.style.transform =
        //   "translate3d(0," + windowScrollTop + "px,0)";
      };
      window.addEventListener("scroll", updateScroll);
      return function cleanup() {
        window.removeEventListener("scroll", updateScroll);
      };
    }
  }, []);
  return (
    <>
      <div
        className="page-header clear-filter page-header-small"
        filter-color="blue"
      >
        <div
          className="page-header-image"
          style={{
            backgroundImage: `url(https://images.unsplash.com/photo-1577717903315-1691ae25ab3f?auto=format&fit=crop&q=80&w=2070&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D)`
          }}
          ref={pageHeader}
        ></div>
        <Container>
          <h3 className="title">International & Domestic</h3>
          <p className="category">{"packages"}</p>

        </Container>
      </div>
    </>
  );
}

export default ProfilePageHeader;
