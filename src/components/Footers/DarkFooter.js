/*eslint-disable*/
import React from "react";
import { Link } from "react-router-dom";

// reactstrap components
import { Container } from "reactstrap";

function DarkFooter() {
  return (
    <footer className="footer" data-background-color="black">
      <Container>
        <nav>
          <ul>
            <li>
              <Link
                to="/"
              >
                Tripper Hub
              </Link>
            </li>
            <li>
              <Link
                to="/about"
              >
                About Us
              </Link>
            </li>
            <li>
              <Link
                to="/blogs"
              >
                Blog
              </Link>
            </li>
          </ul>
        </nav>
        <div className="copyright" id="copyright">
          © {new Date().getFullYear()}, Designed by{" "}
          <a
           
            target="_blank"
          >
            Panacee Software Solutions
          </a>
          . Coded by{" "}
          <a
           
            target="_blank"
          >
            Vxdhu
          </a>
          .
        </div>
      </Container>
    </footer>
  );
}

export default DarkFooter;
