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
        <Link to={`/packages/${props.pkg?.destination}/${props.pkg?.path}`} state={{ pkg: props.pkg }}>
            <Row>
                <Col md="12">
                    <Card style={{ borderRadius: "10px" }}>
                        <CardBody>
                            <Row>
                                <Col md="4">
                                    <img style={{ borderRadius: "5px" }} src={props.pkg?.coverImage} alt="" />
                                </Col>
                                <Col md="5">
                                    <Row>
                                        <h1 className="cardtitle">{props.pkg?.name}</h1>
                                    </Row>
                                    <Row>
                                        <p className="cardtext">
                                            {props.pkg?.description}
                                        </p>
                                    </Row>
                                </Col>
                                <Col md="3" style={{ textAlign: "center" }}>
                                    <button style={{ width: "80%", }} className="primarybtn">View Package</button>
                                </Col>
                            </Row>
                        </CardBody>

                    </Card>
                </Col>
            </Row>
        </Link>
    )
}