import React, { useRef, useState, useEffect } from 'react';

export default function ImageUpload(props) {
	const [file, setFile] = useState();
	const [previewURL, setPreviewURL] = useState();
	const [isValid, setIsValid] = useState(false);
	const filePickerRef = useRef();

	useEffect(() => {
		if (!file) return;
		const fileReader = new FileReader();
		// This function executes after reading a file
		fileReader.onload = () => setPreviewURL(fileReader.result);
		fileReader.readAsDataURL(file);
	}, [file]);

	const pickImageHandler = () => {
		filePickerRef.current.click();
	};

	const pickedHandler = e => {
		let pickedFile;
		let fileIsValid = isValid;
		if (e.target.files && e.target.files.length === 1) {
			pickedFile = e.target.files[0];
			setFile(pickedFile);
			setIsValid(true);
			fileIsValid = true;
		} else {
			setIsValid(false);
			fileIsValid = false;
		}

		props.onInput(props.id, pickedFile, fileIsValid);
	};

	return (
		<div className="form-control">
			<input
				id={props.id}
				style={{ display: 'none' }}
				type="file"
				accept=".jpg,.png,.jpeg"
				ref={filePickerRef}
				onChange={pickedHandler}
			/>
			<div className={`image-upload ${props.center && 'center'}`}>
				{file && (
					<div className="image-upload-preview">
						{previewURL && <img src={previewURL} alt="Preview" />}
					</div>
				)}
				<button
					className="btn"
					type="button"
					onClick={pickImageHandler}>
					Pick Image
				</button>
			</div>
			{!isValid && <p>{props.errorText}</p>}
		</div>
	);
}
