import Title from './Title'
import Images from './Images'

const Story = () => {
	return (
		<div className='section section-story'>
			<div className='section-col section-col__left'>
				<Title text='unsere Gesichte' />
			</div>
			<div className='section-col section-col__right'>
				<p className='strory__text-wrapper'>
					<span className='story__text'>
						Die Yadera GmbH wurde 2021 gegründet und ist in drei Arbeitsgattungen unterteilt.
					</span>
				</p>
				<Images />
			</div>
		</div>
	)
}

export default Story
