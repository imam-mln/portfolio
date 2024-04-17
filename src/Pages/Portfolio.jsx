import {Helmet, HelmetProvider} from "react-helmet-async"
import {useEffect} from "react"

import Projects from "../Components/Projects"

import ProjectCard from "../Components/ProjectCard"

export default function Portfolio() {
	// useEffect(() => {
	// 	window.scrollTo(0, 0)
	// }, [])
	return (
		<>
			<HelmetProvider>
				<Helmet>
					<title>IMM-MLN - Portfolio</title>
				</Helmet>
			</HelmetProvider>
			{/* MY PROJECTS */}
			<section>
				<div className='max-w-6xl m-auto'>
					{/* HEADER MY PROJECTS */}
					<div>
						<div className='flex flex-col m-auto pt-20 pb-16'>
							<h1 className='m-auto text-5xl font-extrabold pb-5  text-black'>My Projects</h1>
							<h1 className='m-auto text-xl text-gray-400 font-medium text-center'>
								<span>These are some of the services I provide for clients,</span>
								<br />
								<span>and surely I'm always open to other projects.</span>
							</h1>
						</div>
					</div>
					{/* MY PROJECTS */}
					<Projects />
					<div className='divider py-36'></div>
				</div>
			</section>

			{/* GRAPHIC DESIGN */}
			<section>
				<div className='max-w-6xl m-auto'>
					{/* HEADER GRAPHIC DESIGN */}
					<div className='flex flex-col m-auto pb-16'>
						<h1 className='m-auto text-5xl font-extrabold pb-5  text-black'>Graphic Design</h1>
						<h1 className='m-auto text-xl text-gray-400 font-medium text-center'>
							<span>These are some of the services I provide for clients,</span>
							<br />
							<span>and surely I'm always open to other projects.</span>
						</h1>
					</div>
					{/* MY PROJECTS */}
					<Projects itr={3} />
					<div className='divider py-36'></div>
				</div>
			</section>

			{/* SERTIFICATE */}
			<section>
				<div className='max-w-6xl m-auto pb-36'>
					{/* HEADER SERTIFICATES */}
					<div className='flex flex-col m-auto pb-16'>
						<h1 className='m-auto text-5xl font-extrabold pb-5  text-black'>Sertificates</h1>
						<h1 className='m-auto text-xl text-gray-400 font-medium text-center'>
							<span>These are some of the services I provide for clients,</span>
							<br />
							<span>and surely I'm always open to other projects.</span>
						</h1>
					</div>
					{/* SERTIFICATES */}
					<Projects itr={3} />
				</div>
			</section>
		</>
	)
}
