import { IconType } from "react-icons";
import { TbBrowser } from "react-icons/tb";
import { SiTelegram, SiYoutube  } from "react-icons/si";
import { RiGlobalLine } from "react-icons/ri";
import { FiGithub } from "react-icons/fi";


import MyWebPortfolio from '../assets/Projects/my-web-portfolio.jpg'
import OviderBot from '../assets/Projects/ovider-bot.jpg'
import HandgunDetection from '../assets/Projects/handgun-detection.jpg'
import Asco from '../assets/Projects/asco.jpg'
import RcCarHandGestures from '../assets/Projects/rc-car-hand-gestures.jpg'


interface Link {
    media: string;
    link?: string;
    icon: IconType;
}

interface Data {
    title: string;
    desc: string;
    img?: string;
    link: Link[]; 
    tools: string[]; 
}

export const Projects:Data[] = [
    {
        title: "My Web Portfolio",
        desc: "Remake of my web portfolio with Reactjs and Mantine UI Library",
        img: MyWebPortfolio,
        tools: ["Nodejs", "React", "Tailwind CSS", "Mantine UI"],
        link: [
            {
                media : "Website",
                link: "https://imam-mln.github.io/portfolio",
                icon: TbBrowser,
            },
            {
                media : "Github",
                link: "https://github.com/imam-mln/portfolio-v1",
                icon: FiGithub,
            },
        ],
    },
    {
        title: "Ovider Bot",
        desc: "One Video Downloader (Ovider) is telegram bot which can download video from many platform",
        img: OviderBot,
        tools: ["Nodejs", "Telegraf", "Rest API", "Axios"],
        link: [
            {
                media : "Telegram",
                link: "https://t.me/ovider_bot",
                icon: SiTelegram,
            }
        ],
    },
    {
        title: "Handgun Detection",
        desc: "Handgun detection model with dataset on Roboflow platform",
        img: HandgunDetection,
        tools: ["Python", "YOLOv8", "Roboflow"],
        link: [
            {
                media: "Roboflow",
                link:"https://universe.roboflow.com/imam-maulana-b4xet/handgun-detection-jtvaj",
                icon: RiGlobalLine,
            }
        ]
        
    },
    {
        title: "Automated Stock Control",
        desc: "The solution of stock checking with automation computer vision exatcly object detection",
        img: Asco,
        tools: ["Python", "YOLOv5-Lite", "Roboflow", "Streamlit"],
        link:  
        [
            {
                media : "Youtube",
                link : "https://youtu.be/ITJhbdym_10",
                icon: SiYoutube 
            },
            {
                media : "Roboflow",
                link : "https://universe.roboflow.com/types-of-bread-detection/various-bread-types-detection",
                icon: RiGlobalLine 
            }
        ]
    },
    {
        title: "RC Car Using Hand Gesture",
        desc: "Remote control car using hand gesture instruction base on Arduino UNO and Python",
        img: RcCarHandGestures,
        tools: ["Arduino", "Python", "OpenCV", "CV Zone"],
        link: 
        [
            {
                media : "Youtube",
                link : "https://youtu.be/p1pCyFHBK9c",
                icon: SiYoutube
            },
            {
                media : "Github",
                link: "https://github.com/imam-mln/pyxard_rccar",
                icon: FiGithub,
            }
        ]
    },
    {
        title: "Grab Web Scraper",
        desc: "Scrape data from Grab's Website import data to Dodolans App",
        tools: ["Python", "Rest API", "Beautiful Soup"],
        link: 
        [
            {
                media: "Github",
                link: "https://github.com/imam-mln/grab-scraper-dodolans",
                icon: FiGithub
            }
        ]
    },
    

]
