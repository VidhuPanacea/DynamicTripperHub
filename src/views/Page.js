
import {
    Button,
    NavItem,
    NavLink,
    Nav,
    TabContent,
    TabPane,
    Container,
    Row,
    Col,
    UncontrolledTooltip
} from "reactstrap";
import Packages from "service/package.service"
import { useLocation } from "react-router-dom"
import { useParams } from "react-router-dom"
import { useEffect, useState } from "react"
import IndexNavbar from "components/Navbars/IndexNavbar"

export default function Page(props) {

    const [pkg, setPkg] = useState({})

    const location = useLocation()
    useEffect(() => {
        console.log(location?.state)
        setPkg(location?.state?.pkg)

    }, []);



    //need to call an API here for the specific Id of that Package so that even if someone
    //opens with a link, still he can get to the same page to which the link is linked to...
    return <>

        <IndexNavbar />
        <div
            className="page-header clear-filter page-header-small"
            filter-color="blue"
        >
            <div
                className="page-header-image"
                style={{
                    backgroundImage: `url(${pkg?.coverimage})`
                }}

            ></div>
        </div>
        <div className="wrapper">
            <Container>

                <h1>{pkg?.name}</h1>
            </Container>
        </div>

    </>
}


