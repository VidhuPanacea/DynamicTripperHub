import React from "react";

// reactstrap components
import { Container } from "reactstrap";

// core components

function ListingHeader(props) {
  let pageHeader = React.createRef();

  // React.useEffect(() => {
  //   if (window.innerWidth > 991) {
  //     const updateScroll = () => {
  //       let windowScrollTop = window.pageYOffset / 3;
  //       pageHeader.current.style.transform =
  //         "translate3d(0," + windowScrollTop + "px,0)";
  //     };
  //     window.addEventListener("scroll", updateScroll);
  //     return function cleanup() {
  //       window.removeEventListener("scroll", updateScroll);
  //     };
  //   }
  // });
  return (
    <>
      <div
        className="page-header page-header-small"
      >
        <div
          className="page-header-image"
          style={{
            backgroundImage: `url(${props.data?.photo})`
          }}
          ref={pageHeader}
        ></div>
        <Container>
          <h3 className="title">{props.data?.name}</h3>
          <p className="category">{props.data?.title}</p>
          <div className="content">
            <button className="primarybtn">View All Packages</button>
          </div>
        </Container>
      </div>
      <div style={{ backgroundColor: "#1D2024" }}>
        <Container>
          <div className="underHeader">
            <p>
              Ideal Duration <br /> <span>{props.data?.duration}</span>
            </p>
            <p>
              Starts From <br /> <span>₹{props.data?.price}</span>
            </p>
            <p>
              Suitable for <br /> <span>2 Adults</span>
            </p>
          </div>
        </Container>
      </div>
    </>
  );
}

export default ListingHeader;
