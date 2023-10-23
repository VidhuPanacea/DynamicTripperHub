import {
    Button,
    NavItem,
    NavLink,
    Nav,
    TabContent,
    TabPane,
    Container,
    Row,
    Col,
    UncontrolledTooltip
} from "reactstrap";
import { useEffect, useState } from "react";
import { useLocation } from "react-router-dom";
import { Link } from "react-router-dom";
export default function ListingCard(props) {


    return (
        <Container>
            <Link state={{ pkg: props.pkg }} to={`/packages/:destination/${props?.pkg?.name}`}>
                <Row className="listcard-container">
                    <Col md="3" style={{ paddingLeft: "0" }}>
                        <img style={{height:"100%",borderTopLeftRadius:"10px",borderBottomLeftRadius:"10px"}} src={props?.pkg?.coverimage} alt={""} />
                    </Col>
                    <Col md="6" style={{ padding: "1em" }}>
                        <h3>{props.pkg.name}</h3>
                        <p>{props.pkg.description}</p>
                    </Col>
                    <Col style={{ padding: "1em 1em", display: "flex", flexDirection: "column", justifyContent: "space-between" }} md="3">
                        {/* {props.pkg.inclusions.map(incl => (<p>{incl.name}</p>))} */}
                        <button  className="view-package-btn">View Package</button>
                    </Col>
                </Row>
            </Link>

        </Container>
    )
}