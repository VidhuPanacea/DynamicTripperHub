import React from "react";
import {
    Button,
    Input,
    InputGroupAddon,
    InputGroupText,
    InputGroup,
    Container,
    Row,
    Col,
    Card,
    CardBody,
    FormGroup,
} from "reactstrap";

import Packages from "service/package.service"
import { useLocation } from "react-router-dom"
import { useParams } from "react-router-dom"
import { useEffect, useState } from "react"
import IndexNavbar from "components/Navbars/IndexNavbar"
import Themes from "components/Themes";
import DefaultFooter from "components/Footers/DefaultFooter";

export default function PackageDetails(props) {
    let pageHeader = React.createRef();
    const [pkg, setPkg] = useState({});


    const location = useLocation()
    useEffect(() => {
        console.log(location?.state)
        setPkg(location?.state?.pkg)
        window.scrollTo(0, 0);
    }, []);


    return <>
        <IndexNavbar />
        <div className="wrapper">
            <div
                className="page-header clear-filter page-header-small"
                filter-color="blue"
            >
                <div
                    className="page-header-image"
                    style={{
                        backgroundImage: `url(${pkg.coverImage})`
                    }}
                    ref={pageHeader}
                ></div>
                <Container>
                    <h3 className="title">{pkg.name} </h3>
                    <p className="category">{pkg.destination}</p>

                </Container>
            </div>
            <Container style={{ padding: "4em 3%" }}>
                <Row>

                    <Col md="8">
                        <Row>
                            <Col md="12">
                                <h2 style={{ fontSize: "1.25rem", fontWeight: "600", color: "var(--csecondary)" }}>Overview</h2>
                            </Col>
                            <Col md="12">
                                <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Harum doloribus ipsam ullam corrupti expedita? Tenetur voluptates eligendi asperiores similique, omnis reprehenderit quos officia. Et veniam debitis odio fuga, quae velit!</p>
                            </Col>
                        </Row>



                        <Row>
                            <Col md="12"><h2 style={{ fontSize: "1.25rem", fontWeight: "600", color: "var(--csecondary)" }}>Itinerary</h2></Col>
                        </Row>
                        <Row>
                            <Col md="12">
                                <h5>Day 1</h5>
                                <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Harum doloribus ipsam ullam corrupti expedita? Tenetur voluptates eligendi asperiores similique, omnis reprehenderit quos officia. Et veniam debitis odio fuga, quae velit!</p>
                                <h5>Day 2</h5>
                                <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Harum doloribus ipsam ullam corrupti expedita? Tenetur voluptates eligendi asperiores similique, omnis reprehenderit quos officia. Et veniam debitis odio fuga, quae velit!</p>
                                <h5>Day 3</h5>
                                <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Harum doloribus ipsam ullam corrupti expedita? Tenetur voluptates eligendi asperiores similique, omnis reprehenderit quos officia. Et veniam debitis odio fuga, quae velit!</p>
                                <h5>Day 4</h5>
                                <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Harum doloribus ipsam ullam corrupti expedita? Tenetur voluptates eligendi asperiores similique, omnis reprehenderit quos officia. Et veniam debitis odio fuga, quae velit!</p>
                                <h5>Day 5</h5>
                                <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Harum doloribus ipsam ullam corrupti expedita? Tenetur voluptates eligendi asperiores similique, omnis reprehenderit quos officia. Et veniam debitis odio fuga, quae velit!</p>
                            </Col>
                        </Row>
                    </Col>
                    <Col md="4">
                        <Card style={{ borderRadius: "10px" }}>
                            <CardBody>
                                <Row>
                                    <Col md="12">
                                        <FormGroup>
                                            <label> Name</label>
                                            <Input type="text"></Input>
                                        </FormGroup>
                                        <FormGroup>
                                            <label> Phone Number</label>
                                            <Input type="text"></Input>
                                        </FormGroup>
                                        <FormGroup>
                                            <label> Email</label>
                                            <Input type="text"></Input>
                                        </FormGroup>
                                        <FormGroup>
                                            <label> Message</label>
                                            <Input type="text"></Input>
                                        </FormGroup>
                                    </Col>
                                </Row>


                                <button className="primarybtn" style={{ width: "100%" }}>Book Now</button>
                            </CardBody>
                        </Card>
                    </Col>

                </Row>

            </Container>
            <Container>
                <Themes></Themes>
            </Container>
            <DefaultFooter></DefaultFooter>
        </div>
    </>
}