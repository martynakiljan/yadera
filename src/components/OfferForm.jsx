import BigImage from './BigImage'
import { useEffect } from 'react'
import img from '../assets/images/images/image-9.jpg'
import Title from './Title'
import { useState } from 'react'
import { useForm } from 'react-hook-form'
import ClipLoader from 'react-spinners/ClipLoader'

const OffertForm = () => {
	const {
		register,
		handleSubmit,
		reset,
		formState: { errors },
	} = useForm()

	const [isSubmitting, setIsSubmitting] = useState()
	const [isSubmitted, setIsSubmitted] = useState()

	const onSubmit = () => {
		setIsSubmitting(true)
		setTimeout(() => {
			setIsSubmitting(false)
			setIsSubmitted(true)

			setTimeout(() => {
				setIsSubmitted(false)
				reset()
			}, 3000)
		}, 1500)
	}

	return (
		<div>
			<>
				<BigImage img={img} />
				<h1 className='offer-title section' id='offerte'>
					Möchten Sie mehr über unsere Dienstleistungen erfahren oder eine individuelle Offerte für Ihr Projekt
					erhalten? Kontaktieren Sie uns einfach! Wir erstellen Ihnen gerne ein transparentes und unverbindliches
					Angebot, das genau auf Ihre Wünsche und Anforderungen abgestimmt ist. Bei Yadera GmbH legen wir großen Wert
					auf klare Kommunikation, faire Preise und eine zuverlässige Umsetzung. Lassen Sie uns gemeinsam Ihre Ideen
					realisieren!
				</h1>
				<div className='section'>
					<div className='section-col section-col__left'>
						<Title text='Wünschen Sie eine Offerte?' />
						<p></p>
					</div>
					<div className='section-col section-col__right'>
						<div className='contact-form'>
							{isSubmitted ? (
								<p className='thank-you-message'>Danke. Wir werden Sie bald kontaktieren!</p>
							) : (
								<form onSubmit={handleSubmit(onSubmit)}>
									<div className='form-group'>
										<label htmlFor='name'>Ihr Name</label>
										<input
											id='name'
											type='text'
											placeholder='Gabriel'
											{...register('name', { required: 'Name ist erforderlich' })}
										/>
										{errors.name && <p className='error-message'>{errors.name.message}</p>}
									</div>

									<div className='form-group'>
										<label htmlFor='email'>E-Mail</label>
										<input
											id='email'
											type='email'
											placeholder='gabriel345@gmail.com'
											{...register('email', { required: 'E-Mail ist erforderlich' })}
										/>
										{errors.email && <p className='error-message'>{errors.email.message}</p>}
									</div>
									<div className='form-group'>
										<label htmlFor='phone'>Telefon</label>
										<input
											id='phone'
											type='phone'
											placeholder='+41 767 342 245'
											{...register('phone', { required: 'Telefon ist erforderlich' })}
										/>
										{errors.phone && <p className='error-message'>{errors.phone.message}</p>}
									</div>
									<div className='checkbox-container'>
										<label>Wählen Sie die Dienstleistung aus, die Sie interessiert:</label>
										<div className='checkbox-group'>
											<div className='checkbox-item'>
												<input type='radio' value='Malerarbeiten' {...register('services')} id='malerarbeiten' />
												<label className='label-checkbox' htmlFor='malerarbeiten'>
													Malerarbeiten
												</label>
											</div>
											<div className='checkbox-item'>
												<input type='radio' value='Gipser' {...register('services')} id='gipser' />
												<label className='label-checkbox' tmlFor='gipser'>
													Gipser
												</label>
											</div>
											<div className='checkbox-item'>
												<input type='radio' value='Renovationen' {...register('services')} id='renovationen' />
												<label className='label-checkbox' htmlFor='renovationen'>
													Renovationen
												</label>
											</div>
											<div className='checkbox-item'>
												<input type='radio' value='Plattenlegger' {...register('services')} id='plattenlegger' />
												<label className='label-checkbox' htmlFor='plattenlegger'>
													Plattenlegger
												</label>
											</div>
											<div className='checkbox-item'>
												<input type='radio' value='other' {...register('services')} id='other' />
												<label className='label-checkbox' htmlFor='plattenlegger'>
													Es steht nicht auf der Liste
												</label>
											</div>
										</div>
									</div>

									<div className='form-group'>
										<label htmlFor='message'>Nachricht</label>
										<textarea
											id='message'
											placeholder='Ich bitte um ein Angebot...'
											{...register('message', { required: 'Nachricht ist erforderlich' })}></textarea>
										{errors.message && <p className='error-message'>{errors.message.message}</p>}
									</div>

									{isSubmitting ? (
										<ClipLoader color='#242527' size={24} />
									) : (
										<button type='submit' disabled={isSubmitting}>
											Absenden
										</button>
									)}
								</form>
							)}
						</div>
					</div>
				</div>
			</>
		</div>
	)
}

export default OffertForm
