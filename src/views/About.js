import React from "react";
import { useEffect, useState } from "react";
import IndexNavbar from "components/Navbars/IndexNavbar";
import ProfilePageHeader from "components/Headers/ProfilePageHeader";
import { Container } from "reactstrap";
import PageService from "service/page.service";
import DefaultFooter from "components/Footers/DefaultFooter";

export default function About() {
    const [content, setContent] = useState(``)
    let pageHeader = React.createRef();
    useEffect(() => {
        PageService.GetPages().then(res => {
            setContent(res[0].content)
        })

        window.scrollTo(0, 0);
    })


    return <>
        <IndexNavbar />
        <div className="wrapper">
            <div
                className="page-header clear-filter page-header-small"
                filter-color="blue"
            >
                <div
                    className="page-header-image"
                    style={{
                        backgroundImage: `url(https://images.unsplash.com/photo-1494783367193-149034c05e8f?auto=format&fit=crop&q=80&w=2070&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D)`
                    }}
                    ref={pageHeader}
                ></div>
                <Container>
                    <h3 className="title">About Us</h3>
                    <p className="category">{"Tripper Hub"}</p>

                </Container>
            </div>
            <Container>
                {/* <div dangerouslySetInnerHTML={{ __html: content }}>

                </div> */}
                <div style={{ margin: "2em 0" }}>


                    OUR TRAVEL AGENCY GOAL <br />
                    Since 2012, Tripper Hub has been committed to bringing our clients the best in value and quality travel arrangements. We are passionate about travel and sharing the world's wonders on the leisure travel side, and providing corporate travelers hi-touch services to facilitate their business travel needs.
                    <br />
                    <br />
                    We’re an employee-owned travel agency anchored by our values, integrity and dedication to customer service. Our  company consistently Works as one of the best agencies in the country (Travel Weekly, Business Travel Weekly), and is a top member of the prestigious Signature Travel Network, a worldwide partnership allowing us to provide our customers unmatched benefits.
                    <br />
                    <br />
                    Our strong company culture and passion for our profession has resulted in our being named each year as one of the "Best Places To Work". Satisfied employees lead to satisfied customers. We know the growth and success of our company depends upon fulfilling our clients needs every day. That is also our promise.
                    <br />
                    <br />
                    YOUR ADVANTAGE IS OUR GLOBAL CONTACTS, OUR DEPTH OF EXPERTISE AND OUR PROFESSIONALISM.
                    Our passion is custom designing your travel, creating personalized, seamless and stress-free itineraries with every detail in mind: from the singular travel experiences that suit you, to the most reliable transportation and best available accommodations that best meet your needs. There is nothing routine about what we do -- each trip is like creating a new work of art, and handled with the same care and respect.
                    <br />
                    <br />
                    Like you, we are discerning travelers.  We know all vacations are not alike. As a seasoned traveler you want that experience that sets your trip apart, that enhances and inspires you. That difference is what matters to us in crafting the right travel experience for you.
                    <br />
                    <br />
                    Travel enriches and transforms us. Our perspective is broadened, our senses awakened and our spirit renewed. While some may call it vacation, for us it is part of a life well-lived and makes for a better world.
                    <br />
                    <br />
                    Our intimate knowledge and personal insider connections worldwide allow us to both arrange the best trips for you, as well as provide VIP treatment which may include: unique and authentic experiences, as well as upgrades, savings, spending credits, complimentary meals, exclusive privileges, top-rated guides and more.
                    <br />
                    <br />
                    Our aim is to provide you the most quality and value, and we'll be your advocates before, during and after you return. Finding the "best price" is not the same as finding the "best value" that meets your needs and wants. We invite you to click here and connect with us to stay abreast of the latest exclusive travel opportunities.
                    <br />
                    <br />
                    If you’re ready to plan your next globe-hopping adventure, reach out to one of our travel experts, or send us your travel request and one of our travel experts will reach out to you no later than the next business day to help with your online vacation planning.
                    <br />
                    <br />
                    ► COMPANY VISION
                    We aspire to be the most sought after Travel Management Company -- One traveler at a time.
                    <br />
                    <br />

                    ► COMPANY MISSION
                    We are an employee-owned company, with a passion for providing exemplary customer service.
                    We do this by leveraging our expertise and technology to deliver innovative travel solutions.
                    It is important we do this within an enjoyable work environment;
                    the more fun we have, the more fun you have!
                    <br />
                    <br />

                    ► COMPANY VALUES
                    We are PASSIONATE about delighting our clients and colleagues.
                    We gain TRUST by treating others with integrity, respect and fairness.
                    We create PARTNERSHIPS through open and honest communication.
                    We achieve PRIDE & EXCELLENCE by being innovative and creative.
                    We are PERSONALLY ACCOUNTABLE for any challenge brought to our attention.
                    We COLLABORATE to support the objectives of the company and our preferred relationships.
                    We have a CULTURE where we challenge each other to grow personally and professionally
                    through education, training and travel.
                    We properly represent our company with RESPONSIBLE CITIZENSHIP in and out of the workplace.
                    We have INTEGRITY and build our company and client relationships on the highest ethical standards.
                    We help create a FUN environment within our TravelStore family.
                </div>
            </Container>
            <DefaultFooter></DefaultFooter>
        </div>
    </>
}