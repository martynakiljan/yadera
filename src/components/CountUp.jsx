import { useEffect, useRef, useState } from 'react'
import Link from './Link'
const CountUp = () => {
	const [count, setCount] = useState(0)
	const target = 48 // Target number for the count-up
	const elementRef = useRef(null) // Reference for the element
	const hasAnimated = useRef(false) // To ensure animation runs only once

	useEffect(() => {
		const handleCountUp = () => {
			let start = 0
			const duration = 2000 // Duration in ms
			const startTime = performance.now()

			const updateCount = currentTime => {
				const elapsed = currentTime - startTime
				const progress = Math.min(elapsed / duration, 1) // Clamps progress at 1
				const newValue = start + progress * (target - start)

				setCount(parseFloat(newValue.toFixed(1)))

				if (progress < 1) {
					requestAnimationFrame(updateCount) // Continue animation
				}
			}

			requestAnimationFrame(updateCount) // Start animation
		}

		const observer = new IntersectionObserver(
			entries => {
				entries.forEach(entry => {
					if (entry.isIntersecting && !hasAnimated.current) {
						handleCountUp() // Trigger count-up animation
						hasAnimated.current = true // Ensure it runs only once
					}
				})
			},
			{ threshold: 0.1 } // Trigger when 10% of the element is visible
		)

		if (elementRef.current) {
			observer.observe(elementRef.current)
		}

		return () => {
			if (elementRef.current) observer.unobserve(elementRef.current)
		}
	}, [target])

	return (
		<div className='section count-up__section'>
			<div className='section-col section-col__left'></div>
			<div className='section-col section-col__right'>
				<p className='about__text-wrapper'>
					<div className='count-up' ref={elementRef}>
						<div className='count-up__number'>+ {count}</div>
						<p className='count-up__text'>abgeschlossene Projekte</p>
					</div>
					<Link text='Ich möchte die Projekte sehen!' />
				</p>
			</div>
		</div>
	)
}

export default CountUp
