const listings = [{
    id: 1,
    name: "Nainital Tour Package",
    description: "heelo my name is Vidhu and I am not very good at coding but still I try and succeeed almost everyday.",
    path: "nainital-tour-package",
    coverimage: "https://images.unsplash.com/photo-1596712394419-8f30d4d12f70?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1916&q=80",
    destinations: "Nainital , Haridwar",
    inclusions: ["4 Hotels", "Transfers"],
    price: "55000"
},
{
    id: 2,
    name: "Haridwar Tour Package",
    description: "heelo my name is Vidhu and I am not very good at coding but still I try and succeeed almost everyday.",
    path: "Haridwar-tour-package",
    coverimage: "https://images.unsplash.com/photo-1596712394419-8f30d4d12f70?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1916&q=80",
    destinations: "Nainital , Haridwar",
    inclusions: [{ name: "4 Hotels" }, { name: "Transfers" }],
    price: "55000"
}]


export default listings;


// Service that fetches multiple packages of a particular destination.