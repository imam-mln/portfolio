import {useNavigate, Link} from "react-router-dom"

export default function Navbar() {
	const navigate = useNavigate()

	return (
		<div id='navbar' className='md:sticky top-0 z-50 bg-white md:bg-opacity-70 backdrop-blur-sm text-black font-bold'>
			<div id='nav-child' className='navbar md:max-w-6xl m-auto'>
				<div className='navbar-start'>
					<a className='cursor-pointer select-none text-sm md:text-2xl uppercase' onClick={() => navigate("/")}>
						@imm-mln
					</a>
				</div>
				<div className='navbar-center hidden lg:flex'>
					<ul className='text-lg menu menu-horizontal md:px-1 font-normal md:gap-5'>
						<li>
							<Link to='/'>Home</Link>
							{/* <a onClick={() => navigate("/")}>Home</a> */}
						</li>
						<li>
							<Link to='/about'>About</Link>
							{/* <a onClick={() => navigate("/about")}>About</a> */}
						</li>
						<li>
							<Link to='/portfolio'>Portfolio</Link>
							{/* <a onClick={() => navigate("/portfolio")}>Portfolio</a> */}
						</li>
						<li>
							<Link to='/contact'>Contact</Link>
							{/* <a onClick={() => navigate("/contact")}>Contact</a> */}
						</li>
					</ul>
				</div>
				<div className='navbar-end'>
					<a className='btn btn-sm md:btn-md bg-indigo-600 border-none text-white text-[10px] md:text-lg'>Download CV</a>
				</div>
			</div>
		</div>
	)
}
