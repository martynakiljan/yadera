import Header from './Header'
import Slider from './Slider'
import Services from './Services'
import Reviews from './Reviews'
import Welcome from './Welcome'
import Slider2 from './Slider2'
import About from './About'
import CountUp from './CountUp'

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
			<Slider2 />
		</>
	)
}

export default Home
