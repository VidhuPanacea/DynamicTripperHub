const internationalPackages = [{
    id: 10,
    name: "Nainital Tour Package",
    duration: "2 Nights - 3 Days",
    destinations: "Nainital",
    category: "Family",
    price: "On Request",
    image: "https://images.unsplash.com/photo-1601622256416-d7f757f99eb2?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1974&q=80",
    description: "",
    suggested: [{}]
}, {
    id: 2,
    name: "Nainital Ranikhet Tour",
    duration: "4 Nights / 5 Days",
    destinations: "Nainital, Ranikhet",
    category: "Honeymoon",
    price: "On Request",
    image: "https://images.unsplash.com/photo-1608942025318-1191eeade556?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2055&q=80",
    description: "",
    suggested: [{}]
},
{
    id: 3,
    name: "Mussorie Rishikesh Tour",
    duration: "3 Nights / 4 Days",
    destinations: "Mussorie, Rishikesh",
    category: "Adventure",
    price: "On Request",
    image: "https://images.unsplash.com/photo-1603867106100-0d2039fc8757?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2081&q=80",
    description: "",
    suggested: [{}]
}, {
    id: 4,
    name: "Mussorie Honeymoon Tour",
    duration: "4 Nights / 5 Days",
    destinations: "Mussorie",
    category: "Honeymoon",
    price: "On Request",
    image: "https://images.unsplash.com/photo-1490031781863-29b9bdbea131?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2071&q=80",
    description: "",
    suggested: [{}]
}, {
    id: 5,
    name: "Nainital Corbett Mussorie Tour",
    duration: "4 Nights / 5 Days",
    destinations: "Nainital, Corbett",
    category: "Wildlife",
    price: "On Request",
    image: "https://images.unsplash.com/photo-1669021820355-7186908380d9?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2070&q=80",
    description: "",
    suggested: [{}]
}, {
    id: 6,
    name: "Haridwar and Rishikesh Tour",
    duration: "2 Nights / 3 Days",
    destinations: "Haridwar, Rishikesh",
    category: "Adventure",
    price: "On Request",
    image: "https://images.unsplash.com/photo-1511754863001-18d44abd0a93?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1470&q=80",
    description: "",
    suggested: [{}]
}, {
    id: 7,
    name: "Delhi Landsdowne Weekend Tour",
    duration: "2 Nights / 3 Days",
    destinations: "Delhi, Lansdowne",
    category: "Trekking & Hiking",
    price: "On Request",
    price: "On Request",
    image: "https://images.unsplash.com/photo-1596712394419-8f30d4d12f70?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1916&q=80",
    description: "",
    suggested: [{}]
},
{
    id: 8,
    name: "Auli Skiing Tour",
    duration: "10 Nights / 11 Days",
    destinations: "Auli",
    category: "Adventure",
    price: "On Request",
    image: "https://images.unsplash.com/photo-1605540436563-5bca919ae766?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1469&q=80",
    description: "",
    suggested: [{}]
},
{
    id: 37,
    name: "Delhi Corbett Weekend Tour",
    duration: "2 Nights / 3 Days",
    destinations: "Jim Corbette",
    category: "Wildlife",
    price: "On Request",
    image: "https://images.unsplash.com/photo-1588970698009-f8ea62f1857e?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2071&q=80",
    description: "",
    suggested: [{}]
}]



const domesticPackages = [{}]


const packages = [{
    id: 1,
    name: "Nainital Tour Package",
    path: "nainital-tour-package",
    destination: "Himachal Pradesh",
    theme: "Family",
    category: "Family",
    coverImage: "",
    description: "",
    inclusions: [{ name: "Hotels" }, { name: "Transfers" }, { name: "Sightseeing" }],
},
{
    id: 2,
    name: "Shimla Manali Volvo",
    path: "shimla-manali-volvo",
    destination: "Himachal Pradesh",
    theme: "Group",
    category: "Hiking and Trekking",
    coverImage: "",
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
    coverImage: "",
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
    coverImage: "",
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
    coverImage: "",
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
    coverImage: "",
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
    coverImage: "",
    description: "Auli ajao skiing karlo maje karo",
    inclusions: [{ name: "Hotels" }, { name: "Transfers" }, { name: "Sightseeing" }],
},


]
export { internationalPackages, domesticPackages, packages };

