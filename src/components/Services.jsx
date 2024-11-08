import Title from './Title'
const Services = () => {
	return (
		<div>
			<div className='services' id='services'>
				<div className='section-col section-col__left'>
					<Title text='Womit beschäftigen wir uns?' />
				</div>
				<div className='service__inner'>
					<div className='service__item--wrapper'>
						<div className='service__item-1 service__item'>
							<h2 className='service__title'>Fassadenarbeiten</h2>
						</div>
					</div>
					<div className='service__item--wrapper'>
						<div className='service__item service__item-2'>
							<h2 className='service__title'>Malerarbeiten</h2>
						</div>
					</div>
					<div className='service__item--wrapper'>
						<div className='service__item service__item-3'>
							<h3 className='service__title'>Renovationen</h3>
						</div>
					</div>
					<div className='service__item--wrapper'>
						<div className='service__item service__item-4'>
							<h2 className='service__title'>Plarrenlegger</h2>
						</div>
					</div>
				</div>
			</div>
		</div>
	)
}

export default Services
