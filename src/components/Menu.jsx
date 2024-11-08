import { useState, useEffect } from 'react'
import { Rotate as Hamburger } from 'hamburger-react'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faPhoneVolume } from '@fortawesome/free-solid-svg-icons'
import { NavLink } from 'react-router-dom'

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
				<NavLink className='menu__logo-wrapper' to='/'>
					<div className='menu__logo'></div>
				</NavLink>
				<div className={`menu__hamburger ${isOpen ? 'open' : ''}`} onClick={toggleMenu}>
					<Hamburger toggled={isOpen} toggle={setIsOpen} />
				</div>
				{isOpen && (
					<ul className={`menu__list ${isOpen ? 'open' : ''}`}>
						<li className='menu__li'>
							<NavLink className='menu__link' to='/' onClick={closeMenu}>
								home
							</NavLink>
						</li>
						<li className='menu__li'>
							<NavLink className='menu__link' to='/about' onClick={closeMenu}>
								über uns
							</NavLink>
						</li>
						<li className='menu__li'>
							<NavLink className='menu__link' to='/dienstleistunfen' onClick={closeMenu}>
								dienstleistungen
							</NavLink>
						</li>
						<li className='menu__li'>
							<NavLink className='menu__link' to='/projekte' onClick={closeMenu}>
								projekte
							</NavLink>
						</li>
			
						<li className='menu__li'>
							<NavLink className='menu__link menu__link--contact' to='/contact' onClick={closeMenu}>
								kontakt
							</NavLink>
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
