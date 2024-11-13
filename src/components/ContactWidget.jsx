import { MdOutlineEmail } from 'react-icons/md'

import { IoIosPhonePortrait } from 'react-icons/io'
import { NavLink } from 'react-router-dom'
const ContactWidget = () => {
	return (
		<div className='contact-widget'>
			<NavLink to='/kontakt'>
				<MdOutlineEmail />
			</NavLink>

			<a href='tel:+41791332929'>
				<IoIosPhonePortrait />
			</a>
		</div>
	)
}

export default ContactWidget
