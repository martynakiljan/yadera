import BigImage from './BigImage'
import Title from './Title'
import img from '../assets/images/images/image4.jpeg'

const ServicesDetails = () => {
	return (
		<div>
			<BigImage img={img} />
			<div className='services-details' id='dienstleistungen'>
				<div className='section-col section-col__left'>
					<Title text='Womit beschäftigen wir uns?' />
				</div>

				<div className='services-details__inner'>
					<div className='service-detail service-detail__1'>
						<h2 className='service-detail__title'>Fassadenarbeiten</h2>
						<ul className='service-detail__list list'>
							<ul className='sub-list'>
								<p className='list-subtitle'> Montage Arbeiten im HF-Bereich:</p>
								<li className='sub-list-item'>Unterkonstruktionen Alu / Holz</li>
								<li className='sub-list-item'>Unterkonstruktionen Alu / Alu</li>
								<li className='sub-list-item'>Dämmung Mineral oder Steinwolle</li>
								<li className='sub-list-item'>Fensterbänke / Zargen Montage</li>
								<li className='sub-list-item'>Dachrandabdeckungen / Mauerkronenabdeckungen</li>
								<p className='list-subtitle'> Montage verschiedenster Bekleidungen:</p>
								<li className='sub-list-item'>Eternit</li>
								<li className='sub-list-item'>Naturschiefer</li>
								<li className='sub-list-item'>Alucobond</li>
								<li className='sub-list-item'>Wellblech/gelochtes Wellblech</li>
								<li className='sub-list-item'>Flachblech</li>
								<li className='sub-list-item'>Fundermax-Platten Exterior</li>
								<li className='sub-list-item'>Künstlicher Rasenteppich</li>
								<li className='sub-list-item'>Trespa Meteon</li>
								<li className='sub-list-item'>Slimtech</li>
								<li className='sub-list-item'>Lisenen</li>
								<li className='sub-list-item'>Stahlblech</li>
								<li className='sub-list-item'>Montana Sandwich Panele</li>
								<li className='sub-list-item'>Putzträgerplatten</li>
								<li className='sub-list-item'>etc.</li>
							</ul>
						</ul>
					</div>

					<div className='service-detail service-detail__2'>
						<h2 className='service-detail__title'> Malerarbeiten</h2>
						<ul className='service-detail__list list'>
							<li className='list-item'>Innere & Äussere Malerarbeiten</li>
							<li className='list-item'>Schimmel Sanierungen</li>
							<li className='list-item'>Spritzarbeiten</li>
							<li className='list-item'>Tapezierarbeiten</li>
							<li className='list-item'>Strassenmarkierungen</li>
							<li className='list-item'>Dekorative Arbeiten</li>
							<li className='list-item'>Fassadenreinigungen</li>
						</ul>
					</div>

					<div className='service-detail service-detail__3'>
						<h2 className='service-detail__title'> Renovationen</h2>
						<ul className='service-detail__list  list'>
							<li className='list-item'>Innere & Äussere Malerarbeiten</li>
							<li className='list-item'>Schimmel Sanierungen</li>
							<li className='list-item'>Spritzarbeiten</li>
							<li className='list-item'>Tapezierarbeiten</li>
							<li className='list-item'>Strassenmarkierungen</li>
							<li className='list-item'>Dekorative Arbeiten</li>
							<li className='list-item'>Fassadenreinigungen</li>
						</ul>
					</div>

					<div className='service-detail service-detail__4'>
						<h2 className='service-detail__title'> Plattenlegger</h2>
						<ul className='list'>
							<li className='list-item'>Innere & Äussere Malerarbeiten</li>
							<li className='list-item'>Schimmel Sanierungen</li>
							<li className='list-item'>Spritzarbeiten</li>
							<li className='list-item'>Tapezierarbeiten</li>
							<li className='list-item'>Strassenmarkierungen</li>
							<li className='list-item'>Dekorative Arbeiten</li>
							<li className='list-item'>Fassadenreinigungen</li>
						</ul>
					</div>
				</div>
			</div>
		</div>
	)
}

export default ServicesDetails
