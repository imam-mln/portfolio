import {FaInstagram, FaLinkedinIn, FaFacebookF} from "react-icons/fa"
import {FiGithub} from "react-icons/fi"

export default function Footer() {
	return (
		<div className='bg-neutral'>
			<footer className='footer items-center p-4  text-neutral-content max-w-6xl m-auto justify-between'>
				<aside className='items-center grid-flow-col'>
					<img className='grayscale w-10' src='./logo-imm.png' alt='' />
					<p>
						<span>© 2024 Imam Maulana.</span>
						<br />
						<span>
							{`Built with `}
							<a className='text-sky-400 hover:underline' href='https://react.dev/' target='_blank'>
								ReactJS
							</a>
						</span>
					</p>
				</aside>

				<nav className='grid-flow-col gap-4 md:place-self-center md:justify-self-end'>
					<div className='flex-row'>
						<h1 className='font-semibold text-white pb-1'>Get to know more :</h1>
						<div className='flex flex-col'>
							{/* PLATFORMS */}
							<div className='flex justify-between pb-3'>
								<a target='_blank' className='bg-gray-400 rounded-full p-2 hover:bg-white' href='https://www.instagram.com/imm.mln?igsh=MWQzbW16d2MxMDQ4OQ=='>
									<FaInstagram className='fill-gray-700 w-6 h-auto' />
								</a>
								<a href='https://www.linkedin.com/in/imammay24/' target='_blank' className='hover:bg-white bg-gray-400 rounded-full p-2'>
									<FaLinkedinIn className='fill-gray-700 w-6 h-auto' />
								</a>
								<a href='https://www.facebook.com/imm.mln' target='_blank' className='hover:bg-white bg-gray-400 rounded-full p-2'>
									<FaFacebookF className='fill-gray-700 w-6 h-auto' />
								</a>
								<a href='https://github.com/imam-mln' target='_blank' className='hover:bg-white bg-gray-400 rounded-full p-2'>
									<FiGithub className='stroke-gray-700 w-6 h-auto' />
								</a>
							</div>
							{/* EMAIL */}
							<div>
								<h1>
									<span className='font-semibold text-white'>{`Email : `}</span>
									<span>
										<a target='_blank' className='hover:underline hover:text-white' href='mailto:imammaul2405@gmail.com'>
											imammaul2405@gmail.com
										</a>
									</span>
								</h1>
							</div>
						</div>
					</div>
				</nav>
			</footer>
		</div>
	)
}
