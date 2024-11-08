import { useLocation } from 'react-router-dom'
import Header from './Header'

const Services = () => {
	const location = useLocation()

	return (
		<div>
			{location.pathname === '/services' && <Header />}
			<div className='services'>
			<div className='service__inner'>
			<div className='service__item service__item-1'>
					<h2 className='service__title'>Fassadenarbeiten</h2>
				</div>
				<div className='service__item service__item-2'>
					<h2 className='service__title'>Malerarbeiten</h2>
				</div>
				<div className='service__item service__item-3'>
					<h3 className='service__title'>Renovationen</h3>
				</div>
				<div className='service__item service__item-4'>
					<h2 className='service__title'>Plarrenlegger</h2>
				</div>

			</div>
			</div>
		</div>
	)
}

export default Services
