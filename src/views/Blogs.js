import React from "react";
import { useEffect, useState } from "react";
import IndexNavbar from "components/Navbars/IndexNavbar";
import ProfilePageHeader from "components/Headers/ProfilePageHeader";
import { Container, Row, Col, Card } from "reactstrap";
import DefaultFooter from "components/Footers/DefaultFooter";

export default function Blogs() {
    let pageHeader = React.createRef();
    useEffect(() => {
        window.scrollTo(0, 0);
    })


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
                        backgroundImage: `url(https://images.unsplash.com/photo-1494783367193-149034c05e8f?auto=format&fit=crop&q=80&w=2070&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D)`
                    }}
                    ref={pageHeader}
                ></div>
                <Container>
                    <h3 className="title">News and Blogs</h3>
                    <p className="category">{"Tripper Hub"}</p>

                </Container>
            </div>
            <div style={{ margin: "2em 0" }}>
                <Container>
                    <h1 className='slider-tittle-main' style={{ marginBottom: "1.5em" }}>Latest<span> Blogs</span> </h1>

                    <Row>
                        <Col md="4">
                            <Card style={{ padding: ".5em" }}>
                                <img style={{ borderRadius: "5px" }} src="https://images.unsplash.com/photo-1682685797277-f2bf89b24017?q=80&w=2070&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDF8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D" alt="" />
                                <div className="blogcard-text">
                                    <h3 className="blogtitle"> The Rajasthan Vlog</h3>
                                    <p className="blogtext"> Rajasthan is a very beautiful place with many palaces and sights to see ...</p>
                                    <button className="blogbtn">Read more</button>
                                </div>
                            </Card>
                        </Col>
                        <Col md="4">
                            <Card style={{ padding: ".5em" }}>
                                <img style={{ borderRadius: "5px" }} src="https://images.unsplash.com/photo-1682685797277-f2bf89b24017?q=80&w=2070&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDF8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D" alt="" />
                                <div className="blogcard-text">
                                    <h3 className="blogtitle"> The Rajasthan Vlog</h3>
                                    <p className="blogtext"> Rajasthan is a very beautiful place with many palaces and sights to see ...</p>
                                    <button className="blogbtn">Read more</button>
                                </div>
                            </Card>
                        </Col>
                        <Col md="4">
                            <Card style={{ padding: ".5em" }}>
                                <img style={{ borderRadius: "5px" }} src="https://images.unsplash.com/photo-1682685797277-f2bf89b24017?q=80&w=2070&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDF8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D" alt="" />
                                <div className="blogcard-text">
                                    <h3 className="blogtitle"> The Rajasthan Vlog</h3>
                                    <p className="blogtext"> Rajasthan is a very beautiful place with many palaces and sights to see ...</p>
                                    <button className="blogbtn">Read more</button>
                                </div>
                            </Card>
                        </Col>
                        <Col md="4">
                            <Card style={{ padding: ".5em" }}>
                                <img style={{ borderRadius: "5px" }} src="https://images.unsplash.com/photo-1682685797277-f2bf89b24017?q=80&w=2070&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDF8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D" alt="" />
                                <div className="blogcard-text">
                                    <h3 className="blogtitle"> The Rajasthan Vlog</h3>
                                    <p className="blogtext"> Rajasthan is a very beautiful place with many palaces and sights to see ...</p>
                                    <button className="blogbtn">Read more</button>
                                </div>
                            </Card>
                        </Col>
                        <Col md="4">
                            <Card style={{ padding: ".5em" }}>
                                <img style={{ borderRadius: "5px" }} src="https://images.unsplash.com/photo-1682685797277-f2bf89b24017?q=80&w=2070&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDF8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D" alt="" />
                                <div className="blogcard-text">
                                    <h3 className="blogtitle"> The Rajasthan Vlog</h3>
                                    <p className="blogtext"> Rajasthan is a very beautiful place with many palaces and sights to see ...</p>
                                    <button className="blogbtn">Read more</button>
                                </div>
                            </Card>
                        </Col>
                        <Col md="4">
                            <Card style={{ padding: ".5em" }}>
                                <img style={{ borderRadius: "5px" }} src="https://images.unsplash.com/photo-1682685797277-f2bf89b24017?q=80&w=2070&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDF8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D" alt="" />
                                <div className="blogcard-text">
                                    <h3 className="blogtitle"> The Rajasthan Vlog</h3>
                                    <p className="blogtext"> Rajasthan is a very beautiful place with many palaces and sights to see ...</p>
                                    <button className="blogbtn">Read more</button>
                                </div>
                            </Card>
                        </Col>
                    </Row>
                </Container>
            </div>
                <DefaultFooter></DefaultFooter>
        </div>
    </>
}