import img from '../assets/images/images/image-13.jpeg'
import BigImage from './BigImage'
import Title from './Title'
import projects from '../data/projects'
import { IoIosArrowUp } from 'react-icons/io'
const Projects = () => {
	return (
		<div id='projekte'>
			<BigImage img={img} />
			<div className='projects'>
				<div className='section-col section-col__left '>
					<Title text='unsere projekte' />
				</div>

				<div className='projects__inner'>
					{projects.map((project, index) => (
						<div className={`project__item ${index % 2 !== 0 ? 'revert' : ''}`}>
							<div className='project' key={index}>
								<div className='project-wrapper'>
									<div className='project-img' style={{ backgroundImage: `url(${project.url})` }}></div>
								</div>
								<div className='project-info'>
									<h3 className='project-title'>{project.title}</h3>
								</div>
								<div className='project-info__active'>
									<div className='project-info__active--text'>
										<h3 className='project-info__active-title'>{project.title}</h3>
										<p className='project-info-text'>
											<span className='project-info-text__title'>Type:</span> {project.buildingType}
										</p>
										<p className='project-info-text'>
											<span className='project-info-text__title'>Construction Type:</span> {project.constructionType}
										</p>
										<p className='project-info-text'>
											<span className='project-info-text__title'>Completion Year:</span> {project.completionYear}
										</p>
										<p className='project-info-text'>
											<span className='project-info-text__title'>Description:</span> {project.description}
										</p>
									</div>
								</div>
							</div>

							<div className='project__btn-more'>
								<span className='project__btn-more-text'>mehr informationen </span>
								<IoIosArrowUp />
							</div>
						</div>
					))}
				</div>
			</div>
		</div>
	)
}

export default Projects
