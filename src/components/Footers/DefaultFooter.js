/*eslint-disable*/
import React from "react";
import { Link } from "react-router-dom";

// reactstrap components
import { Container } from "reactstrap";

// core components

function DefaultFooter() {
  return (
    <>
      <footer className="footer footer-default">
        <Container>
          <nav>
            <ul>
              <li>
                <a
                  href="/"
                  
                >
                  Tripper Hub
                </a>
              </li>
              <li>
                <Link
                to="/about-us"
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
              href="#"
              target="_blank"
            >
              Panacee Software Soltutions
            </a>
            . Coded by{" "}
            <a
              href="#"
              target="_blank"
            >
              Vxdhu
            </a>
            .
          </div>
        </Container>
      </footer>
    </>
  );
}

export default DefaultFooter;
