import React, { useState, useContext } from 'react';
import emailjs from 'emailjs-com';
import LangContext from '../context/lang-context';

export default function Contact() {
	const [inputs, setInputs] = useState({
		firstName: '',
		lastName: '',
		email: '',
		phone: '',
		message: ''
	});
	const { isMk } = useContext(LangContext);

	const [sendEmailBtnText, setSendEmailBtnText] = useState('Submit');

	const handleChange = e =>
		setInputs(prevState => ({
			...prevState,
			[e.target.name]: e.target.value
		}));

	const handleSubmit = async e => {
		e.preventDefault();
		setSendEmailBtnText(isMk ? 'Се Испраќа...' : 'Sending Email...');

		emailjs
			.sendForm(
				'service_ovbxl8q',
				'template_pu1edz8',
				e.target,
				'user_sx7hNqA0pzja1ztvJtPFq'
			)
			.then(
				result => {
					setSendEmailBtnText(isMk ? 'Испратено!' : 'Email Sent!');
				},
				error => {
					setSendEmailBtnText(
						isMk ? 'Е-маилот не е испратен :(' : 'Email not sent :('
					);
					console.log(error.text);
				}
			);

		setInputs({
			firstName: '',
			lastName: '',
			email: '',
			phone: '',
			message: ''
		});
	};

	return (
		<div className="contact-container" id="contact">
			<div className="p-2 py-4 container-small center">
				<p className="lead bold mb-1 en">Contact</p>
				<p className="lead bold mb-1 mk">Контакт</p>
				<h3 className="ML-heading en">
					So, let's start your next project.
				</h3>
				<h3 className="ML-heading mk">
					Ајде да ја оствариме вашата замисла!
				</h3>

				<div className="flex-container space-between mt-3 px-2">
					<div className="phone-container">
						<p className="lead bold mb-1 en">Phone</p>
						<h3 className="ML-heading en">070 314 997</h3>
						<p className="lead bold mb-1 mk">Телефонски број</p>
						<h3 className="ML-heading mk">070 314 997</h3>
					</div>
					<div className="address-container">
						<p className="lead bold mb-1 en">Address</p>
						<p className="lead bold mb-1 mk">Адреса</p>
						<h3 className="ML-heading en">Gorce Petrov 47</h3>
						<h3 className="ML-heading mk">Ѓорче Петров 47</h3>
					</div>
				</div>
				<hr className="line line-light mt-1" />
				<form onSubmit={handleSubmit} className="contact-form mt-3">
					<div className="flex-group">
						<div className="input-group">
							<label htmlFor="firstName" className="label en">
								First Name
							</label>
							<label htmlFor="firstName" className="label mk">
								Име
							</label>
							<input
								type="text"
								className="input"
								name="firstName"
								id="firstName"
								value={inputs.firstName}
								onChange={handleChange}
								placeholder={isMk ? 'Име...' : 'Name...'}
							/>
						</div>
						<div className="input-group">
							<label htmlFor="lastName" className="label en">
								Last Name
							</label>
							<label htmlFor="lastName" className="label mk">
								Презиме
							</label>
							<input
								type="lastName"
								className="input"
								name="lastName"
								id="lastName"
								value={inputs.lastName}
								onChange={handleChange}
								placeholder={
									isMk ? 'Презиме...' : 'Last Name...'
								}
							/>
						</div>
					</div>
					<div className="flex-group">
						<div className="input-group">
							<label htmlFor="email" className="label en">
								Email
							</label>
							<label htmlFor="email" className="label mk">
								Е-маил
							</label>
							<input
								type="email"
								className="input"
								name="email"
								id="email"
								value={inputs.email}
								onChange={handleChange}
								placeholder={isMk ? 'Е-маил...' : 'Email...'}
							/>
						</div>
						<div className="input-group">
							<label htmlFor="phone" className="label en">
								Phone Number
							</label>
							<label htmlFor="phone" className="label mk">
								Телефонски број
							</label>
							<input
								type="text"
								className="input"
								name="phone"
								id="phone"
								value={inputs.phone}
								onChange={handleChange}
								placeholder={isMk ? 'Број...' : 'Number...'}
							/>
						</div>
					</div>
					<div className="input-group">
						<label htmlFor="message" className="label en">
							Anything else to add?
						</label>
						<label htmlFor="message" className="label mk">
							Нешто да дополнете?
						</label>
						<textarea
							type="text"
							className="input"
							name="message"
							id="message"
							value={inputs.message}
							onChange={handleChange}
							cols="10"
							rows="10"
							placeholder={isMk ? 'Порака...' : 'Message...'}
						/>
					</div>
					<input
						type="submit"
						value={
							sendEmailBtnText === 'Submit' && isMk
								? 'Испрати'
								: sendEmailBtnText
						}
						className="btn btn-block btn-inverse mt-3"
					/>
					<input
						type="hidden"
						value={`${inputs.firstName} ${inputs.lastName}`}
						name="name"
						id="name"
					/>
				</form>
			</div>
		</div>
	);
}
