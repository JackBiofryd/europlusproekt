import React, { useState, useContext } from 'react';
import LangContext from '../context/lang-context';

export default function Contact() {
	const [inputs, setInputs] = useState({
		firstName: '',
		lastName: '',
		email: '',
		phone: '',
		message: ''
	});
	const langContext = useContext(LangContext);

	const [sendEmailBtnText, setSendEmailBtnText] = useState('Submit');

	const handleChange = e =>
		setInputs(prevState => ({
			...prevState,
			[e.target.name]: e.target.value
		}));

	const handleSubmit = async e => {
		e.preventDefault();
		setSendEmailBtnText('Sending Email...');

		const eData = {
			access_token: 'aq9die7qk4h96d634xm3wdzt',
			subject: 'EURO PLUS PROEKT CONTACT MESSAGE',
			text: `Name: ${inputs.firstName} ${inputs.lastName}\nEmail: ${inputs.email}\nPhone: ${inputs.phone}\nMessage: ${inputs.message}`
		};

		const paramsToSend = toParams(eData);

		const response = await fetch('https://postmail.invotes.com/send', {
			method: 'POST',
			headers: {
				'Content-Type': 'application/x-www-form-urlencoded'
			},
			body: paramsToSend
		});

		setSendEmailBtnText(
			response.ok ? 'Email Sent!' : 'Email Not Sent. Please try again :('
		);

		setInputs({
			firstName: '',
			lastName: '',
			email: '',
			phone: '',
			message: ''
		});
	};

	const toParams = data => {
		const form_data = [];
		for (let key in data) {
			form_data.push(
				encodeURIComponent(key) + '=' + encodeURIComponent(data[key])
			);
		}

		return form_data.join('&');
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
								placeholder={
									langContext.isMk ? 'Марко' : 'John'
								}
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
									langContext.isMk ? 'Петров' : 'Doe'
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
								placeholder="johndoe@gmail.com"
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
								placeholder="071-555-555"
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
							placeholder={
								langContext.isMk ? 'Порака' : 'Message'
							}
						/>
					</div>
					<input
						type="submit"
						value={sendEmailBtnText}
						className="btn btn-block btn-inverse mt-3"
					/>
				</form>
			</div>
		</div>
	);
}
