import React, { useEffect } from 'react';
import { motion } from 'framer-motion';
import logo from '../assets/images/logo/logo-white.png';

function Preloader({ setLoading }) {
	useEffect(() => {
		const timer = setTimeout(() => {
			setLoading(false);
		}, 1000); 

		return () => clearTimeout(timer);
	}, [setLoading]);

	return (
		<motion.div
			className='preloader'
			transition={{ duration: 0.5, delay: 1 }}
		>
			<motion.div
				className='preloader-background'
				initial={{ height: '100vh', top: '0' }} 
				animate={{ height: '0vh', top: '100vh' }} 
				transition={{ duration: 0.3 }} 
			/>
			<motion.img
				src={logo}
				alt='Logo'
				className='logo'
				initial={{ opacity: 0 }} 
				animate={{ opacity: [0, 1, 0.5, 1], transition: { duration: 1.5, repeat: Infinity } }} 
			/>
		</motion.div>
	);
}

export default Preloader;
