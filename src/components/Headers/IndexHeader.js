/*eslint-disable*/
import React from "react";

// reactstrap components
import {
  Button,
  Card,
  CardHeader,
  CardBody,
  CardFooter,
  Form,
  Input,
  InputGroupAddon,
  InputGroupText,
  InputGroup,
  Container,
  Col,
  Row,
  FormGroup
} from "reactstrap";

// core components

function IndexHeader() {
  let pageHeader = React.createRef();
  const [leftFocus, setLeftFocus] = React.useState(false);
  const [rightFocus, setRightFocus] = React.useState(false);
  React.useEffect(() => {
    if (window.innerWidth > 991) {
      const updateScroll = () => {
        let windowScrollTop = window.pageYOffset / 3;
        pageHeader.current.style.transform =
          "translate3d(0," + windowScrollTop + "px,0)";
      };
      window.addEventListener("scroll", updateScroll);
      return function cleanup() {
        window.removeEventListener("scroll", updateScroll);
      };
    }
  });
  const [formData, setFormData] = React.useState({
    name: "", phone: "", email: "", destination: ""
  })
  var form = document.getElementById('form')
  const submitHandler = () => {
    alert(document.getElementById('phone')?.value)
    formData.phone = document.getElementById('phone')?.value;
    formData.email = document.getElementById('email')?.value;
    formData.destination = document.getElementById('destination')?.value;

    // e.preventDefault()
    setFormData(
      formData
    )
    // var name = document.getElementById('name').value;
    // var phone = document.getElementById('phone').value;
    // var email = document.getElementById('email').value;
    // // var content = document.getElementById('content').value;
    // var destination = document.getElementById('destination').value;
    fetch('http://103.50.213.106:9001/api/Lead/leads', {
      method: 'POST',
      body: JSON.stringify(formData),
      headers: {
        'Content-type': 'application/json; charset=UTF-8',
      }
    })
      .then(function (response) {
        return response.json()
      })
      .then(function (data) {

      }).catch(error => console.error('Error:', error));
  }


  return (
    <>
      <div className="page-header clear-filter" filter-color="">

        <div
          className="page-header-image"
          style={{
            backgroundImage: "url(" + require("assets/img/header.jpg") + ")"
          }}
          ref={pageHeader}
        ></div>
        <Container>
          <Col className="ml-auto mr-auto" md="12">
            <h1 className="title" style={{ marginTop: "4em" }}> Find the Perfect Holidays</h1>
            <h3 >Cost Friendly Packages on your way...</h3>
            <Card className="card mt-5 pt-4 pb-3 pl-5 pr-5" style={{ backgroundColor: "rgb(600,600,600,.5)", borderRadius: "20px" }}>
              <CardHeader>
                <Form onSubmit={submitHandler}>
                  <Row>
                    <Col md="3">
                      <InputGroup className="input-lg no-border" >

                        <InputGroupAddon addonType="prepend">
                          <InputGroupText style={{ backgroundColor: "white" }}>
                            <i className="now-ui-icons location_compass-05"></i>
                          </InputGroupText>
                        </InputGroupAddon>
                        <Input style={{ backgroundColor: "white" }}
                          placeholder="Destination"
                          name="destination"
                          id="destination"
                          type="text"
                        ></Input>
                      </InputGroup>
                    </Col>
                    <Col lg="3" sm="6">
                      <InputGroup className="input-lg no-border" >
                        <InputGroupAddon addonType="prepend">
                          <InputGroupText style={{ backgroundColor: "white" }}>
                            <i className="fa fa-user-circle"></i>
                          </InputGroupText>
                        </InputGroupAddon>
                        <Input style={{ backgroundColor: "white" }}
                          placeholder="Phone Number"
                          name="phone"
                          id="phone"
                          type="text"
                        ></Input>
                      </InputGroup>
                    </Col>

                    <Col lg="3" sm="6">
                      <InputGroup className="no-border input-lg" >
                        <InputGroupAddon addonType="prepend" >
                          <InputGroupText style={{ backgroundColor: "white" }}>
                            <i className="now-ui-icons ui-1_email-85"></i>
                          </InputGroupText>
                        </InputGroupAddon>
                        <Input style={{ backgroundColor: "#ffffff" }}
                          placeholder="Email"
                          type="email"
                          name="email"
                          id="email"
                        ></Input>
                      </InputGroup>
                    </Col>
                    <Col>
                      <Button
                        onClick={submitHandler}
                        type="submit"
                        block
                        className="btn-round m-0"
                        color="info"
                        href="#pablo"
                        size="lg"
                      >
                        Get Started
                      </Button>
                    </Col>

                  </Row>
                </Form>
              </CardHeader>
            </Card>
          </Col>
        </Container>
      </div>
    </>
  );
}

export default IndexHeader;
