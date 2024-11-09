import { useNavigate } from 'react-router-dom'
import { useState } from 'react'
import Title from './Title'

const Services = () => {
	const navigate = useNavigate()
	const [fadeOut, setFadeOut] = useState(false)

	const handleServiceClick = serviceId => {
		// Start fade-out effect
		setFadeOut(true)

		// Delay navigation to allow fade-out animation to complete
		setTimeout(() => {
			navigate('/dienstleistungen', { state: { serviceId } })
		}, 100) // Match this with the CSS transition duration
	}

	return (
		<div className={`services ${fadeOut ? 'fade-out' : ''}`}>
			<div className='section-col section-col__left'>
				<Title text='Womit beschäftigen wir uns?' />
			</div>
			<div className='service__inner'>
				<div className='service__item--wrapper' onClick={() => handleServiceClick('service1')}>
					<div className='service__item service__item-1'>
						<h2 className='service__title'>Fassadenarbeiten</h2>
					</div>
				</div>
				<div className='service__item--wrapper' onClick={() => handleServiceClick('service2')}>
					<div className='service__item service__item-2'>
						<h2 className='service__title'>Malerarbeiten</h2>
					</div>
				</div>
				<div className='service__item--wrapper' onClick={() => handleServiceClick('service3')}>
					<div className='service__item service__item-3'>
						<h2 className='service__title'>Renovationen</h2>
					</div>
				</div>
				<div className='service__item--wrapper' onClick={() => handleServiceClick('service4')}>
					<div className='service__item service__item-4'>
						<h2 className='service__title'>Plarrenlegger</h2>
					</div>
				</div>
			</div>
		</div>
	)
}

export default Services
