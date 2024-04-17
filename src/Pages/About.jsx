import {Helmet, HelmetProvider} from "react-helmet-async"
import {useEffect} from "react"

import SkillToolsCard from "../Components/SkillsToolsCard"

import {FaReact, FaNodeJs, FaPython} from "react-icons/fa"
import {SiTailwindcss, SiAdobephotoshop, SiAdobeillustrator, SiCanva, SiArduino} from "react-icons/si"

export default function About() {
	useEffect(() => {
		// window.scrollTo(0, 0)
		window.addEventListener("scroll", () => {
			// console.log(window.scrollY)
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
			<HelmetProvider>
				<Helmet>
					<title>IMM-MLN - About</title>
				</Helmet>
			</HelmetProvider>
			{/* MOTTO & ABOUT ME */}
			<section>
				<div className='mx-auto divider max-w-xs md:hidden'></div>
				<div className='max-w-6xl mx-auto py-12'>
					<div className=' px-10 flex flex-col md:flex-row max-w-6xl mx-auto text-black gap-y-16 md:gap-28 md:py-40'>
						<div className=' md:w-1/2 mx-auto'>
							<h1 className='md:text-xl font-semibold text-gray-400 tracking-wide'>Motto</h1>
							<h1 className='text-2xl md:text-5xl font-bold'>
								<span className=''>
									Learning isn't about <span className='text-gray-400'>achievement</span>
									{`, it's about `}
									<span className='text-indigo-600'>post-impact</span>.
								</span>
							</h1>
						</div>
						<div className='md:w-1/2'>
							<h1 className='text-lg md:text-3xl font-extrabold pb-1 uppercase'>About me</h1>
							<p className='text-[12px] text-justify md:text-start md:text-sm md:tracking-wider text-gray-400'>
								&emsp;&emsp;A final-year student majoring in informatics engineering from <span className='text-indigo-600 '>{` STMIK IKMI Cirebon `}</span> who is interested in <span className='text-indigo-600 '>{` website development `}</span>and <span className='text-indigo-600 '>{` digital design`}</span>. Besides those, I am always enthusiastic about learning new things about popular technologies within the informatics fields with the purpose of improving new skills that might be needed by
								an institution or company.
							</p>
						</div>
					</div>
				</div>
				<div className='mx-auto max-w-xs divider'></div>
			</section>

			{/* SKILLS & TOOLS */}
			<section>
				<div className='max-w-6xl m-auto py-10'>
					{/* HEADER SKILLS & TOOLS */}
					<div className='flex flex-col m-auto pb-10 text-black'>
						<h1 className='text-3xl m-auto md:text-5xl font-extrabold pb-2 md:pb-5'>Skills-Set</h1>
						<h1 className='m-auto text-xs md:text-xl text-gray-400 text-center'>
							<span>These are some of my skills and tools usage</span>
							<br />
							<span>with level information.</span>
						</h1>
					</div>
					{/* WEB DEV SKILLS & TOOLS */}
					<div className='px-10 pb-2 md:pb-3 max-w-6xl m-auto'>
						<div>
							<h1 className='text-xs md:text-lg'>Web Development</h1>
						</div>
						<div className='m-auto grid grid-cols-3 gap-y-2 md:grid-cols-4 gap-x-2 md:gap-x-10 max-w-6xl'>
							<div>
								<SkillToolsCard title='NodeJS' lvl={3} icon={<FaNodeJs className='h-auto w-6 md:w-10 fill-lime-500' />} />
							</div>
							<div>
								<SkillToolsCard title='Python' lvl={4} icon={<FaPython className='h-auto w-6 md:w-10 fill-blue-800' />} />
							</div>
							<div>
								<SkillToolsCard title='Tailwind' lvl={4} icon={<SiTailwindcss className='h-auto w-6 md:w-10 fill-blue-500' />} />
							</div>
							<div>
								<SkillToolsCard title='ReactJS' lvl={2} icon={<FaReact className='h-auto w-6 md:w-10 fill-sky-400' />} />
							</div>
						</div>
					</div>
					{/* GRAPHIC DESIGN SKILLS & TOOLS */}
					<div className='px-10 py-2 md:py-3 max-w-6xl m-auto'>
						<div>
							<h1 className='text-xs md:text-lg'>Graphic Design</h1>
						</div>
						<div className='m-auto grid grid-cols-3 md:grid-cols-4 gap-y-2 gap-x-2 md:gap-x-10 max-w-6xl'>
							<div>
								<SkillToolsCard title='Photoshop' lvl={3} icon={<SiAdobephotoshop className='h-auto w-6 md:w-10 fill-blue-950' />} />
							</div>
							<div>
								<SkillToolsCard title='Illustrator' lvl={2} icon={<SiAdobeillustrator className='h-auto w-6 md:w-10 fill-orange-950' />} />
							</div>
							<div>
								<SkillToolsCard title='Canva' lvl={5} icon={<SiCanva className='h-auto w-6 md:w-10 fill-sky-500' />} />
							</div>
						</div>
					</div>
					{/* Additional */}
					<div className='px-10 py-2 md:py-3 max-w-6xl m-auto'>
						<div>
							<h1 className='text-xs md:text-lg'>Addtional</h1>
						</div>
						<div className='m-auto grid grid-cols-3 md:grid-cols-4 gap-y-2 gap-x-2 md:gap-x-10 max-w-6xl'>
							<div>
								<SkillToolsCard title='Arduino' lvl={3} icon={<SiArduino className='h-auto w-6 md:w-10 fill-teal-500' />} />
							</div>
						</div>
					</div>
				</div>
				<div className='divider max-w-sm md:max-w-6xl mx-auto'></div>
			</section>

			{/* EDUCATION & EXPERIENCE*/}
			<section>
				<div className='m-auto max-w-6xl pb-20'>
					{/* HEADER EDUCATION & EXPERIENCE */}
					<div className='flex flex-col m-auto pt-10 pb-16 text-black'>
						<h1 className='m-auto text-5xl font-extrabold pb-5'>Education & Experience</h1>
						<h1 className='m-auto text-xl text-gray-400 text-center'>
							<span>This is a timeline of my journey in education</span>
							<br />
							<span>and experience until now.</span>
						</h1>
					</div>
					{/* TIMELINE */}
					<div>
						<ul className='timeline timeline-snap-icon max-md:timeline-compact timeline-vertical'>
							<li>
								<div className='timeline-middle'>
									<svg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 20 20' className='h-5 w-5 fill-indigo-600'>
										<path fillRule='evenodd' d='M10 18a8 8 0 100-16 8 8 0 000 16zm3.857-9.809a.75.75 0 00-1.214-.882l-3.483 4.79-1.88-1.88a.75.75 0 10-1.06 1.061l2.5 2.5a.75.75 0 001.137-.089l4-5.5z' clipRule='evenodd' />
									</svg>
								</div>
								<div className='timeline-start md:text-end mb-10'>
									<time className='text-white py-3 badge bg-indigo-600 border-none'>2017 - 2020</time>
									<div className='font-black'>
										<h1 className='text-2xl text-black'>{`Computer and Network Engineering`}</h1>
										<h1 className='text-xl font-bold text-indigo-600'>
											<a href='https://smk.arrahmat-majalengka.sch.id/' target='_blank' className='hover:underline'>
												SMKS Ar Rahmat
											</a>
										</h1>
									</div>
									Lorem ipsum dolor sit amet consectetur adipisicing elit. Debitis dicta, nostrum omnis iusto cupiditate a, accusantium doloribus nam dolores quas dignissimos, itaque aut. Fuga expedita harum optio libero similique nulla?
								</div>
								<hr />
							</li>
							<li>
								<hr />
								<div className='timeline-middle'>
									<svg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 20 20' className='h-5 w-5 fill-indigo-600'>
										<path fillRule='evenodd' d='M10 18a8 8 0 100-16 8 8 0 000 16zm3.857-9.809a.75.75 0 00-1.214-.882l-3.483 4.79-1.88-1.88a.75.75 0 10-1.06 1.061l2.5 2.5a.75.75 0 001.137-.089l4-5.5z' clipRule='evenodd' />
									</svg>
								</div>
								<div className='timeline-end mb-10'>
									<time className='text-white py-3 badge bg-indigo-600 border-none'>2019</time>
									<div className=''>
										<h1 className='text-2xl text-black font-black'>{`Data Management (Intern)`}</h1>
										<h1 className='text-xl font-bold text-indigo-600'>
											<a href='https://maps.app.goo.gl/CzEFemZVuybfdeo5A' target='_blank' className='hover:underline'>
												PT. Telkom Witel Cirebon
											</a>
										</h1>
									</div>
									Lorem ipsum, dolor sit amet consectetur adipisicing elit. Dolor iure natus voluptate corrupti quos sint nihil adipisci fugit ex, eaque aliquid reprehenderit? Iusto, accusantium a? Porro velit repellendus quibusdam incidunt?
								</div>
								<hr />
							</li>
							<li>
								<hr />
								<div className='timeline-middle'>
									<svg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 20 20' className='h-5 w-5 fill-indigo-600'>
										<path fillRule='evenodd' d='M10 18a8 8 0 100-16 8 8 0 000 16zm3.857-9.809a.75.75 0 00-1.214-.882l-3.483 4.79-1.88-1.88a.75.75 0 10-1.06 1.061l2.5 2.5a.75.75 0 001.137-.089l4-5.5z' clipRule='evenodd' />
									</svg>
								</div>
								<div className='timeline-start md:text-end mb-10'>
									<time className='text-white py-3 badge bg-indigo-600 border-none'>2023</time>
									<div className='font-black'>
										<h1 className='text-2xl text-black'>{`AI Computer Vision (Bootcamp)`}</h1>
										<h1 className='text-xl font-bold text-indigo-600'>
											<a href='https://startupcampus.id/' target='_blank' className='hover:underline'>
												Startup Campus
											</a>
										</h1>
									</div>
									Lorem, ipsum dolor sit amet consectetur adipisicing elit. Iusto aliquid ipsum recusandae veniam non sed sequi consequuntur facilis in, cum laboriosam itaque sapiente autem doloribus dolore voluptatibus omnis dolorum illo.
								</div>
								<hr />
							</li>
							<li>
								<hr />
								<div className='timeline-middle'>
									<svg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 20 20' className='h-5 w-5 fill-indigo-600'>
										<path fillRule='evenodd' d='M10 18a8 8 0 100-16 8 8 0 000 16zm3.857-9.809a.75.75 0 00-1.214-.882l-3.483 4.79-1.88-1.88a.75.75 0 10-1.06 1.061l2.5 2.5a.75.75 0 001.137-.089l4-5.5z' clipRule='evenodd' />
									</svg>
								</div>
								<div className='timeline-end mb-10'>
									<time className='text-white py-3 badge bg-indigo-600 border-none'>2022</time>
									<div className='font-black'>
										<h1 className='text-2xl text-black'>{`Application Admin (Freelance)`}</h1>
										<h1 className='text-xl font-bold text-indigo-600'>
											<a href='https://rumahdigitalmjl.my.id/' target='_blank' className='hover:underline'>
												Rumah Digital Majalengka
											</a>
										</h1>
									</div>
									Lorem ipsum dolor sit amet consectetur adipisicing elit. Facilis illo tempore obcaecati dolorem aperiam maiores dicta fuga eaque dignissimos. Voluptate ratione quam incidunt vitae culpa enim debitis aliquam ex laborum.
								</div>
								<hr />
							</li>
							<li>
								<hr />
								<div className='timeline-middle'>
									<svg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 20 20' className='h-5 w-5 fill-indigo-600'>
										<path fillRule='evenodd' d='M10 18a8 8 0 100-16 8 8 0 000 16zm3.857-9.809a.75.75 0 00-1.214-.882l-3.483 4.79-1.88-1.88a.75.75 0 10-1.06 1.061l2.5 2.5a.75.75 0 001.137-.089l4-5.5z' clipRule='evenodd' />
									</svg>
								</div>
								<div className='timeline-start md:text-end mb-10'>
									<time className='text-white py-3 badge bg-indigo-600 border-none'>2020 - 2024</time>
									<div className='font-black'>
										<h1 className='text-2xl text-black'>{`Informatics Engineering`}</h1>
										<h1 className='text-xl font-bold text-indigo-600'>
											<a href='https://ikmi.ac.id/' target='_blank' className='hover:underline'>
												STMIK IKMI Cirebon
											</a>
										</h1>
									</div>
									Lorem ipsum dolor sit amet, consectetur adipisicing elit. Nesciunt molestias porro laborum magni fugit quibusdam tempora, nostrum veniam mollitia inventore ipsum eligendi, esse, animi dolorem ullam doloribus. Excepturi, doloribus cumque.
								</div>
								<hr />
							</li>
							<li>
								<hr />
								<div className='timeline-middle'>
									<svg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 20 20' className='h-5 w-5 fill-indigo-600'>
										<path fillRule='evenodd' d='M10 18a8 8 0 100-16 8 8 0 000 16zm3.857-9.809a.75.75 0 00-1.214-.882l-3.483 4.79-1.88-1.88a.75.75 0 10-1.06 1.061l2.5 2.5a.75.75 0 001.137-.089l4-5.5z' clipRule='evenodd' />
									</svg>
								</div>
								<div className='timeline-end mb-10'>
									<time className='text-white py-3 badge bg-indigo-600 border-none'>2022</time>
									<div className='font-black'>
										<h1 className='text-2xl text-black'>{`IT Staff (Intern)`}</h1>
										<h1 className='text-xl font-bold text-indigo-600'>
											<a href='https://maps.app.goo.gl/Xft3Zh4guyNjzPD9A' target='_blank' className='hover:underline'>
												PT. Bank Rakyat Indonesia KC Cirebon Kartini
											</a>
										</h1>
									</div>
									Lorem ipsum, dolor sit amet consectetur adipisicing elit. Dolor iure natus voluptate corrupti quos sint nihil adipisci fugit ex, eaque aliquid reprehenderit? Iusto, accusantium a? Porro velit repellendus quibusdam incidunt?
								</div>
							</li>
						</ul>
					</div>
				</div>
			</section>
		</>
	)
}
