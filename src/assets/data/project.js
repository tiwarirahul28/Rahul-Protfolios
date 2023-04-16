import { v4 as uuidv4 } from "uuid";
import AceHaverSack from '../images/acehaversack.png';
import CarDekho from '../images/cardekho.png';
import EasyToMake from '../images/easytomake.png';
import resort from '../images/resort-1.png'
import Tesla from '../images/tesla-clone.png'
import EduFord from '../images/edufordcollege.png'
import LanguageLab from '../images/languagelab.png'
import Marvelsh from '../images/marvelsh.png'
import futuretech from '../images/the-future-tech.png'
import Fithit from '../images/fithit.png'
import clone from '../images/clone-codepen.png'
import movieflick from '../images/movieflick.png'
import portfolio from '../images/portfolio-website.png'
import sack from '../images/sack.png'
import skill from '../images/skill-learn.png'



const projects = [
    {
        id: uuidv4(),
        name: "Language Lab",
        desc: "“If You Want To Teach People A New Way Of Thinking, Don’t Bother Trying To Teach Them. Instead, Give Them A Tool, The Use Of Which Will Lead To New Ways Of Thinking.”",
        img: LanguageLab,
    },
    {
        id: uuidv4(),
        name: "Fit Hit",
        desc: "Getting Yourself To The Gym May Feel Much More Overwhelming Than Actually Working Towards Your Goal. To Lose Weight Or Increase Fitness Levels, It's Time To Try Something Different. GYMGUYZ Can Help You Achieve The Results You Want.",
        img: Fithit,
    },
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
    {
        id: uuidv4(),
        name: "Edu Ford College",
        desc: "EduFord Website is a dummy university website",
        img: EduFord,
    },
    {
        id: uuidv4(),
        name: "Marvelsh",
        desc: "Marvelsh is a website where you will find your favourite marvel superhero and some infomation about superhero.",
        img: Marvelsh,
    },
    {
        id: uuidv4(),
        name: "The Future Tech",
        desc: "The Future Tech is a tech fest website held in Khar Education Society's College of Commerce and Economics, Mumbai.",
        img: futuretech,
    },
    {
        id: uuidv4(),
        name: "Codepen Clone",
        desc: "Codepen Clone",
        img: clone,
    },
    {
        id: uuidv4(),
        name: "Movie Flick",
        desc: "Movie Flick is a website where you can find your favourite movie and some infomation about movie.",
        img: movieflick,
    },
    {
        id: uuidv4(),
        name: "Protfolio Website",
        desc: "This is my portfolio website",
        img: portfolio,
    },
    {
        id: uuidv4(),
        name: "Sack e-commerce website",
        desc: "Sack e-commerce website",
        img: sack,
    },
    {
        id: uuidv4(),
        name: "Skill Learn",
        desc: "Skill Learn is a website where you can learn new skills",
        img: skill,
    },
    // {
    //     id: uuidv4(),
    //     name: "Covide-19",
    //     desc: "Covide-19 Dummy website ",
    //     img: Covide,
    // },
];

export default projects;