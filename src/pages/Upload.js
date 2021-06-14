import React, { useState } from 'react';
import { useHistory } from 'react-router-dom';
import ImageUpload from '../components/ImageUpload';

export default function Upload() {
	const [inputs, setInputs] = useState({
		email: '',
		password: '',
		image: null
	});
	const [imgType, setImgType] = useState('solar');
	const [error, setError] = useState();
	const history = useHistory();

	const filePickedHandler = (id, file, isValid) =>
		setInputs(prevState => ({
			...prevState,
			image: file
		}));
	const inputChangeHandler = e =>
		setInputs(prevState => ({
			...prevState,
			[e.target.id]: e.target.value
		}));
	const typeChangeHandler = e => setImgType(e.target.value);

	const submitHandler = async e => {
		e.preventDefault();

		const formData = new FormData();
		formData.append('email', inputs.email);
		formData.append('password', inputs.password);
		formData.append('image', inputs.image);

		const response = await fetch(
			`http://46.217.16.106:8080/upload/${imgType}`,
			{
				method: 'POST',
				body: formData
			}
		);
		const data = await response.json();

		if (!response.ok) {
			return setError(data.msg);
		}

		setInputs({
			email: '',
			password: '',
			image: null
		});
		history.push('/');
	};

	return (
		<form
			id="uploadForm"
			className="container-small mt-2 p-2"
			onSubmit={submitHandler}>
			<h1 className="center M-heading mb-2 mt-1">Upload Image</h1>
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
			<div className="input-group center mt-1">
				<ImageUpload id="image" center onInput={filePickedHandler} />
			</div>
			<div className="radio-container mt-2 center">
				<label htmlFor="type" className="label">
					Image Type
				</label>
				<div className="radio-inputs mt-1">
					<label>
						<input
							type="radio"
							name="type"
							value="solar"
							checked={imgType === 'solar'}
							onChange={typeChangeHandler}
						/>{' '}
						Solar Systems
					</label>
					<label>
						<input
							type="radio"
							name="type"
							value="radiators"
							checked={imgType === 'radiators'}
							onChange={typeChangeHandler}
						/>{' '}
						Radiator Heating
					</label>
					<label>
						<input
							type="radio"
							name="type"
							value="electricity"
							checked={imgType === 'electricity'}
							onChange={typeChangeHandler}
						/>{' '}
						Electricity
					</label>
					<label>
						<input
							type="radio"
							name="type"
							value="plumbing"
							checked={imgType === 'plumbing'}
							onChange={typeChangeHandler}
						/>{' '}
						Plumbing
					</label>
					<label>
						<input
							type="radio"
							name="type"
							value="heating"
							checked={imgType === 'heating'}
							onChange={typeChangeHandler}
						/>{' '}
						Floor Heating
					</label>
					<label>
						<input
							type="radio"
							name="type"
							value="PVC"
							checked={imgType === 'PVC'}
							onChange={typeChangeHandler}
						/>{' '}
						Doors & Windows
					</label>
					<label>
						<input
							type="radio"
							name="type"
							value="AC"
							checked={imgType === 'AC'}
							onChange={typeChangeHandler}
						/>{' '}
						AC
					</label>
				</div>
			</div>
			{error && <p className="lead my-2 center">{error}</p>}
			<button type="submit" className="btn btn-block mt-3">
				Submit
			</button>
		</form>
	);
}
