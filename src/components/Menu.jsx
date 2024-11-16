import { useState, useEffect } from 'react'
import { Rotate as Hamburger } from 'hamburger-react'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faPhoneVolume } from '@fortawesome/free-solid-svg-icons'
import { NavLink, useNavigate } from 'react-router-dom'

function Menu() {
	const [isOpen, setIsOpen] = useState(false)
	const [scrolled, setScrolled] = useState(false)
	const [isMobile, setIsMobile] = useState(window.innerWidth < 996)

	const toggleMenu = () => {
		setIsOpen(!isOpen)
	}

	const closeMenu = () => {
		setIsOpen(false)
	}

	// Detect scroll for menu styling
	useEffect(() => {
		const handleScroll = () => {
			setScrolled(window.scrollY > 50)
		}

		window.addEventListener('scroll', handleScroll)
		return () => {
			window.removeEventListener('scroll', handleScroll)
		}
	}, [])

	// Update `isMobile` state based on window width
	useEffect(() => {
		const handleResize = () => {
			setIsMobile(window.innerWidth < 996)
		}

		window.addEventListener('resize', handleResize)
		return () => {
			window.removeEventListener('resize', handleResize)
		}
	}, [])

	const navigate = useNavigate()

	const handleNavigation = (path, scrollToId) => {
		if (isMobile) {
			// Navigate to the page and ensure the scroll is reset after rendering
			navigate(path)
			setTimeout(() => {
				window.scrollTo(0, 0) // Ensure scroll starts at the top
			}, 0) // Delayed to allow the page transition to complete
			closeMenu()
		} else {
			// For desktop, navigate with scrollToId
			navigate(path, { state: { scrollToId } })
			closeMenu()
		}
	}

	return (
		<div className={`menu ${scrolled ? 'scrolled' : ''}`}>
			<div className='menu__inner'>
				<div className='menu__mobile'>
					<NavLink className='menu__logo-wrapper menu__logo-wrapper-mobile' to='/'>
						<div className='menu__logo'></div>
					</NavLink>
					<div className={`menu__hamburger ${isOpen ? 'open' : ''}`} onClick={toggleMenu}>
						<Hamburger toggled={isOpen} toggle={setIsOpen} />
					</div>
					{isOpen && (
						<ul className={`menu__list ${isOpen ? 'open' : ''}`}>
							<li className='menu__li'>
								<span className='menu__link' onClick={() => handleNavigation('/', null)}>
									home
								</span>
							</li>
							<li className='menu__li'>
								<span className='menu__link' onClick={() => handleNavigation('/uber-uns', 'uber-uns')}>
									über uns
								</span>
							</li>
							<li className='menu__li'>
								<span className='menu__link' onClick={() => handleNavigation('/dienstleistungen', 'dienstleistungen')}>
									dienstleistungen
								</span>
							</li>
							<li className='menu__li'>
								<span className='menu__link' onClick={() => handleNavigation('/projekte', 'projekte')}>
									projekte
								</span>
							</li>
							<li className='menu__li'>
								<span
									className='menu__link menu__link--contact'
									onClick={() => handleNavigation('/kontakt', 'kontakt')}>
									kontakt
								</span>
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

				<div className='menu__desktop'>
					<NavLink className='menu__logo-wrapper' to='/'>
						<div className='menu__logo'></div>
					</NavLink>
					<ul className='menu__list-desktop'>
						<li className='menu__li-desktop'>
							<NavLink className='menu__link' to='/' onClick={closeMenu}>
								home
							</NavLink>
						</li>
						<li className='menu__li-desktop'>
							<span className='menu__link' onClick={() => handleNavigation('/uber-uns', 'uber-uns')}>
								über uns
							</span>
						</li>
						<li className='menu__li-desktop'>
							<span className='menu__link' onClick={() => handleNavigation('/dienstleistungen', 'dienstleistungen')}>
								dienstleistungen
							</span>
						</li>
						<li className='menu__li-desktop'>
							<span className='menu__link' onClick={() => handleNavigation('/projekte', 'projekte')}>
								projekte
							</span>
						</li>
						<li className='menu__li-desktop'>
							<span className='menu__link' onClick={() => handleNavigation('/kontakt', 'kontakt')}>
								kontakt
							</span>
						</li>
					</ul>
				</div>
			</div>
		</div>
	)
}

export default Menu