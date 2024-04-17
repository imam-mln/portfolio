// THIRD-PARTY MODULE
import {useEffect} from "react"
import {useNavigate, Link} from "react-router-dom"
import {Helmet, HelmetProvider} from "react-helmet-async"
import {Typewriter} from "react-simple-typewriter"

// ICONS & SVG
import {MdOutlineWeb} from "react-icons/md"
import {FaCode} from "react-icons/fa6"
import {RiRobot2Fill, RiShape2Fill} from "react-icons/ri"

// DATAS
import Projects from "../Components/Projects"

// IMAGES
import ImgImamV1 from "../assets/imam-v1.png"
import ImgImamV2 from "../assets/imam-v2.png"

// CUSTOM COMPONENTS
import ServiceCard from "../Components/ServiceCard"

export default function Home() {
	const navigate = useNavigate()
	useEffect(() => {
		// window.scrollTo(0, 0)
		window.addEventListener("scroll", () => {
			if (window.scrollY > 0) {
				let navbar = document.getElementById("navbar")
				navbar.classList.add("md:border-b-2", "md:border-b-gray-300")
			} else {
				let navbar = document.getElementById("navbar")
				navbar.classList.remove("md:border-b-2", "md:border-b-gray-300")
			}
		})
	}, [])
	return (
		<>
			{/* HEADER */}
			<HelmetProvider>
				<Helmet>
					<title>IMM-MLN - Home</title>
				</Helmet>
			</HelmetProvider>
			{/* HERO IMAGE */}
			<section id='hero' className='pt-10'>
				<div className=' w-full text-black md:max-w-6xl mx-auto'>
					<div className='flex p gap-0 flex-col md:max-w-6xl lg:flex-row-reverse'>
						<div className='m-auto'>
							<img src={ImgImamV1} className='hidden md:block max-w-[280px] md:max-w-sm select-none' />
							<img src={ImgImamV2} className='animate-slow-bounce md:static md:hidden max-w-[290px] h-auto md:max-w-md select-none' />
						</div>
						<div className='pt-3 w-screen text-xs text-center md:text-lg'>
							<span className='text-xs md:text-lg font-semibold'>Hello There! 👋 I am</span>
							<h1 className='text-3xl md:text-6xl font-bold tracking-wide'>Imam Maulana</h1>
							<h1 className='text-lg md:text-2xl md:my-2'>
								<span className='text-gray-400 '>Freelancer {` `}</span>
								<span className='font-semibold'>
									<Typewriter words={["Web Developer", "Graphic Designer"]} loop={false} cursor cursorStyle='|' typeSpeed={70} deleteSpeed={50} delaySpeed={1000} />
								</span>
							</h1>
							<p className='leading-normal max-w-[280px] md:text-lg md:max-w-lg my-2 md:my-7 text-gray-400 m-auto'>
								<span>Always enthusiastic and challenged to learn new things.</span>
								<span className='md:hidden'>{` `}</span>
								<br className='hidden md:block' />
								<span>Let's find your problem solution with me!</span>
							</p>
							<button className='mt-5 btn btn-sm md:btn-md bg-indigo-700 border-none text-white text-sm md:text-lg'>Contact Me</button>
						</div>
					</div>
				</div>
			</section>

			{/* SERVICES */}
			<section id='services' className='bg-indigo-600 text-white py-14'>
				<div className='max-w-6xl m-auto md:py-20'>
					{/* HEADER MY SERVICES */}
					<div className='flex flex-col m-auto pb-10'>
						<h1 className='text-3xl m-auto md:text-5xl font-extrabold pb-3'>My Services</h1>
						<h1 className='m-auto text-[10px] md:text-xl text-white text-center'>
							<span>These are some of the services I provide for clients,</span>
							<br />
							<span>and surely I'm always open to other projects.</span>
						</h1>
					</div>

					{/* BODY SERVICES */}
					<div className='grid grid-cols-2 md:grid-cols-4 gap-3 md:gap-10 px-10'>
						<div>
							{/* WEB DEV SERVICE */}
							<ServiceCard title='Web Dev' desc='Frontend Web Developer with ReactJS, tailwind and other UI library' icon={<MdOutlineWeb className='w-20 max-w-6 md:max-w-14 h-auto fill-white' />} />
						</div>
						<div>
							{/* WEB SCRAPER SERVICE */}
							<ServiceCard title='Web Scraper' desc='Data collection needs to be automated using web scrapers' icon={<FaCode className='w-20 max-w-6 md:max-w-14 h-auto fill-white' />} />
						</div>
						<div>
							{/* CHAT BOT SERVICE */}
							<ServiceCard title='Chat Bot' desc='Automate your job easily with the chat bot 24/07 active' icon={<RiRobot2Fill className='w-20 max-w-6 md:max-w-14 h-auto fill-white' />} />
						</div>
						<div>
							{/* GRAPHIC DESIGN SERVICE */}
							<ServiceCard title='Graphic Design' desc='Create a logo, social media post, or marketing design that needs' icon={<RiShape2Fill className='w-20 max-w-6 md:max-w-14 h-auto fill-white' />} />
						</div>
					</div>
				</div>
			</section>

			{/* SECTION RECENT PROJECTS */}
			<section id='recent-projects'>
				{/* RECENT PROJECT */}
				<div className='max-w-6xl m-auto py-14'>
					{/* HEADER RECENT PROJECTS */}
					<div className='flex flex-col m-auto pb-6 md:pb-16 text-black'>
						<h1 className='text-3xl m-auto md:text-5xl font-extrabold pb-2 md:pb-5'>Recent Projects</h1>
						<h1 className='m-auto text-xs md:text-xl text-gray-400 text-center'>
							<span>These are my recent projects and</span>
							<br />
							<span> several of them are publicly accessible.</span>
						</h1>
					</div>
					<Projects itr={3} />

					{/* FOOTER RECENT PROJECTS */}
					<div className='pt-3 max-w-6xl pr-8 flex justify-end'>
						<Link to='/portfolio' className='hidden md:block hover:underline text-sky-600 cursor-pointer font-semibold'>
							Show all projects ➜
						</Link>
					</div>
				</div>
			</section>
		</>
	)
}
