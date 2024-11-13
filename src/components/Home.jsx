import Header from './Header'
import Slider from './Slider'
import Services from './Services'
import Reviews from './Reviews'
import Welcome from './Welcome'
import SliderLogos from './SliderLogos'
import About from './About'
import CountUp from './CountUp'
import ContactWidget from './ContactWidget'

const Home = () => {
	return (
		<>
			<Header />
			<Welcome />
			<Services />
			<About />
			<CountUp />
			<Slider />
			<Reviews />
			<SliderLogos />
		</>
	)
}

export default Home
