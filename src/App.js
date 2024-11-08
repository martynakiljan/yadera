import React, { useEffect, useState } from 'react'
import './App.css'
import Menu from './components/Menu'
import Header from './components/Header'
import About from './components/About'
import Story from './components/Story'
import BigImage from './components/BigImage'
import Services from './components/Services'
import Slider from './components/Slider'
import Footer from './components/Footer'
import Reviews from './components/Reviews'
import { motion, useScroll } from 'framer-motion'
import Contact from './components/Contact'
import Info from './components/Info'
import TwoImages from './components/TwoImages'
import './styles/all.scss'
import Preloader from './components/Preloader'
import image13 from './assets/images/images/image-13.jpeg'
import image15 from './assets/images/images/image-15.jpeg'
import Slider2 from './components/Slider2'
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom'
import Projects from './components/Projects'
import Home from './components/Home'

const preloadImage = src => {
	return new Promise(resolve => {
		const img = new Image()
		img.src = src
		img.onload = resolve
	})
}

function App() {
	const { scrollYProgress } = useScroll()
	const [isVisible, setIsVisible] = useState(false)
	const [loading, setLoading] = useState(true)
	const [isImageLoaded, setIsImageLoaded] = useState(false)

	const handleScroll = () => {
		const currentScroll = window.scrollY
		setIsVisible(currentScroll > 300)
	}

	// Wstępne ładowanie obrazu w tle
	useEffect(() => {
		const loadImage = async () => {
			await preloadImage(image13)
			setIsImageLoaded(true)
		}

		loadImage()
	}, [])

	useEffect(() => {
		const timer = setTimeout(() => {
			if (isImageLoaded) {
				setLoading(false)
			}
		}, 2000)

		return () => clearTimeout(timer)
	}, [isImageLoaded])

	useEffect(() => {
		window.addEventListener('scroll', handleScroll)
		return () => {
			window.removeEventListener('scroll', handleScroll)
		}
	}, [])

	return (
		<Router>
			{loading ? (
				<Preloader setLoading={setLoading} />
			) : (
				<>
					<motion.div className='progress-bar' style={{ scaleX: scrollYProgress }} />
					<div className='app'>
					
						<div className='sections'>
						<Menu />
							<Routes>
								<Route exact path='/'>
									<Route path='/' element={<Home />} />
									<Route path='/about' element={<About />} />
									<Route path='/dienstleistunfen' element={<Services />} />
									<Route path='/projekte' element={<Projects />} />
									<Route path='/contact' element={<Contact />} />
								</Route>
							</Routes>
						</div>
						<Footer />
					</div>
				</>
			)}
		</Router>
	)
}

export default App
