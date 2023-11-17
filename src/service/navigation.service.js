import axios, * as others from 'axios';
import BaseService from './base.service'

const API_URL = BaseService.API_URL;

const client = axios.create({
    baseURL: API_URL
});


async function GetNavMenu() {
    const response = await client.get(`Menu/GetMenu`);
    return response.data;
}


const NavigationService = {
    GetNavMenu
}


export default NavigationService;




// const menu = [
//     {
//         id: 1,
//         name: "Home",
//         subMenu: []
//     },
//     {
//         id: 2,
//         name: "Domestic",
//         subMenu: [{
//             id: 1, name: "Hiamchal Pradesh"
//         },
//         {
//             id: 2, name: "Rajasthan"
//         }, {
//             id: 3, name: "Uttarakhand"
//         }
//         ]
//     },
//     {
//         id: 3,
//         name: "International",
//         subMenu: [{
//             id: 1, name: "Malaysia"
//         },
//         {
//             id: 2, name: "singapore"
//         }, {
//             id: 3, name: "Thailand"
//         }]
//     },
//     {
//         id: 4,
//         name: "Blogs",
//         subMenu: []
//     },
//     {
//         id: 5,
//         name: "About",
//         subMenu: []
//     },
//     {
//         id: 6,
//         name: "Contact",
//         subMenu: []
//     }
// ]