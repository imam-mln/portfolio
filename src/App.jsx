import {BrowserRouter as Router, Routes, Route} from "react-router-dom"

// COMPONENTS
import Navbar from "./Components/Navbar"
import Footer from "./Components/Footer"

// PAGES
import Home from "./Pages/Home"
import About from "./Pages/About"
import Portfolio from "./Pages/Portfolio"
import Contact from "./Pages/Contact"
import NotFound from "./Pages/NotFound"

function App() {
	return (
		<Router>
			<Navbar />
			<div className='hidden md:block'>
				<Routes>
					<Route path='/' element={<Home />} />
					<Route path='/about' element={<About />} />
					<Route path='/portfolio' element={<Portfolio />} />
					<Route path='/contact' element={<Contact />} />
					<Route path='*' element={<NotFound />} />
				</Routes>
			</div>
			<div onResize={() => refreh()} className='md:hidden overflow-hidden'>
				<Home />
				<About />
				<Portfolio />
				<Contact />
			</div>
			<Footer />
		</Router>
	)
}

export default App
