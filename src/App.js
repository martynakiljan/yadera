// src/App.js
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

function App() {
	const { scrollYProgress } = useScroll()
	const [isVisible, setIsVisible] = useState(false)
	const [loading, setLoading] = useState(true) 

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
		<>
			{loading ? (
				<Preloader setLoading={setLoading} />
			) : (
				<>
					<motion.div className='progress-bar' style={{ scaleX: scrollYProgress }} />
					<div className='app'>
						<Header />
						<Menu />
						<Story />
						<About />
						<BigImage img={image13} />
						<Info />
						<Services />
						<Slider />
						<Reviews />
						<TwoImages />
						<Contact />
						<Footer />
					</div>
				</>
			)}
		</>
	)
}

export default App
