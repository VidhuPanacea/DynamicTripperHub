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
import { internationalPackages } from "service/package.service"
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

export default function PackageListing(props) {

    const [pkg, setPkg] = useState([])

    const location = useLocation()
    useEffect(() => {
        console.log(location?.state)
        setPkg(location?.state?.pkg)

    }, []);


    return <>
        <IndexNavbar></IndexNavbar>
        <div className="wrapper">
            <ListingHeader data={pkg} />

        </div>
        <Container style={{ padding: "3em 0" }}>
            <Row >
                <Col md="12">
                    <Card style={{borderRadius:"10px"}}>
                        <CardBody>
                            <h3 className="text-main">{pkg?.name} Packages</h3>
                            <p>Trip to Australia from India
                                Are you planning a trip to Australia? If that’s the case, Pickyourtrail has the best deals on Australia tour packages that you should not miss. Whether you are looking for an Australian honeymoon package or an Australia family tour package, we offer a variety of options that you can look into. Australia is home to entertainment, scenic views, and resplendent architecture. If you are thinking of visiting this dreamy place, Pickyourtrail has more than 40 Australia tour packages, each different and unique from the next in terms of budget, amenities, stays, etc. The most fascinating factor about Australia is the balance it has with wildlife. You get to witness some of the most exotic creations of nature in Australia. If you are still speculating whether or not to visit Australia, check out our fast-moving Australia itineraries, and you won’t regret it. </p>
                        </CardBody>
                    </Card>
                </Col>
            </Row>
        </Container>
        <ListingCard pkg={pkg}></ListingCard>
        <DefaultFooter></DefaultFooter>

    </>
}