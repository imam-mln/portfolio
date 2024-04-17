import { IconType } from "react-icons";
import { FaNodeJs, FaReact, FaPython, FaPhp, FaFigma, FaGitAlt,FaGithub } from "react-icons/fa";
import { SiJavascript, SiTypescript, SiTailwindcss, SiMantine, SiDaisyui, SiMikrotik, SiCisco, SiArduino,SiAdobephotoshop, SiCanva } from "react-icons/si";

interface Tool {
    name: string;
    icon: IconType; // Menggunakan IconType sebagai tipe untuk properti icon dan membuatnya wajib (tidak opsional)
    link?: string;
}

export const SkillSet: Tool[] = [
    { name: "Node.js", icon: FaNodeJs, link : "https://nodejs.org/en"},
    { name: "Javascript", icon: SiJavascript, link:"https://developer.mozilla.org/en-US/docs/Web/JavaScript" },
    { name: "Typescript", icon: SiTypescript, link : "https://www.typescriptlang.org"},
    { name: "React", icon: FaReact, link : "https://react.dev"},
    { name: "Tailwind CSS", icon: SiTailwindcss, link: "https://tailwindcss.com" },
    { name: "Mantine UI" , icon: SiMantine, link: "https://mantine.dev" },
    { name: "Daisy UI", icon: SiDaisyui, link: "https://daisyui.com" },
    { name: "Git", icon: FaGitAlt , link: "https://git-scm.com" },
    { name: "Github", icon: FaGithub, link: "https://github.com" },
    { name: "Mikrotik Router", icon: SiMikrotik, link: "https://mikrotik.com" },
    { name: "Cisco Router", icon: SiCisco, link: "https://cisco.com" },
    { name: "Python", icon: FaPython, link: "https://www.python.org" },
    { name: "PHP", icon: FaPhp, link: "https://www.php.net" },
    { name: "Arduino", icon: SiArduino, link: "https://www.arduino.cc" },
    { name: "Photoshop", icon: SiAdobephotoshop, link: "https://www.adobe.com/id_id/products/photoshop.html" },
    { name: "Canva", icon: SiCanva, link: "https://www.canva.com" },
    { name: "Figma", icon: FaFigma, link: "https://www.figma.com" },
];
