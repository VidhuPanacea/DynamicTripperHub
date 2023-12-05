import React from "react";
import { useEffect, useState } from "react";
import IndexNavbar from "components/Navbars/IndexNavbar";
import ProfilePageHeader from "components/Headers/ProfilePageHeader";
import { Container } from "reactstrap";
import PageService from "service/page.service";
import DefaultFooter from "components/Footers/DefaultFooter";


export default function Contact() {
    let pageHeader = React.createRef();
    const [content, setContent] = useState(``)

    useEffect(() => {
        PageService.GetPages().then(res => {
            setContent(res[1].content)
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
                    <h3 className="title">Contact Us</h3>
                    <p className="category">{"Tripper Hub"}</p>

                </Container>

            </div>
            <Container>
                {/* <div dangerouslySetInnerHTML={{ __html: content }}>

                </div> */}
                <div class="fcf-body" style={{margin:"3em 0"}}>

                    <div id="fcf-form">
                        <h3 class="fcf-h3">Contact us</h3>

                        <form id="fcf-form-id" class="fcf-form-class" method="post" action="contact-form-process.php">

                            <div class="fcf-form-group">
                                <label for="Name" class="fcf-label">Your name</label>
                                <div class="fcf-input-group">
                                    <input type="text" id="Name" name="Name" class="fcf-form-control" required/>
                                </div>
                            </div>

                            <div class="fcf-form-group">
                                <label for="Email" class="fcf-label">Your email address</label>
                                <div class="fcf-input-group">
                                    <input type="email" id="Email" name="Email" class="fcf-form-control" required/>
                                </div>
                            </div>

                            <div class="fcf-form-group">
                                <label for="Message" class="fcf-label">Your message</label>
                                <div class="fcf-input-group">
                                    <textarea id="Message" name="Message" class="fcf-form-control" rows="6" maxlength="3000" required></textarea>
                                </div>
                            </div>

                            <div class="fcf-form-group">
                                <button type="submit" id="fcf-button" class="fcf-btn fcf-btn-primary fcf-btn-lg fcf-btn-block">Send Message</button>
                            </div>


                        </form>
                    </div>

                </div>
            </Container>
            <DefaultFooter></DefaultFooter>
        </div>
    </>
}