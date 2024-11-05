import { FaArrowRightLong } from 'react-icons/fa6'

const Link = () => {
	return (
		<a className='link' href='#contact'>
			<span className='link-text'>Ich will mehr wissen</span>
			<span className='link-icon'>
				<FaArrowRightLong />
			</span>
		</a>
	)
}

export default Link
