import {
    Button,
    Input,
    InputGroupAddon,
    InputGroupText,
    InputGroup,
    Container,
    Row,
    Card,
    CardHeader,
    CardBody,
    Col,
} from "reactstrap";
import { Link } from 'react-router-dom'
import honeymoon from "../assets/img/bg8.jpg"

export default function Budgets() {

    const budgets = [{
        id: "1", name: "Below 5000", photo: "https://images.unsplash.com/photo-1637870996864-65dc1c00f4dc?auto=format&fit=crop&q=80&w=2070&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D", color: "#E05263"
    },
    {
        id: "1", name: "Below 20000", photo: "https://images.unsplash.com/photo-1506869640319-fe1a24fd76dc?auto=format&fit=crop&q=80&w=2070&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D", color: "#FFC759"
    },
    {
        id: "1", name: "Below 40000", photo: "https://images.unsplash.com/photo-1655185497013-db98aca061d3?auto=format&fit=crop&q=80&w=2070&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D", color: "#659157"
    },
    {
        id: "1", name: "Below 100000", photo: "https://images.unsplash.com/photo-1655185497013-db98aca061d3?auto=format&fit=crop&q=80&w=2070&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D", color: "#2A628F"
    }]
    return <Container style={{ backgroundColor: "rgb(255, 246, 243)", padding: "1em", margin: "5em auto", borderRadius: "10px", padding: "2em 5%" }}>

        <h2 style={{ fontSize: "1.5rem", textAlign: "center", marginBottom:".25em",color:"var(--csecondary)" }} className="title-main">Trips for your</h2>
        <h3 style={{ fontSize: "1.5rem", textAlign: "center", margin: "0" }} className="style-heading">Budget</h3>
        <Row style={{ marginTop: "3em" }}>

            {budgets.map((theme) => (<Col md="3">
                <Link to={`/packages/${theme.name}-packages`} state={{pkg:theme}}>
                    <Card className="guideCard">
                        <p style={{ backgroundColor: `${theme.color}` }} className="customcard-text">{theme.name}</p>
                    </Card>
                </Link>
            </Col>))}
        </Row>


    </Container>
}
