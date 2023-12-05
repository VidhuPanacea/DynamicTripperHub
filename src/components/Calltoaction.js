import { Container, Row, Col } from "reactstrap"

export default function Calltoaction() {
    return <div className="cta-home" >
        <Container>
            <Row>
                <Col md="8">
                    <h2 className="title-main">Can't find the trip that you want?</h2>
                    <h2 className="title-main sec">Our Expert will make a custom itinerary for you!</h2>
                    <button style={{marginTop:"2.5em", width:"40%"}} className="primarybtn">Talk to Expert</button>
                </Col>
                <Col md="4"><img className="cta-img" src="https://images.unsplash.com/photo-1552960562-daf630e9278b?q=80&w=1887&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D" alt="" /></Col>
               
            </Row>
          

        </Container>
    </div>
} 