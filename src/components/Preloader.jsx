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
			<motion.div
				className='preloader-background'
				initial={{ height: '100vh', top: '0' }}
				animate={{ height: '0vh', top: '100vh' }}
				transition={{ duration: 1.5, ease: 'easeInOut' }}
			/>
			<motion.img
				src={logo}
				alt='Logo'
				className='logo'
				initial={{ opacity: 0 }}
				animate={{ opacity: 1 }}
				exit={{ opacity: 0 }}
				transition={{ duration: 1.2, ease: 'easeInOut' }}
			/>
		</motion.div>
	)
}

export default Preloader
