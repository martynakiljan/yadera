import BigImage from './BigImage'
import Title from './Title'
import img from '../assets/images/images/image4.jpeg'
import { useEffect } from 'react'
import { useLocation } from 'react-router-dom'

const ServicesDetails = () => {
	const location = useLocation()
	const serviceId = location.state?.serviceId
	useEffect(() => {

		window.scrollTo({ top: 0, behavior: 'instant' })
		if (serviceId) {
			const element = document.getElementById(serviceId)
			if (element) {
				setTimeout(() => {
					element.scrollIntoView({ behavior: 'smooth', block: 'start' })
				}, 200) 
			}
		}
	}, [serviceId])

	return (
		<div>
			<BigImage img={img} />
			<div className='services-details'>
				<div className='section-col section-col__left'>
					<Title text='Womit beschäftigen wir uns?' />
				</div>
				<div className='services-details__inner' id='dienstleistungen'>
					<div className='service-detail service-detail__1' id='service1'>
						<h2 className='service-detail__title'>Fassadenarbeiten</h2>
						<div className='service-detail__list list'>
							<div className='sub-list sub-list__columns'>
								<ul className='sub-list__col'>
									<p className='list-subtitle'> Montage Arbeiten im HF-Bereich:</p>
									<li className='list-item'>Unterkonstruktionen Alu / Holz</li>
									<li className='list-item'>Unterkonstruktionen Alu / Alu</li>
									<li className='list-item'>Dämmung Mineral oder Steinwolle</li>
									<li className='list-item'>Fensterbänke / Zargen Montage</li>
									<li className='list-item'>Mauerkronenabdeckungen</li>
									<li className='list-item'>Dachrandabdeckungen</li>
								</ul>

								<div className='sub-list__col'>
									<p className='list-subtitle'> Montage verschiedenster Bekleidungen:</p>
									<li className='list-item'>Eternit</li>
									<li className='list-item'>Naturschiefer</li>
									<li className='list-item'>Alucobond</li>
									<li className='list-item'>Wellblech/gelochtes Wellblech</li>
									<li className='list-item'>Flachblech</li>
									<li className='list-item'>Fundermax-Platten Exterior</li>
									<li className='list-item'>Künstlicher Rasenteppich</li>
									<li className='list-item'>Trespa Meteon</li>
									<li className='list-item'>Slimtech</li>
									<li className='list-item'>Lisenen</li>
									<li className='list-item'>Stahlblech</li>
									<li className='list-item'>Montana Sandwich Panele</li>
									<li className='list-item'>Putzträgerplatten</li>
									<li className='list-item'>etc.</li>
								</div>
							</div>
						</div>
					</div>

					<div className='service-detail service-detail__2' id='service2'>
						<h2 className='service-detail__title'> Malerarbeiten</h2>

						<div className='sub-list sub-list__columns'>
							<div className='sub-list__col'>
								<li className='list-item'>Innere & Äussere Malerarbeiten</li>
								<li className='list-item'>Schimmel Sanierungen</li>
								<li className='list-item'>Spritzarbeiten</li>
							</div>

							<div className='sub-list__col'>
								<li className='list-item'>Tapezierarbeiten</li>
								<li className='list-item'>Strassenmarkierungen</li>
								<li className='list-item'>Dekorative Arbeiten</li>
								<li className='list-item'>Fassadenreinigungen</li>
							</div>
						</div>
						<ul className='service-detail__list list'></ul>
					</div>

					<div className='service-detail service-detail__3' id='service3'>
						<h2 className='service-detail__title'> Renovationen</h2>

						<div className='sub-list sub-list__columns'>
							<div className='sub-list__col'>
								{' '}
								<li className='list-item'>Innere & Äussere Malerarbeiten</li>
								<li className='list-item'>Schimmel Sanierungen</li>
								<li className='list-item'>Spritzarbeiten</li>
								<li className='list-item'>Tapezierarbeiten</li>
							</div>
							<div className='sub-list__col'>
								<li className='list-item'>Strassenmarkierungen</li>
								<li className='list-item'>Dekorative Arbeiten</li>
								<li className='list-item'>Fassadenreinigungen</li>
							</div>
						</div>
					</div>

					<div className='service-detail service-detail__4' id='service4'>
						<h2 className='service-detail__title'> Plattenlegger</h2>
						<div className='sub-list sub-list__columns'>
							<div className='sub-list__col'>
								{' '}
								<li className='list-item'>Innere & Äussere Malerarbeiten</li>
								<li className='list-item'>Schimmel Sanierungen</li>
								<li className='list-item'>Spritzarbeiten</li>
								<li className='list-item'>Tapezierarbeiten</li>
							</div>
							<div className='sub-list__col'>
								<li className='list-item'>Strassenmarkierungen</li>
								<li className='list-item'>Dekorative Arbeiten</li>
								<li className='list-item'>Fassadenreinigungen</li>
							</div>
						</div>
					</div>
				</div>
			</div>
		</div>
	)
}

export default ServicesDetails
