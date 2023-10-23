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
import { internationalPackages } from "service/package.service";

export default function Packages() {
    const [pkg, setPkg] = useState([])
    useEffect(() => {
        setPkg(internationalPackages)
    })


    return <>
        <IndexNavbar />
        <div className="wrapper">

            <ProfilePageHeader pkg={pkg[0]} />

            <Container>
                <Slider uptext={"Explore"} tittle={"Malaysia"} ></Slider>
            </Container>
            <Container>
                <Slider uptext={"Visit"} tittle={"Thailand"} ></Slider>
            </Container>
            <Container>
                <Slider uptext={"Discover"} tittle={"Indonesia"} ></Slider>
            </Container>
            <Container>
                <Slider uptext={"Discover"} tittle={"Indonesia"} ></Slider>
            </Container>


        </div>
    </>
}