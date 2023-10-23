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
    Col
} from "reactstrap";
import honeymoon from "../assets/img/bg8.jpg"

export default function Themes() {

    const themes = [{
        id: "1", name: "Honeymoon"
    },
    {
        id: "1", name: "Group"
    },
    {
        id: "1", name: "Family"
    },
    {
        id: "1", name: "Business"
    }]
    return <Container style={{ backgroundColor: "#FFF6F3", padding: "1em", margin: "5em auto", borderRadius: "10px", padding: "2em 5%" }}>

        <h3 style={{ fontSize: "1.5rem", textAlign: "center", margin: "0" }} className="style-heading">Choose the</h3>
        <h2 style={{ fontSize: "1.5rem", textAlign: "center", margin: "0" }} className="title-main">Theme for you</h2>
        <Row style={{marginTop:"3em"}}>

            {themes.map((theme) => (<Col md="3">
                <Card className="customcard">
                    <img src={honeymoon} alt="" />
                    <p className="customcard-text">{theme.name}</p>
                </Card>
            </Col>))}
        </Row>


    </Container>
}
