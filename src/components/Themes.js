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
        id: "1", name: "Honeymoon",coverImage:"https://images.unsplash.com/photo-1637870996864-65dc1c00f4dc?auto=format&fit=crop&q=80&w=2070&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D", color:"#E05263"
    },
    {
        id: "1", name: "Group",coverImage:"https://images.unsplash.com/photo-1506869640319-fe1a24fd76dc?auto=format&fit=crop&q=80&w=2070&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",color:"#FFC759"
    },
    {
        id: "1", name: "Family",coverImage:"https://images.unsplash.com/photo-1655185497013-db98aca061d3?auto=format&fit=crop&q=80&w=2070&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",color:"#659157"
    },
    {
        id: "1", name: "Business",coverImage:"https://images.unsplash.com/photo-1533478784933-5fdbddc8ea7c?auto=format&fit=crop&q=80&w=2072&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",color:"#2F2235"
    }]
    return <Container style={{ backgroundColor: "#FFF6F3", padding: "1em", margin: "5em auto", borderRadius: "10px", padding: "2em 5%" }}>

        <h3 style={{ fontSize: "1.5rem", textAlign: "center", margin: "0" }} className="style-heading">Choose the</h3>
        <h2 style={{ fontSize: "1.5rem", textAlign: "center", margin: "0" }} className="title-main">Theme for you</h2>
        <Row style={{marginTop:"3em"}}>

            {themes.map((theme) => (<Col md="3">
                <Card className="customcard">
                    <img src={theme.coverImage} alt="" />
                    <p style={{backgroundColor:`${theme.color}`}} className="customcard-text">{theme.name}</p>
                </Card>
            </Col>))}
        </Row>


    </Container>
}
