import {
    Button,
    NavItem,
    NavLink,
    Nav,
    TabContent,
    TabPane,
    Container,
    Card,
    CardBody,
    Row,
    Col,
    UncontrolledTooltip
} from "reactstrap";
import { useEffect, useState } from "react";
import { useLocation } from "react-router-dom";
import { Link } from "react-router-dom";
export default function ListingCard(props) {
    console.log(props.pkg)

    return (
        <Link to={`/packages/${props.pkg?.destination}/${props.pkg?.name}`} state={{ pkg: props.pkg }}>
            <Row>
                <Col md="12">
                    <Card style={{ borderRadius: "10px" }}>
                        <CardBody>
                            <Row>
                                <Col md="4">
                                    <img style={{ borderRadius: "5px", height: "100%" }} src={props.pkg?.photo} alt="photo" />
                                </Col>
                                <Col style={{ display: "flex", flexDirection: "column", justifyContent: "space-between" }} md="8">

                                    <Row>
                                        <h1 style={{ fontSize: "1.25rem", margin: "0", paddingBottom: ".75em" }} className="cardtitle">{props.pkg?.name}</h1>
                                   
                                        <p className="cardtext">
                                            {props.pkg?.description}
                                        </p>
                                    </Row>
                                    <Row style={{ textAlign: "center", justifySelf: "flex-end" }}>
                                        <button style={{ width: "50%" }} className="primarybtn">View Package</button>
                                    </Row>
                                </Col>

                            </Row>
                        </CardBody>

                    </Card>
                </Col>
            </Row>
        </Link>
    )
}