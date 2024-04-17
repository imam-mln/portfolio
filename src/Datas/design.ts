import acodemia1 from '../assets/Design/acodemia/acodemia-1.jpg'
import acodemia2 from '../assets/Design/acodemia/acodemia-2.jpg'
import acodemia3 from '../assets/Design/acodemia/acodemia-3.jpg'
import acodemia4 from '../assets/Design/acodemia/acodemia-4.jpg'
import planetPisang1 from '../assets/Design/planet-pisang/planet-pisang-1.jpg'
import planetPisang2 from '../assets/Design/planet-pisang/planet-pisang-2.jpg'
import planetPisang3 from '../assets/Design/planet-pisang/planet-pisang-3.jpg'
import uwksSociology1 from '../assets/Design/uwks-sociology/uwks-sociology-1.jpg'
import uwksSociology2 from '../assets/Design/uwks-sociology/uwks-sociology-2.jpg'
import uwksSociology3 from '../assets/Design/uwks-sociology/uwks-sociology-3.jpg'
import uwksSociology4 from '../assets/Design/uwks-sociology/uwks-sociology-4.jpg'
import uwksSociology5 from '../assets/Design/uwks-sociology/uwks-sociology-5.jpg'
import uwksSociology6 from '../assets/Design/uwks-sociology/uwks-sociology-6.jpg'
import uwksSociology7 from '../assets/Design/uwks-sociology/uwks-sociology-7.jpg'
import uwksSociology8 from '../assets/Design/uwks-sociology/uwks-sociology-8.jpg'
import uwksSociology9 from '../assets/Design/uwks-sociology/uwks-sociology-9.jpg'
import superOoze1 from '../assets/Design/super-ooze/super-ooze-1.jpg'
import superOoze2 from '../assets/Design/super-ooze/super-ooze-2.jpg'
import superOoze3 from '../assets/Design/super-ooze/super-ooze-3.jpg'

interface Data {
    title: string;
    desc: string;
    img: string[];
    link: string; 
}

export const Design:Data[] = [
    {
        title: "Acodemia",
        desc: 'Acodemia is taken from "Academia" a company or startup that focuses on training and developing competencies in programming-based digital technology.',
        img: [
            acodemia1,
            acodemia2,
            acodemia3,
            acodemia4
        ],
        link: "https://www.instagram.com/p/C3wxEBcrP33/?utm_source=ig_web_copy_link&igsh=MzRlODBiNWFlZA==",
    },
    {
        title: "Planet Pisang",
        desc: "Planet Pisang (Banana Planet) is trademark that focuses on banana food processing with a main variant of chocolate flavor.",
        img: [
          planetPisang1,
          planetPisang2,
          planetPisang3  
        ],
        link: "https://www.instagram.com/p/C3wvP5RLqAn/?utm_source=ig_web_copy_link&igsh=MzRlODBiNWFlZA==",
    },
    {
        title: "UWKS Sociology",
        desc: "Logo for the UWKS Sociology Instagram profile of the Faculty of Social and Political Science",
        img: [
            uwksSociology1,
            uwksSociology2,
            uwksSociology3,
            uwksSociology4,
            uwksSociology5,
            uwksSociology6,
            uwksSociology7,
            uwksSociology8,
            uwksSociology9
        ],
        link: "https://www.instagram.com/p/CueDTz_xPlz/?utm_source=ig_web_copy_link&igsh=MzRlODBiNWFlZA==",
    },
    {
        title: "Super Ooze",
        desc: "Water Superhero Mascot Design for a competition organized by PDAM Surya Sembada",
        img: [
            superOoze1,
            superOoze2,
            superOoze3
        ],
        link: "https://www.instagram.com/p/CcsKQp-P6Sg/?utm_source=ig_web_copy_link&igsh=MzRlODBiNWFlZA==",
    },

]
