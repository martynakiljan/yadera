import React, { useEffect } from 'react'
import { motion } from 'framer-motion'
import logo from '../assets/images/logo/logo-white.png'

function Preloader({ setLoading }) {
	useEffect(() => {
		const timer = setTimeout(() => {
			setLoading(false)
		}, 1500)

		return () => clearTimeout(timer)
	}, [setLoading])

	return (
		<motion.div className='preloader'>
			{/* Preloader pojawia się natychmiast na pełnym ekranie */}
			<motion.div
				className='preloader-background'
				initial={{ opacity: 1 }}
				animate={{ opacity: 1 }} // Preloader jest widoczny od razu
				transition={{ duration: 0 }} // Brak opóźnienia animacji tła
			/>
			{/* Logo pojawia się natychmiast i powiększa się płynnie */}
			<motion.img
				src={logo}
				alt='Logo'
				className='logo'
				initial={{ opacity: 1, scale: 1 }} // Logo od razu widoczne i normalnej wielkości
				animate={{
					opacity: 1, // Logo wciąż widoczne
					scale: 1.2, // Logo powiększa się na moment
				}}
				exit={{ opacity: 0 }}
				transition={{
					duration: 1.2, // Czas trwania animacji powiększenia
					ease: 'easeOut', // Płynne zakończenie animacji
				}}
			/>
		</motion.div>
	)
}

export default Preloader
