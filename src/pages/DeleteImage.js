import React, { useState } from 'react';
import { useParams, useHistory } from 'react-router-dom';

export default function DeleteImage() {
	const [inputs, setInputs] = useState({
		email: '',
		password: ''
	});
	const [error, setError] = useState();
	const { fileName } = useParams();
	const history = useHistory();

	const inputChangeHandler = e =>
		setInputs(prevState => ({
			...prevState,
			[e.target.id]: e.target.value
		}));

	const submitHandler = async e => {
		e.preventDefault();
		try {
			const response = await fetch(
				`${process.env.REACT_APP_BACKEND_URL}/deleteImage/${fileName}`,
				{
					method: 'POST',
					headers: {
						'Content-Type': 'application/json'
					},
					body: JSON.stringify({
						email: inputs.email,
						password: inputs.password
					})
				}
			);

			const data = await response.json();

			response.ok ? history.push('/') : setError(data.msg);
		} catch (err) {
			setError('An Error Occurred. Please Try Again.');
		}
	};

	return (
		<form
			id="uploadForm"
			className="container-small mt-2 p-2"
			onSubmit={submitHandler}>
			<h1 className="center M-heading mb-2 mt-1">Delete Image</h1>
			<p className="lead my-2 center">Please log in to delete images.</p>
			<div className="input-group">
				<label htmlFor="email" className="label">
					Email
				</label>
				<input
					type="email"
					id="email"
					name="email"
					className="input"
					placeholder="jdoe@gmail.com"
					onChange={inputChangeHandler}
					value={inputs.email}
				/>
			</div>
			<div className="input-group">
				<label htmlFor="password" className="label">
					Password
				</label>
				<input
					type="password"
					id="password"
					name="password"
					className="input"
					placeholder="Enter Password..."
					onChange={inputChangeHandler}
					value={inputs.password}
				/>
			</div>

			{error && <p className="lead my-2 center">{error}</p>}
			<button type="submit" className="btn btn-block mt-3">
				Submit
			</button>
		</form>
	);
}
