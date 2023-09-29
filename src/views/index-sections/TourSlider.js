
import { Swiper, SwiperSlide } from 'swiper/react';
import {
    Button,
    Card,
    CardHeader,
    CardBody,
    CardFooter,
    Form,
    Input,
    InputGroupAddon,
    InputGroupText,
    CardText,
    CardSubtitle,
    CardTitle,
    InputGroup,
    Container,
    Col,
    Row,
    CardImgOverlay,
    CardImg,
    FormGroup
} from "reactstrap";
export default function TourSlider() {
    const destinations = [
        { id: 1, name: "Shimla" }, { id: 2, name: "Manali" }, { id: 3, name: "Chail" }, { id: 4, name: "Mussorie" }, { id: 5, name: "Dalhousie" }, { id: 6, name: "Chamoli" }
    ]
    const categories = [
        { id: 1, name: "Honeymoon", text: " Himachal Pradesh is spread across valleys with many perennial rivers flowing through them. Agriculture, horticulture, hydropower, and tourism are important constituents of the state's economy." },
        { id: 1, name: "Intl.", text: " Himachal Pradesh is spread across valleys with many perennial rivers flowing through them. Agriculture, horticulture, hydropower, and tourism are important constituents of the state's economy." },
        { id: 1, name: "Religious", text: " Himachal Pradesh is spread across valleys with many perennial rivers flowing through them. Agriculture, horticulture, hydropower, and tourism are important constituents of the state's economy." },
        { id: 1, name: "Business", text: " Himachal Pradesh is spread across valleys with many perennial rivers flowing through them. Agriculture, horticulture, hydropower, and tourism are important constituents of the state's economy." },
        { id: 1, name: "Camping", text: " Himachal Pradesh is spread across valleys with many perennial rivers flowing through them. Agriculture, horticulture, hydropower, and tourism are important constituents of the state's economy." }
    ]
    return <>
        <div className="section section-basic" id="basic-elements">
            <Container className='mt-5 mb-5'>
                <h3 className='title mb-5' style={{ color: "#22292F" }}>Trending Destinations</h3>
                <Swiper
                    slidesPerView={4}
                    spaceBetween={10}
                    className="mySwiper"
                    breakpoints={{
                        // when window width is >= 640px
                        320: {
                            width: 320,
                            slidesPerView: 1,
                        },
                        // when window width is >= 768px

                    }}

                >
                    {destinations.map((destination) => {
                        return <SwiperSlide>
                            <Card inverse
                                style={{
                                    width: '250px'
                                }}
                            >
                                <CardImg
                                    alt="Card image cap"
                                    src={"https://picsum.photos/" + (Math.floor(Math.random() * 300) + 200) + "/270"}

                                    style={{
                                        height: 270
                                    }}
                                    width="100%"
                                />
                                <CardImgOverlay>
                                    <CardTitle tag="h5">
                                        <h5 className='title'>{destination.name}</h5>
                                    </CardTitle>
                                </CardImgOverlay>
                            </Card>
                        </SwiperSlide>
                    })}


                </Swiper>
            </Container>

            {/* <Container className='mt-5'>
                <Swiper
                    slidesPerView={1}
                    spaceBetween={0}
                    className="mySwiper1"
                >
                    {categories.map((category) => {
                        return <SwiperSlide>
                            <Card inverse>
                                <CardImg
                                    alt="Card image cap"
                                    src="https://picsum.photos/900/270"
                                    style={{
                                        height: 270
                                    }}
                                    width="100%"
                                />
                                <CardImgOverlay>
                                    <CardTitle tag="h5">
                                        <h5 className='title'>{category.name}</h5>
                                    </CardTitle>
                                    <CardText style={{ width: "50%", fontWeight: "500" }}>
                                        {category.text}
                                    </CardText>
                                </CardImgOverlay>
                            </Card>
                        </SwiperSlide>
                    })}

                </Swiper>
            </Container> */}
            <div className='pb-4' style={{ backgroundColor: "#EEF1FF" }}>
                <Container className='mt-5'>
                    <h3 className='title' style={{ color: "#22292F" }}>Welcome to <span style={{ color: "#FF3F00" }}> Tripper Hub</span></h3>
                    <p className='title' style={{ padding: "0" }}>Tripper Hub is a Travel Agency based in New Delhi that provides Tailor made packages for everyone including individuals, couples, groups as well as professionals.</p>

                </Container>
                <Container className='mb-4'>
                    <Card inverse>
                        <CardImg
                            alt="Card image cap"
                            src="https://picsum.photos/900/270"
                            style={{
                                height: 270
                            }}
                            width="100%"
                        />
                        <CardImgOverlay>
                            <CardTitle tag="h5">
                                <h5 className='title'>Honeymoon Getaways</h5>
                            </CardTitle>
                            <CardText style={{ width: "100%", fontWeight: "500" }}>
                                Himachal Pradesh is spread across valleys with many perennial rivers flowing through them. Agriculture, horticulture, hydropower, and tourism are important constituents of the state's economy.
                            </CardText>
                        </CardImgOverlay>
                    </Card>
                </Container>
            </div>


            <Container className='mt-5 mb-3'>
                <h3 className='title' style={{ color: "#22292F" }}>Browse through<span style={{ color: "#FF3F00" }}> Categories</span></h3>
                <Swiper
                    slidesPerView={4}
                    spaceBetween={10}
                    className="mySwiper"
                    breakpoints={{
                        // when window width is >= 640px
                        320: {
                            width: 320,
                            slidesPerView: 1,
                        },
                        // when window width is >= 768px

                    }}

                >
                    {categories.map((destination) => {
                        return <SwiperSlide>
                            <Card inverse
                                style={{
                                    width: '250px'
                                }}
                            >
                                <CardImg
                                    alt="Card image cap"
                                    src={"https://picsum.photos/" + (Math.floor(Math.random() * 300) + 250) + "/270"}
                                    style={{
                                        height: 270
                                    }}
                                    width="100%"
                                />
                                <CardImgOverlay>
                                    <CardTitle tag="h5">
                                        <h5 className='title'>{destination.name}</h5>
                                    </CardTitle>
                                </CardImgOverlay>
                            </Card>
                        </SwiperSlide>
                    })}


                </Swiper>
            </Container>


        </div>
    </>
}