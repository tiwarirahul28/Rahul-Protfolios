import { v4 as uuidv4 } from "uuid";
import AceHaverSack from '../images/acehaversack.png';
import CarDekho from '../images/cardekho.png';
import EasyToMake from '../images/easytomake.png';
import resort from '../images/resort-1.png'
import Tesla from '../images/tesla-clone.png'

const projects = [
    {
        id: uuidv4(),
        name: "Resort",
        desc: "A website is the first place where Guests look for information about the hotel. The information is available at all times and thus, it is important that they are presented in an attractive way and managed appropriately.",
        img: resort,
    },
    {
        id: uuidv4(),
        name: "Tesla",
        desc: "The rebranded teslamotors.com brings the Tesla experience online. Tesla is redefining the car buying experience through teslamotors.com with intuitive pages that lead users through Roadster innovations.",
        img: Tesla,
    },
    {
        id: uuidv4(),
        name: "AceHaverSack",
        desc: "Buying items on an e-commerce website is easy, you see something you like, you select a size, color, etc., and then you add it to the Cart. I mean Bag. No, Basket.",
        img: AceHaverSack,
    },
    {
        id: uuidv4(),
        name: "Car Dekho",
        desc: "Welcome to Guaranteed Automotive and Transmission Service, your head pick for master vehicle fix close and around Lafayette, IN.",
        img: CarDekho,
    },
    {
        id: uuidv4(),
        name: "Easy To Make",
        desc: "easytomake.com features the largest collection of professionally-tested recipes online from food experts at the magazines and cookbooks you love and trust--including Cooking Light.",
        img: EasyToMake,
    },
];

export default projects;