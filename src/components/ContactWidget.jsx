import { FaWhatsapp } from 'react-icons/fa'
import { NavLink } from 'react-router-dom'


const ContactWidget = () => {
	return (
		<div className='contact-widget'>
			<NavLink to='/kontakt'>
				<FaWhatsapp />
			</NavLink>
		</div>
	)
}

export default ContactWidget
