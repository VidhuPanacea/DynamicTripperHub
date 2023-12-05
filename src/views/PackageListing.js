import {
    Button,
    Input,
    InputGroupAddon,
    InputGroupText,
    InputGroup,
    Container,
    Row,
    Card,
    CardBody,
    Col
} from "reactstrap";
import { useLocation } from "react-router-dom"
import { useParams } from "react-router-dom"
import { useEffect, useState } from "react"

import { Swiper, SwiperSlide } from 'swiper/react';
import { Navigation, Pagination, A11y } from 'swiper/modules';
import 'swiper/css/navigation';
import 'swiper/css/pagination';
import 'swiper/css/scrollbar';
import 'swiper/css';
import SwiperNewButton from "components/Slider/SwiperNewButton/SwiperNewButton";
import DetailCard from "components/Slider/Card/DetailCard";
import { Link } from 'react-router-dom';
import IndexNavbar from "components/Navbars/IndexNavbar";
import ListingHeader from "components/Headers/ListingHeader";
import ListingCard from "components/ListingCard";
import DefaultFooter from "components/Footers/DefaultFooter";
import PackageService from "service/package.service";
import DestinationService from "service/destination.service";

export default function PackageListing(props) {
    const [packages, setPackages] = useState([])
    const [pkg, setPkg] = useState([])
    const [destination, setDestination] = useState([])
    
    const location = useLocation()
    const dest = location.pathname.replace('/packages/', '');
    useEffect(() => {

        PackageService.GetPackages()
            .then(res => {
                setPackages(res)
            })
        // DestinationService.GetDestinations().then(res => {
        //     setDestination(res)
        // })
        DestinationService.GetDestinationByName(dest).then(res => {
            setDestination(res)
        })

        console.log(location?.state)
        console.log(location?.pathname)
        setPkg(location?.state?.pkg)
        window.scrollTo(0, 0);

    }, [location?.pathname]);



    return <>
        <IndexNavbar></IndexNavbar>
        <div className="wrapper">
            <ListingHeader data={destination} />

        </div>
        <Container style={{ padding: "3em 0" }}>
            <Row >
                <Col md="12" sm="4">
                    <Card style={{ borderRadius: "10px" }}>
                        <CardBody>
                            <h3 className="text-main">{destination?.name} Packages</h3>
                            <p>{destination?.description}</p>
                        </CardBody>
                    </Card>
                </Col>
            </Row>
        </Container>
        <Container>
            {console.log(packages)}
            {console.log(location.pathname.replace('/packages/', ''))}
            {console.log(packages.filter((d => d.destination == location.pathname.replace('/packages/', ''))))}
            {packages.filter((d => d.destination.toLowerCase() == location.pathname.replace('/packages/', '').toLowerCase())).map((packagee => (<ListingCard pkg={packagee}></ListingCard>)))}
        </Container>

        

        <DefaultFooter></DefaultFooter>

    </>
}