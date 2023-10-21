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

    setPkg(location?.state?.pkg)

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
  },[]);
  return (
    <>
      <div
        className="page-header clear-filter page-header-small"
        filter-color="blue"
      >
        <div
          className="page-header-image"
          style={{
            backgroundImage: `url(${pkg?.image})`
          }}
          ref={pageHeader}
        ></div>
        <Container>
          <h3 className="title">{pkg?.destinations} </h3>
          <p className="category">{"packages"}</p>

        </Container>
      </div>
    </>
  );
}

export default ProfilePageHeader;
