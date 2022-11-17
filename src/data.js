let shopItemsData = [
    {
        title: "Ok Computer",
        artist: "Radiohead",
        price: 29.98,
        type: "CD",
        id: "1",
        img: "https://m.media-amazon.com/images/I/51Nc40BMGnL.jpg"
    },
    {
        title: "Ok Computer",
        artist: "Radiohead",
        price: 34.98,
        type: "Vinyl",
        id: "2",
        img: "https://m.media-amazon.com/images/I/51Nc40BMGnL.jpg"
    },
    {
        title: "Kid A",
        artist: "Radiohead",
        price: 22.98,
        type: "CD",
        id: "3",
        img:"https://m.media-amazon.com/images/I/71o2-DW9KrL._SX355_.jpg"
    },
    {
        title: "In Rainbows",
        artist: "Radiohead",
        price: 14.98,
        type: "CD",
        id: "4",
        img:"https://m.media-amazon.com/images/I/A1MwaIeBpwL._SL1500_.jpg"
    },
    {
        title: "In Rainbows",
        artist: "Radiohead",
        price: 18.98,
        type: "Vinyl",
        id: "5",
        img:"https://m.media-amazon.com/images/I/A1MwaIeBpwL._SL1500_.jpg"
    },
    {
        title: "Origin of Symmetry",
        artist: "Muse",
        price: 11.99,
        type: "CD",
        id: "6",
        img:"https://m.media-amazon.com/images/I/51u+nJIOD3L._SY300_.jpg"
    },
    {
        title: "Origin of Symmetry",
        artist: "Muse",
        price: 17.99,
        type: "Vinyl",
        id: "7",
        img:"https://m.media-amazon.com/images/I/51u+nJIOD3L._SY300_.jpg"
    },
    {
        title: "The Resistance",
        artist: "Muse",
        price: 11.99,
        type: "CD",
        id: "8",
        img:"https://m.media-amazon.com/images/I/91ZwmJUvFDL._SX425_.jpg"
    },
    {
        title: "Drones",
        artist: "Muse",
        price: 8.95,
        type: "CD",
        id: "9",
        img:"https://m.media-amazon.com/images/I/81BqtUgg+gL._SY355_.jpg"
    },
    {
        title: "Led Zeppelin I",
        artist: "Led Zeppelin",
        price: 10.97,
        type: "CD",
        id: "10",
        img:"https://m.media-amazon.com/images/I/71bUDfPK9aL._SL1425_.jpg"
    },
    {
        title: "Led Zeppelin I",
        artist: "Led Zeppelin",
        price: 15.97,
        type: "Vinyl",
        id: "11",
        img:"https://m.media-amazon.com/images/I/71bUDfPK9aL._SL1425_.jpg"
    },
    {
        title: "Led Zeppelin III",
        artist: "Led Zeppelin",
        price: 16.98,
        type: "CD",
        id: "12",
        img:"https://m.media-amazon.com/images/I/71whCYj9mtL._SL1200_.jpg"
    },
    {
        title: "Led Zeppelin IV",
        artist: "Led Zeppelin",
        price: 14.97,
        type: "CD",
        id: "13",
        img:"https://m.media-amazon.com/images/I/81evsr3Oq0L._SL1425_.jpg"
    },
    {
        title: "Led Zeppelin IV",
        artist: "Led Zeppelin",
        price: 19.97,
        type: "Vinyl",
        id: "14",
        img:"https://m.media-amazon.com/images/I/81evsr3Oq0L._SL1425_.jpg"
    },
    {
        title: "Burn",
        artist: "Deep Purple",
        price: 10.98,
        type: "CD",
        id: "15",
        img:"https://m.media-amazon.com/images/I/41OV7HBOu-L.jpg"
    },
    {
        title: "Burn",
        artist: "Deep Purple",
        price: 17.98,
        type: "Vinyl",
        id: "16",
        img:"https://m.media-amazon.com/images/I/41OV7HBOu-L.jpg"
    },
    {
        title: "Machine Head",
        artist: "Deep Purple",
        price: 12.97,
        type: "CD",
        id: "17",
        img:"https://m.media-amazon.com/images/I/71fU7JDo9DL._SL1000_.jpg"
    },
    {
        title: "Perfect Strangers",
        artist: "Deep Purple",
        price: 10.98,
        type: "CD",
        id: "18",
        img:"https://m.media-amazon.com/images/I/61br3DQCWIL._SL1400_.jpg"
    },
    {
        title: "Perfect Strangers",
        artist: "Deep Purple",
        price: 17.98,
        type: "Vinyl",
        id: "19",
        img:"https://m.media-amazon.com/images/I/61br3DQCWIL._SL1400_.jpg"
    },
    {
        title: "Dire Straits",
        artist: "Dire Straits",
        price: 13.94,
        type: "CD",
        id: "20",
        img:"https://m.media-amazon.com/images/I/31HvTYcCwxL.jpg"
    },
    {
        title: "Making Movies",
        artist: "Dire Straits",
        price: 16.98,
        type: "CD",
        id: "21",
        img:"https://m.media-amazon.com/images/I/21nQDOVfL6L.jpg"
    },
    {
        title: "Making Movies",
        artist: "Dire Straits",
        price: 24.98,
        type: "Vinyl",
        id: "22",
        img:"https://m.media-amazon.com/images/I/21nQDOVfL6L.jpg"
    },
    {
        title: "Brothers In Arms",
        artist: "Dire Straits",
        price: 10.97,
        type: "CD",
        id: "23",
        img:"https://m.media-amazon.com/images/I/41i8bdAYf6L.jpg"
    },
    {
        title: "Brothers In Arms",
        artist: "Dire Straits",
        price: 19.97,
        type: "Vinyl",
        id: "24",
        img:"https://m.media-amazon.com/images/I/41i8bdAYf6L.jpg"
    },
    {
        title: "A Night at the Opera",
        artist: "Queen",
        price: 17.97,
        type: "CD",
        id: "25",
        img:"https://m.media-amazon.com/images/I/71zsO-uc34L._SY355_.jpg"
    },
    {
        title: "Sheer Heart Attack",
        artist: "Queen",
        price: 8.97,
        type: "CD",
        id: "26",
        img:"https://m.media-amazon.com/images/I/51YGNtO51gL._SX355_.jpg"
    },
    {
        title: "News of the World",
        artist: "Queen",
        price: 11.97,
        type: "CD",
        id: "27",
        img:"https://m.media-amazon.com/images/I/51ObUEfxfCL.jpg"
    },
    {
        title: "News of the World",
        artist: "Queen",
        price: 18.97,
        type: "Vinyl",
        id: "28",
        img:"https://m.media-amazon.com/images/I/51ObUEfxfCL.jpg"
    },
    {
        title: "Dark Side of the Moon",
        artist: "Pink Floyd",
        price: 10.79,
        type: "CD",
        id: "29",
        img:"https://m.media-amazon.com/images/I/51UtWpxbNYL._SY355_.jpg"
    },
    {
        title: "Dark Side of the Moon",
        artist: "Pink Floyd",
        price: 19.79,
        type: "Vinyl",
        id: "30",
        img:"https://m.media-amazon.com/images/I/51UtWpxbNYL._SY355_.jpg"
    },
    {
        title: "Animals",
        artist: "Pink Floyd",
        price: 22.39,
        type: "CD",
        id: "31",
        img:"https://m.media-amazon.com/images/I/918SLRbvSfL._SY355_.jpg"
    },
    {
        title: "The Wall",
        artist: "Pink Floyd",
        price: 20.55,
        type: "CD",
        id: "32",
        img:"https://m.media-amazon.com/images/I/71Okj3gDOxL._SY355_.jpg"
    },
    {
        title: "The Wall",
        artist: "Pink Floyd",
        price: 28.55,
        type: "Vinyl",
        id: "33",
        img:"https://m.media-amazon.com/images/I/71Okj3gDOxL._SY355_.jpg"
    },
    {
        title: "The Beatles",
        artist: "The Beatles",
        price: 18.99,
        type: "CD",
        id: "34",
        img:"https://m.media-amazon.com/images/I/21lIoN-uPML._SX355_.jpg"
    },
    {
        title: "The Beatles",
        artist: "The Beatles",
        price: 25.99,
        type: "Vinyl",
        id: "35",
        img:"https://m.media-amazon.com/images/I/21lIoN-uPML._SX355_.jpg"
    },
    {
        title: "Abbey Road",
        artist: "The Beatles",
        price: 17.61,
        type: "CD",
        id: "36",
        img:"https://m.media-amazon.com/images/I/818eF5LoleS._SY355_.jpg"
    },
    {
        title: "Abbey Road",
        artist: "The Beatles",
        price: 24.61,
        type: "Vinyl",
        id: "37",
        img:"https://m.media-amazon.com/images/I/818eF5LoleS._SY355_.jpg"
    },
    {
        title: "Sgt. Pepper's Lonely Hearts Club Band",
        artist: "The Beatles",
        price: 16.45,
        type: "CD",
        id: "38",
        img:"https://m.media-amazon.com/images/I/61VyJLPSJvL.jpg"
    },
    {
        title: "Let It Bleed",
        artist: "The Rolling Stones",
        price: 27.97,
        type: "Vinyl",
        id: "39",
        img:"https://m.media-amazon.com/images/I/91UMety4b9L._SL1500_.jpg"
    },
    {
        title: "Exile on Main Street",
        artist: "The Rolling Stones",
        price: 32.49,
        type: "Vinyl",
        id: "40",
        img:"https://m.media-amazon.com/images/I/61Zvc4NvgtL.jpg"
    },
    {
        title: "Thriller",
        artist: "Michael Jackson",
        price: 16.83,
        type: "Vinyl",
        id: "41",
        img:"https://m.media-amazon.com/images/I/71tF9KhhrmL._SL1500_.jpg"
    },
    {
        title: "Bad",
        artist: "Michael Jackson",
        price: 20.99,
        type: "Vinyl",
        id: "42",
        img:"https://m.media-amazon.com/images/I/719gURl-EaL._SL1500_.jpg"
    },
    {
        title: "90125",
        artist: "Yes",
        price: 37.49,
        type: "Vinyl",
        id: "43",
        img:"https://m.media-amazon.com/images/I/31gaQao126L.jpg"
    },
    {
        title: "Fragile",
        artist: "Yes",
        price: 45.49,
        type: "Vinyl",
        id: "44",
        img:"https://m.media-amazon.com/images/I/818muCDUYRL._SL1500_.jpg"
    },
    {
        title: "A Farewell to Kings",
        artist: "Rush",
        price: 85.59,
        type: "Vinyl",
        id: "45",
        img:"https://m.media-amazon.com/images/I/51uEWNVMdlL.jpg"
    },
    {
        title: "2112",
        artist: "Rush",
        price: 52.98,
        type: "Vinyl",
        id: "46",
        img:"https://m.media-amazon.com/images/I/41DQ1kQr1tL.jpg"
    },
    {
        title: "Let There Be Rock",
        artist: "AC/DC",
        price: 23.25,
        type: "Vinyl",
        id: "47",
        img:"https://m.media-amazon.com/images/I/81u8m6-z4RL._SL1500_.jpg"
    },
    {
        title: "Back in Black",
        artist: "AC/DC",
        price: 22.99,
        type: "Vinyl",
        id: "48",
        img:"https://m.media-amazon.com/images/I/41J0k2zW9wL._SL1500_.jpg"
    }
];