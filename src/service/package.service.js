
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
        path:"himachal-pradesh",
        coverImage: "https://media.giphy.com/media/orUC71iuzC3rtVWyPn/giphy.gif",
    },
    {
        id: 2,
        name: "Uttarakhand",
        path:"uttarkahnd",
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

const international = [
    {
        id: 1,
        name: "Zurich",
        path:"zurich",
        coverImage: "https://images.unsplash.com/photo-1620562423895-ad4924643d43?auto=format&fit=crop&q=80&w=1932&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
    },
    {
        id: 2,
        name: "Malaysia",
        path:"malaysia",
        coverImage: "https://images.unsplash.com/photo-1564506414752-a73fbe0c6b00?auto=format&fit=crop&q=80&w=1932&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
    },
    {
        id: 3,
        name: "Indonesia",
        path:"indonesia",
        coverImage: "https://images.unsplash.com/photo-1513415756790-2ac1db1297d0?auto=format&fit=crop&q=80&w=1974&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
    },
    {
        id: 4,
        name: "Thailand",
        path:"thailand",
        coverImage: "https://images.unsplash.com/photo-1490077476659-095159692ab5?auto=format&fit=crop&q=80&w=2051&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
    },
    {
        id: 5,
        name: "Dubai",
        path:"dubai",
        coverImage: "https://images.unsplash.com/flagged/photo-1559717201-fbb671ff56b7?auto=format&fit=crop&q=80&w=2071&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
    },
    {
        id: 6,
        name: "Singapore",
        path:"singapore",
        coverImage: "https://images.unsplash.com/photo-1565967511849-76a60a516170?auto=format&fit=crop&q=80&w=2071&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
    },
]
export { packages,domestic, international };

