import axios, * as others from 'axios';
import BaseService from './base.service'

const API_URL = BaseService.API_URL;

const client = axios.create({
    baseURL: API_URL
});


async function GetDestinations() {
    const response = await client.get(`Destination/GetDestination`);
    console.log(response.data)
    return response.data;
}
async function GetDestinationByName(name) {
    const response = await client.get(`Destination/GetDestinationByName?name=${name}`);
    console.log(response.data)
    return response.data;
}


const DestinationService = {
    GetDestinations,
    GetDestinationByName
}


export default DestinationService;






const packages = [{
    id: 1,
    name: "Nainital Tour Package",
    path: "nainital-tour-package",
    destination: "Himachal Pradesh",
    theme: "Family",
    category: "Family",
    coverImage: "https://images.unsplash.com/photo-1601622256416-d7f757f99eb2?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1974&q=80",
    description: "Hello, welcome to Nainital",
    inclusions: [{ name: "Hotels" }, { name: "Transfers" }, { name: "Sightseeing" }],
},
{
    id: 2,
    name: "Shimla Manali Volvo",
    path: "shimla-manali-volvo",
    destination: "Himachal Pradesh",
    theme: "Group",
    category: "Hiking and Trekking",
    coverImage: "https://images.unsplash.com/photo-1588970698009-f8ea62f1857e?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2071&q=80",
    description: "Volvo Tour at best Rates",
    inclusions: [{ name: "Hotels" }, { name: "Transfers" }, { name: "Sightseeing" }],
},
{
    id: 3,
    name: "Rishikesh Rafting Tour",
    path: "rishikesh-rafting-tour",
    destination: "Uttarakhand",
    theme: "Group",
    category: "Adventure",
    coverImage: "https://images.unsplash.com/photo-1588970698009-f8ea62f1857e?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2071&q=80",
    description: "Welcome to Rishikesh",
    inclusions: [{ name: "Hotels" }, { name: "Transfers" }, { name: "Sightseeing" }],
},
{
    id: 4,
    name: "Neelkanth Yatra",
    path: "neelkanth-yatra",
    destination: "Uttarakhand",
    theme: "Group",
    category: "Trekking and Hiking",
    coverImage: "https://images.unsplash.com/photo-1588970698009-f8ea62f1857e?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2071&q=80",
    description: "Jai Bholenath Ki",
    inclusions: [{ name: "Hotels" }, { name: "Transfers" }, { name: "Sightseeing" }],
},
{
    id: 5,
    name: "Jaipur Prestige",
    path: "jaipur-prestige",
    destination: "Rajasthan",
    theme: "Family",
    category: "Sightseeing",
    coverImage: "https://images.unsplash.com/photo-1588970698009-f8ea62f1857e?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2071&q=80",
    description: "Jaipur ajao Hawa Mahal Dekhlo",
    inclusions: [{ name: "Hotels" }, { name: "Transfers" }, { name: "Sightseeing" }],
},
{
    id: 6,
    name: "Mumbai Meltdown",
    path: "mumbai-meltdown",
    destination: "Mumbai",
    theme: "Group",
    category: "Sightseeing",
    coverImage: "https://images.unsplash.com/photo-1588970698009-f8ea62f1857e?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2071&q=80",
    description: "As the name suggests, the package is dope...",
    inclusions: [{ name: "Hotels" }, { name: "Transfers" }, { name: "Sightseeing" }],
},
{
    id: 7,
    name: "Auli Skiing Tour",
    path: "auli-skiing-tour",
    destination: "Uttarakhand",
    theme: "Group",
    category: "Adventure",
    coverImage: "https://images.unsplash.com/photo-1605540436563-5bca919ae766?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1469&q=80",
    description: "Auli ajao skiing karlo maje karo",
    inclusions: [{ name: "Hotels" }, { name: "Transfers" }, { name: "Sightseeing" }],
},
]

const domestic = [
    {
        id: 1,
        name: "Himachal Pradesh",
        path: "himachal-pradesh",
        coverImage: "https://media.giphy.com/media/orUC71iuzC3rtVWyPn/giphy.gif",
    },
    {
        id: 2,
        name: "Uttarakhand",
        path: "uttarkahnd",
        coverImage: "https://images.unsplash.com/photo-1547378809-db8f9515a63b?auto=format&fit=crop&q=80&w=2070&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
    },
    {
        id: 3,
        name: "Rajasthan",
        path: "rajasthan",
        coverImage: "https://images.unsplash.com/photo-1631867675167-90a456a90863?auto=format&fit=crop&q=80&w=2079&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
    },
    {
        id: 4,
        name: "Mumbai",
        path: "mumbai",
        coverImage: "https://images.unsplash.com/photo-1577717903315-1691ae25ab3f?auto=format&fit=crop&q=80&w=2070&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
    },
    {
        id: 5,
        name: "North East",
        path: "north-east",
        coverImage: "https://images.unsplash.com/photo-1455157823797-3019317cbcf0?auto=format&fit=crop&q=80&w=2070&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
    },
    {
        id: 6,
        name: "Jammu-Kashmir",
        path: "jammu-kashmir",
        coverImage: "https://images.unsplash.com/photo-1566837497312-7be7830ae9b1?auto=format&fit=crop&q=80&w=1974&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
    },
]

export { packages, domestic, };



const api_destinations = [{

    "id": 0,
    "categoryId": 0,
    "themeId": 0,
    "name": "Zurich",
    "type": "International",
    "title": "Swiss German",
    "description": "Zurich's old town impresses with its historic buildings, picturesque alleyways and, of course, Zurich's landmark, the Grossmünster church. The view from the Karlsturm tower is simply breathtaking! The Grossmünster is just a stone's throw from the Fraumünster church with its world-famous Chagall windows. Explore the packages of the esteemed Zurich with the splendid planning of Tripper Hub's experts who will make the trip an unforgettable experience.",
    "photo": "https://images.unsplash.com/photo-1620562423895-ad4924643d43?auto=format&fit=crop&q=80&w=1932&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
    "duration": "5-7 Days",
    "rating": 4.7,
    "price": 21999,
    "sortOrder": 0,
    "isDeleted": false
},
{
    "id": 0,
    "categoryId": 0,
    "themeId": 0,
    "name": "Malaysia",
    "type": "International",
    "title": "Truly Asia",
    "description": "A potpourri of all things Asian, Malaysia is a country in Southeast Asia. An intriguing blend of diverse wildlife, idyllic islands, magnanimous mountains, rainforests, and rich culinary landscape makes it one of the most visited tourist places in Asia.",
    "photo": "https://images.unsplash.com/photo-1620562423895-ad4924643d43?auto=format&fit=crop&q=80&w=1932&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
    "duration": "3-4 Days",
    "rating": 4.8,
    "price": 15999,
    "sortOrder": 0,
    "isDeleted": false
},
{
    "id": 0,
    "categoryId": 0,
    "themeId": 0,
    "name": "Indonesia",
    "type": "International",
    "title": "Emerald of the Equator",
    "description": "Indonesia is a kaleidoscope of taste, sight, sound, and smells bottled up in the world's largest archipelago. Spread out over a mind-boggling 17,000 islands, the country offers a vast melange of experiences begging to be sampled by visitors from across the world.",
    "photo": "https://images.unsplash.com/photo-1513415756790-2ac1db1297d0?auto=format&fit=crop&q=80&w=1974&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
    "duration": "5-6 Days",
    "rating": 4.8,
    "price": 17999,
    "sortOrder": 0,
    "isDeleted": false
},
{
    "id": 0,
    "categoryId": 0,
    "themeId": 0,
    "name": "Thailand",
    "type": "International",
    "title": "The Land of Smiles",
    "description": "Thailand tourism has everything a tourist could ask for, from an international holiday destination including, Gren-blue clean beaches, coral islands, mountains, shopping markets, Hindu temples, monasteries and never ending nightlife.",
    "photo": "https://images.unsplash.com/photo-1490077476659-095159692ab5?auto=format&fit=crop&q=80&w=2051&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
    "duration": "5-6 Days",
    "rating": 4.8,
    "price": 17999,
    "sortOrder": 0,
    "isDeleted": false
},
{
    "id": 0,
    "categoryId": 0,
    "themeId": 0,
    "name": "Dubai",
    "type": "International",
    "title": "The City of Gold",
    "description": "Dubai has grown to be one of the most recognizable destinations worldwide with its lavish architecture, incredible skylines, and giant shopping malls. It is a city that embodies the epitome of modernity and luxury, an oasis of opulence amidst the desert landscape.",
    "photo": "https://images.unsplash.com/flagged/photo-1559717201-fbb671ff56b7?auto=format&fit=crop&q=80&w=2071&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
    "duration": "10-12 Days",
    "rating": 4.7,
    "price": 29999,
    "sortOrder": 0,
    "isDeleted": false
},
{
    "id": 0,
    "categoryId": 0,
    "themeId": 0,
    "name": "Singapore",
    "type": "International",
    "title": "Lion City",
    "description": "This fantastic destination is one of the most beautiful man-made wonders that you cannot give a miss. The exquisitely beautiful attractions like Sentosa Island, Gardens by the Bay, Universal Studios and Night Safari are the pride of Singapore tourism.",
    "photo": "https://images.unsplash.com/photo-1565967511849-76a60a516170?auto=format&fit=crop&q=80&w=2071&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
    "duration": "5-6 Days",
    "rating": 4.9,
    "price": 14999,
    "sortOrder": 0,
    "isDeleted": false
},
{
    "id": 0,
    "categoryId": 0,
    "themeId": 0,
    "name": "HimachalPradesh",
    "type": "Domestic",
    "title": "Land of Gods",
    "description": "These are home to rare and endangered animals. The most famous of these is Great Himalayan National Park, a UNESCO World Heritage Site. You can spot high altitude Himalayan animals like Himalayan Tahr, Himalayan Brown Bear, blue sheep and snow leopard.",
    "photo": "https://images.unsplash.com/photo-1605649487212-47bdab064df7?q=80&w=2070&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
    "duration": "2-3 Days",
    "rating": 4.2,
    "price": 4599,
    "sortOrder": 0,
    "isDeleted": false
},
{
    "id": 0,
    "categoryId": 0,
    "themeId": 0,
    "name": "Uttarakhand",
    "type": "Domestic",
    "title": "Dev Bhoomi",
    "description": "A land of myths and mountains, Devbhoomi Uttarakhand, is one of the most beautiful states of India. Snow-capped Himalayan peaks, serpentine rivers, revered temples, quaint villages, vibrant culture, and World Heritage Sites, Uttarakhand's sheer natural beauty and diversity beckon travelers from across the world.",
    "photo": "https://images.unsplash.com/photo-1547378809-db8f9515a63b?auto=format&fit=crop&q=80&w=2070&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
    "duration": "4-5 Days",
    "rating": 4.6,
    "price": 5599,
    "sortOrder": 0,
    "isDeleted": false
},
{
    "id": 0,
    "categoryId": 0,
    "themeId": 0,
    "name": "Rajasthan",
    "type": "Domestic",
    "title": "",
    "description": "Rajasthan is known for its historical hill forts & palaces, it is claimed as the best place for tourism-related to palaces. Umaid Bhawan Palace: It is the largest Royal Palace in Rajasthan. It is also one of the largest private residences in the world.",
    "photo": "https://images.unsplash.com/photo-1631867675167-90a456a90863?auto=format&fit=crop&q=80&w=2079&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
    "duration": "1-2 Days",
    "rating": 4.6,
    "price": 3599,
    "sortOrder": 0,
    "isDeleted": false
},
{
    "id": 0,
    "categoryId": 0,
    "themeId": 0,
    "name": "Mumbai",
    "type": "Domestic",
    "title": "Gateway of India",
    "description": "Mumbai (also known as Bombay, the official name until 1995) is the capital city of the Indian state of Maharashtra. Mumbai lies on the Konkan coast on the west coast of India and has a deep natural harbour. In 2008, Mumbai was named an alpha world city.",
    "photo": "https://images.unsplash.com/photo-1577717903315-1691ae25ab3f?auto=format&fit=crop&q=80&w=2070&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
    "duration": "2-3 Days",
    "rating": 4.8,
    "price": 7999,
    "sortOrder": 0,
    "isDeleted": false
},
{
    "id": 0,
    "categoryId": 0,
    "themeId": 0,
    "name": "Jammu-Kashmir",
    "type": "Domestic",
    "title": "Switzerland of India. Heaven on Earth",
    "description": "The valleys of Jammu and Kashmir include the Kashmir Valley, Chenab Valley, Sindh Valley, and Lidder Valley. Srinagar, with its renowned Dal Lake and Mughal Gardens, Gulmarg, Pahalgam, Bhaderwah, Patnitop, and Jammu are all popular tourist destinations in Jammu and Kashmir.",
    "photo": "https://images.unsplash.com/photo-1566837497312-7be7830ae9b1?auto=format&fit=crop&q=80&w=1974&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
    "duration": "5-6 Days",
    "rating": 4.8,
    "price": 12999,
    "sortOrder": 0,
    "isDeleted": false
},

]
