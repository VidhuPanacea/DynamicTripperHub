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

    const [pkg, setPkg] = useState({})
    const location = useLocation()
    useEffect(() => {

        console.log(location?.state)
        setPkg(location?.state?.pkg)


    }, []);
    return (
        <Container>

            <Row className="listcard-container">
                <Col md="3" style={{ paddingLeft: "0" }}>
                    <img src={pkg.image} alt={""} />
                </Col>
                <Col md="6" style={{ padding: "1em" }}>
                    <h3>Hllo</h3>
                    <p>Hi, this package is very good</p>
                </Col>
                <Col style={{ padding: "1em 1em", display: "flex", alignItems: "flex-end" }} md="3">
                    <button className="view-package-btn">View Package</button>
                </Col>
            </Row>

        </Container>
    )
}