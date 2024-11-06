import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faPhone, faLocationDot } from '@fortawesome/free-solid-svg-icons'

const Footer = () => {
	return (
		<div className='footer'>
			<div className='footer__inner'>
				<div className='footer__col'>
					{' '}
					<a className='footer-logo' href='#home' />
				</div>
				<div className='footer__col'>
					<ul className='menu__list-footer'>
						<li className='menu__li'>
							<a className='menu__link menu__link--footer' href='#home'>
								home
							</a>
						</li>
						<li className='menu__li'>
							<a className='menu__link menu__link--footer' href='#about'>
								über uns
							</a>
						</li>
						<li className='menu__li'>
							<a className='menu__link menu__link--footer' href='#services'>
								dienstleistungen
							</a>
						</li>
						<li className='menu__li'>
							<a className='menu__link menu__link--footer' href='#projects'>
								projekte
							</a>
						</li>
						<li className='menu__li'>
							<a className='menu__link menu__link--footer' href='#reviews'>
							referenzen
							</a>
						</li>
						<li className='menu__li'>
							<a className='menu__link menu__link--footer' href='#contact'>
								kontakt
							</a>
						</li>
					</ul>
				</div>
				<div className='footer__col'>
					<div>
						<FontAwesomeIcon icon={faPhone} />
					</div>
					<div>
						{' '}
						<p className='contact__title '>Kontakt</p>
						<a className='contact__tel' href='tel:+41791332929'>
							+41 79 133 29 29{' '}
						</a>
						<a className='contact__email' href='mailto:info@yadera.ch'>
							info@yadera.ch
						</a>
					</div>
				</div>
				<div className='contact__col'>
					<div>
						<FontAwesomeIcon icon={faLocationDot} />
					</div>
					<a href='https://maps.app.goo.gl/9P5jcE5JLoMsr5b78'>
						<p className='contact__title'>Standort</p>
						<p className='contact__street'>Dorfstrasse 11a</p>
						<p className='contact__city'>8603 Schwerzenbach</p>
					</a>
				</div>
			</div>
			<p className='footer-copy'>Copyright © 2024 Yadera GmbH </p>
		</div>
	)
}

export default Footer
