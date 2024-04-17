import {Helmet, HelmetProvider} from "react-helmet-async"

import {FaInstagram, FaLinkedinIn, FaFacebookF} from "react-icons/fa"
import {FiGithub} from "react-icons/fi"

export default function Contact() {
	return (
		<>
			<HelmetProvider>
				<Helmet>
					<title>IMM-MLN - Contact</title>
				</Helmet>
			</HelmetProvider>
			<section>
				<div className='max-w-6xl m-auto pb-20'>
					{/* HEADER CONTACTS */}
					<div className='flex flex-col m-auto pt-10 pb-16'>
						<h1 className='m-auto text-5xl font-extrabold pb-5  text-black'>Connect with Me</h1>
						<h1 className='m-auto text-xl text-gray-400 font-medium text-center'>
							<span>These are some of the services I provide for clients,</span>
							<br />
							<span>and surely I'm always open to other projects.</span>
						</h1>
					</div>
					<div className='flex mx-auto max-w-6xl'>
						<div className='mx-auto text-black'>
							<div>
								<h1 className='text-2xl font-bold pb-3'>Let's Connect!</h1>
							</div>
							<div className='flex flex-col font-semibold '>
								<div className='pb-4'>
									<h1 className='text-lg '>Email</h1>
									<h1>
										<a className='font-normal hover:text-black text-gray-400 hover:underline' href='mailto:imammaul2405@gmail.com'>
											imammaul2405@gmail.com
										</a>
									</h1>
								</div>
								<div className='flex-col'>
									<h1 className='text-lg text-black pb-1'>Other Platform</h1>
									<div className='flex justify-between'>
										<a target='_blank' className='bg-gray-400 rounded-full p-2 tooltip tooltip-bottom hover:bg-black' data-tip='Instagram' href='https://www.instagram.com/imm.mln/'>
											<FaInstagram className='fill-white w-8 h-auto' />
										</a>
										<a href='https://www.linkedin.com/in/imammay24/' target='_blank' className='hover:bg-black bg-gray-400 rounded-full p-2 tooltip tooltip-bottom' data-tip='LinkedIn'>
											<FaLinkedinIn className='fill-white w-8 h-auto' />
										</a>
										<a href='https://www.facebook.com/imm.mln' target='_blank' className='hover:bg-black bg-gray-400 rounded-full p-2 tooltip tooltip-bottom' data-tip='Facebook'>
											<FaFacebookF className='fill-white w-8 h-auto' />
										</a>
										<a href='https://github.com/imam-mln' data-tip='Github' target='_blank' className='hover:bg-black bg-gray-400 rounded-full p-2 tooltip tooltip-bottom'>
											<FiGithub className='stroke-white w-8 h-auto' />
										</a>
									</div>
								</div>
							</div>
						</div>
						<div className='mx-auto text-black'>
							<div>
								<h1 className='text-2xl font-bold pb-4'>Have Any Projects to Develop?</h1>
							</div>
							<form action=''>
								<div className='grid grid-cols-2 gap-x-5 gap-y-5'>
									<input type='text' placeholder='Enter your name' className='input input-bordered w-full max-w-xs bg-gray-200 tracking-wide' required />
									<input type='text' placeholder='Company (Optional)' className='input input-bordered w-full max-w-xs bg-gray-200  tracking-wide' />
									<input type='email' placeholder='Enter your email' className='input input-bordered w-full max-w-xs bg-gray-200  tracking-wide' required />
									<input type='number' placeholder='Phone number' className='input appearance-none input-bordered w-full max-w-xs bg-gray-200  tracking-wide' required />
									<textarea className='textarea textarea-bordered max-h-24 h-24 resize-none overflow-y-auto bg-gray-200  col-span-2 tracking-wide' placeholder='Describe about your project' required></textarea>
									<div className='col-span-2 justify-between flex'>
										<div className='m-0'>
											<p className='text-xs italic text-gray-400 tracking-wide'>*Ensure your contact information is reachable.</p>
										</div>
										<button type='submit' className='btn bg-indigo-600 border-none text-white'>
											Submit
										</button>
									</div>
								</div>
							</form>
						</div>
					</div>
				</div>
			</section>
		</>
	)
}
