import React from "react";
import { useEffect, useState } from "react";
import IndexNavbar from "components/Navbars/IndexNavbar";
import ProfilePageHeader from "components/Headers/ProfilePageHeader";
import { Container } from "reactstrap";

export default function Blogs() {
    let pageHeader = React.createRef();
    useEffect(() => {
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
                    <h3 className="title">News and Blogs</h3>
                    <p className="category">{"Tripper Hub"}</p>

                </Container>
            </div>
        </div>
    </>
}