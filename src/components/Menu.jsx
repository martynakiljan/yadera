import { useState, useEffect } from 'react'
import { Rotate as Hamburger } from 'hamburger-react'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faPhoneVolume } from '@fortawesome/free-solid-svg-icons'

function Menu() {
	const [isOpen, setIsOpen] = useState(false)
	const [scrolled, setScrolled] = useState(false)

	const toggleMenu = () => {
		setIsOpen(!isOpen)
	}

	const closeMenu = () => {
		setIsOpen(false)
	}

	useEffect(() => {
		const handleScroll = () => {
			setScrolled(window.scrollY > 50)
		}

		window.addEventListener('scroll', handleScroll)
		return () => {
			window.removeEventListener('scroll', handleScroll)
		}
	}, [])

	return (
		<div className={`menu ${scrolled ? 'scrolled' : ''}`}>
			<div className='menu__inner'>
				<a className='menu__logo-wrapper' href='#home'>
					<div className='menu__logo'></div>
				</a>
				<div className={`menu__hamburger ${isOpen ? 'open' : ''}`} onClick={toggleMenu}>
					<Hamburger toggled={isOpen} toggle={setIsOpen} />
				</div>
				{isOpen && (
					<ul className={`menu__list ${isOpen ? 'open' : ''}`}>
						<li className='menu__li'>
							<a className='menu__link' href='#home' onClick={closeMenu}>
								home
							</a>
						</li>
						<li className='menu__li'>
							<a className='menu__link' href='#about' onClick={closeMenu}>
								über uns
							</a>
						</li>
						<li className='menu__li'>
							<a className='menu__link' href='#services' onClick={closeMenu}>
								dienstleistungen
							</a>
						</li>
						<li className='menu__li'>
							<a className='menu__link' href='#projects' onClick={closeMenu}>
								projekte
							</a>
						</li>
						<li className='menu__li'>
							<a className='menu__link' href='#reviews' onClick={closeMenu}>
								referenzen
							</a>
						</li>
						<li className='menu__li'>
							<a className='menu__link menu__link--contact' href='#contact' onClick={closeMenu}>
								kontakt
							</a>
						</li>
					</ul>
				)}
				<div className='menu-contact'>
					<a className='menu__link menu__link--contact' href='tel:+41791332929'>
						<span>
							<FontAwesomeIcon icon={faPhoneVolume} />
						</span>{' '}
						<span className='menu__Link menu__link--phone'>+41 79 133 29 29</span>
					</a>
				</div>
			</div>
		</div>
	)
}

export default Menu
