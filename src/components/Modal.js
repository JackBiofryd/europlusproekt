import React from 'react';
import ReactDOM from 'react-dom';

export default function Modal(props) {
	const content = (
		<div className={`modal ${props.hide && 'modal-hide'}`}>
			<button className="btn btn-topleft" onClick={props.onCancel}>
				<i className="fas fa-times"></i>
			</button>
			<div className="container">{props.children}</div>
		</div>
	);

	return ReactDOM.createPortal(
		content,
		document.querySelector('#modalContainer')
	);
}
