import {
    Button,
    Input,
    InputGroupAddon,
    InputGroupText,
    InputGroup,
    Container,
    Row,
    Col
} from "reactstrap";
import Slider from "components/Slider/Slider";
import { useState, useEffect } from "react";
import ProfilePageHeader from "components/Headers/ProfilePageHeader";
import IndexNavbar from "components/Navbars/IndexNavbar";
import { packages } from "service/package.service";

export default function Packages() {
    const [pkg, setPkg] = useState([])
    useEffect(() => {
        setPkg(packages)
        window.scrollTo(0, 0);
    })


    return <>
        <IndexNavbar />
        <div className="wrapper">

            <ProfilePageHeader pkg={pkg[0]} />

            <Container>
                <Slider data={pkg} uptext={"Explore"} tittle={"Malaysia"} ></Slider>
            </Container>
            <Container>
                <Slider data={[]} uptext={"Visit"} tittle={"Thailand"} ></Slider>
            </Container>
            <Container>
                <Slider data={[]} uptext={"Discover"} tittle={"Indonesia"} ></Slider>
            </Container>
            <Container>
                <Slider data={[]} uptext={"Discover"} tittle={"Indonesia"} ></Slider>
            </Container>


        </div>
    </>
}