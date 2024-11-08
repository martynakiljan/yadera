import React, { useEffect, useState } from 'react'
import './App.css'
import Menu from './components/Menu'
import About from './components/About'
import ServicesDetails from './components/ServicesDetails'
import Footer from './components/Footer'
import { motion, useScroll } from 'framer-motion'
import Contact from './components/Contact'
import './styles/all.scss'
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom'
import Projects from './components/Projects'
import Home from './components/Home'

function App() {
	const { scrollYProgress } = useScroll()
	const [isVisible, setIsVisible] = useState(false)

	const handleScroll = () => {
		const currentScroll = window.scrollY
		setIsVisible(currentScroll > 300)
	}

	useEffect(() => {
		window.addEventListener('scroll', handleScroll)
		return () => {
			window.removeEventListener('scroll', handleScroll)
		}
	}, [])

	return (
		<Router>
			<motion.div className='progress-bar' style={{ scaleX: scrollYProgress }} />
			<div className='app'>
				<div className='sections'>
					<Menu />
					<Routes>
						<Route path='/' element={<Home />} />
						<Route path='/uber-uns' element={<About />} />
						<Route path='/dienstleistungen' element={<ServicesDetails />} />
						<Route path='/projekte' element={<Projects />} />
						<Route path='/contact' element={<Contact />} />
					</Routes>
				</div>
				<Footer />
			</div>
		</Router>
	)
}

export default App
