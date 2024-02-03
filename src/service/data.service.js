const nav_menu = [
    {
        id: 1,
        name: "Home",
        pathname: "/",
        parentId: 0,
        parentName: null,
    },
    {
        id: 2,
        name: "Domestic",
        pathname: "/packages/domestic",
        parentId: 0,
        parentName: null,
    },
    {
        id: 3,
        name: "Uttarakhand",
        pathname: "/packages/uttarakhand",
        parentId: 2,
        parentName: "Domestic",
    },
    {
        id: 4,
        name: "International",
        pathname: "/packages/international",
        parentId: 0,
        parentName: null,
    },
    {
        id: 5,
        name: "Malaysia",
        pathname: "/packages/malaysia",
        parentId: 4,
        parentName: "International",
    },
    {
        id: 6,
        name: "Pilgrimage",
        pathname: "/packages/pilgrimage",
        parentId: 0,
        parentName: null,
    },
    {
        id: 7,
        name: "Char Dham Yatra",
        pathname: "/packages/char-dham-yatra",
        parentId: 6,
        parentName: "Pilgrimage",
    },
    {
        id: 8,
        name: "Blog",
        pathname: "/blog",
        parentId: 0,
        parentName: null,
    },
    {
        id: 9,
        name: "About Us",
        pathname: "/about-us",
        parentId: 0,
        parentName: null,
    },
    {
        id: 10,
        name: "Contact",
        pathname: "/contact",
        parentId: 0,
        parentName: null,
    },
    {
        id: 11,
        name: "Adi Kailash Tour",
        pathname: "/packages/adi-kailash-tour",
        parentId: 6,
        parentName: "Pilgrimage",
    },
    {
        id: 12,
        name: "Kailiash Mansarovar",
        pathname: "/packages/kailash-mansarovar",
        parentId: 6,
        parentName: "Pilgrimage",
    },
    {
        id: 13,
        name: "Ayodhya Tour",
        pathname: "/packages/ayodhya-tour",
        parentId: 6,
        parentName: "Pilgrimage",
    },
    {
        id: 14,
        name: "Singapore",
        pathname: "/packages/singapore",
        parentId: 4,
        parentName: "International",
    },
    {
        id: 15,
        name: "Thailand",
        pathname: "/packages/thailand",
        parentId: 4,
        parentName: "International",
    },
    {
        id: 15,
        name: "Zurich",
        pathname: "/packages/zurich",
        parentId: 4,
        parentName: "International",
    },
    {
        id: 16,
        name: "Himachal Pradesh",
        pathname: "/packages/himachal-pradesh",
        parentId: 2,
        parentName: "Domestic",
    },
    {
        id: 17,
        name: "Rajasthan",
        pathname: "/packages/rajasthan",
        parentId: 2,
        parentName: "Domestic",
    },
    {
        id: 18,
        name: "Dubai",
        pathname: "/packages/dubai",
        parentId: 4,
        parentName: "Internatioanl",
    },
]


const destinations_new = [
    {
        id: 0,
        name: "",
        type: "",
        title: "",
        pathname: "",
        description: "",
        photo: "",
        rating: "",
        pricerange: "",
        suitableFor: ""
    },
]
const packages_new = [
    {
        id: 0,
        name: "Andhra Pradesh Business Tour",
        pathname: "andhra-pradesh-business-tour",
        theme: "Pilgrimage/Honeymoon/Business/Family/Group",
        themeId: 3,
        description: "lorem ipsum dolor sit amet",
        photo: "urlgoeshere.com",
        duration: "5 Nights / 6 Days",
        destination: "Andhra Pradesh",
        rating: "4.5",
        price: 9999,
        itinerary: ``
    },

]

async function GetNavigation() {
    return nav_menu
}
async function GetDestinations() {
    return destinations_new
}
async function GetPackages() {
    return packages_new
}

const DataService = {
    GetNavigation,
    GetDestinations,
    GetPackages
}

export default DataService;