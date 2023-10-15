import Packages from "service/package.service"
import { useLocation } from "react-router-dom"
import { useParams } from "react-router-dom"
import { useEffect, useState } from "react"

export default function DetailedView(props) {

    const [pkg, setPkg] = useState({})

    const location = useLocation()
    useEffect(() => {
        console.log(location?.state)
        setPkg(location?.state?.pkg)

    }, []);


    return <>
        <h1>{pkg?.name}</h1>
        <h1>{pkg?.name}</h1>
        <div className='banner-image' >
                
                    <img src={pkg?.image} alt={pkg?.name} />
                
            
        </div>
    </>
}