import React, { useState, useEffect } from 'react';
import { useParams } from 'react-router-dom';
import { useMediaQuery } from 'react-responsive';
import { Link } from 'react-router-dom';
import Modal from '../components/Modal';

export default function Work() {
	const [imgIndex, setImgIndex] = useState(0);
	const [showMenu, setShowMenu] = useState(false);
	const [showModal, setShowModal] = useState(false);
	const [images, setImages] = useState();
	const { workType } = useParams();
	const isSmallScreen = useMediaQuery({
		query: '(max-width: 768px)'
	});

	useEffect(() => {
		const fetchFiles = async () => {
			const response = await fetch(
				`http://46.217.16.106:8080/getImages/${workType}`
			);
			const data = await response.json();

			setImages(data.files);
		};

		fetchFiles();
	}, [workType]);

	let navbar = (
		<nav className="navbar-secondary py-1">
			<div className="container-small center">
				<Link
					className={`work-link ${workType === 'solar' && 'current'}`}
					to="/work/solar">
					Solar
				</Link>
				<Link
					className={`work-link ${
						workType === 'radiators' && 'current'
					}`}
					to="/work/radiators">
					Radiators
				</Link>
				<Link
					className={`work-link ${
						workType === 'electricity' && 'current'
					}`}
					to="/work/electricity">
					Electricity
				</Link>
				<Link
					className={`work-link ${
						workType === 'plumbing' && 'current'
					}`}
					to="/work/plumbing">
					Pluming
				</Link>
				<Link
					className={`work-link ${
						workType === 'heating' && 'current'
					}`}
					to="/work/heating">
					Floor Heating
				</Link>
				<Link
					className={`work-link ${workType === 'PVC' && 'current'}`}
					to="/work/PVC">
					PVC
				</Link>
				<Link
					className={`work-link ${workType === 'AC' && 'current'}`}
					to="/work/AC">
					AC
				</Link>
			</div>
		</nav>
	);

	if (isSmallScreen) {
		navbar = (
			<React.Fragment>
				<div className="links navbar-secondary py-1">
					<div className="hamburger-menu">
						<i
							onClick={() => setShowMenu(prevState => !prevState)}
							className="fas fa-bars fa-2x"></i>

						<div
							className={`menu ${
								showMenu ? 'fade-in' : 'fade-out'
							}`}>
							<Link
								className={`work-link ${
									workType === 'solar' && 'current'
								}`}
								to="/work/solar">
								Solar
							</Link>
							<Link
								className={`work-link ${
									workType === 'radiators' && 'current'
								}`}
								to="/work/radiators">
								Radiators
							</Link>
							<Link
								className={`work-link ${
									workType === 'electricity' && 'current'
								}`}
								to="/work/electricity">
								Electricity
							</Link>
							<Link
								className={`work-link ${
									workType === 'plumbing' && 'current'
								}`}
								to="/work/plumbing">
								Pluming
							</Link>
							<Link
								className={`work-link ${
									workType === 'heating' && 'current'
								}`}
								to="/work/heating">
								Floor Heating
							</Link>
							<Link
								className={`work-link ${
									workType === 'PVC' && 'current'
								}`}
								to="/work/PVC">
								Woodwork
							</Link>
							<Link
								className={`work-link ${
									workType === 'AC' && 'current'
								}`}
								to="/work/AC">
								AC
							</Link>
						</div>
					</div>
					<div className="lang-btn">
						<button className="lang-change-btn">EN</button>
					</div>
				</div>
			</React.Fragment>
		);
	}

	const changeSlide = numOfSlides => {
		const images = document.getElementsByClassName('carousel-img');

		const prevIndex = imgIndex;
		let newIndex = imgIndex + numOfSlides;
		if (newIndex === -1) newIndex = images.length - 1;
		if (newIndex === images.length) newIndex = 0;
		setImgIndex(newIndex);

		for (let i = 0; i < images.length; i++) {
			images[i].style.display = 'none';
			images[i].classList.remove(
				'slide-from-right-to-middle',
				'slide-from-middle-to-left',
				'slide-from-left-to-middle',
				'slide-from-middle-to-right'
			);
		}

		images[prevIndex].style.display = 'inline';
		images[newIndex].style.display = 'inline';
		if (images.length === 1) return;
		if (numOfSlides < 0) {
			images[prevIndex].classList.add('slide-from-middle-to-right');
			images[newIndex].classList.add('slide-from-left-to-middle');
		} else {
			images[prevIndex].classList.add('slide-from-middle-to-left');
			images[newIndex].classList.add('slide-from-right-to-middle');
		}
	};

	const setSlide = slide => {
		setImgIndex(slide);
		console.log(slide);
		const images = document.getElementsByClassName('carousel-img');
		for (let i = 0; i < images.length; i++) {
			images[i].style.display = 'none';
		}
		images[slide].style.display = 'inline';
	};

	const onImgClick = e => {
		setShowModal(true);
		setSlide(Number(e.target.getAttribute('number')));
	};

	const getHeading = workType => {
		switch (workType) {
			case 'PVC':
				return 'Doors & Windows';
			case 'AC':
				return 'Air Conditioning';
			case 'electricity':
				return 'Electricity & Power';
			case 'solar':
				return 'Solar Systems';
			case 'radiators':
				return 'Radiator Heating';
			case 'plumbing':
				return 'Plumbing';
			case 'heating':
				return 'Floor Heating';
			default:
				return 'Our Work';
		}
	};

	return (
		<div>
			<Modal hide={!showModal} onCancel={() => setShowModal(false)}>
				<div className="arrow-left" onClick={() => changeSlide(-1)}>
					<i className="fas fa-arrow-left"></i>
				</div>
				<div className="arrow-right" onClick={() => changeSlide(1)}>
					<i className="fas fa-arrow-right"></i>
				</div>
				<div className="carousel">
					{images &&
						images.map((image, index) => (
							<img
								src={`http://46.217.16.106:8080/uploads/${workType}/${image}`}
								alt="Some of our work"
								className="carousel-img"
								key={index}
							/>
						))}
				</div>
			</Modal>

			<div className={`work-bg bg-${workType}`}>
				<Link to="/" className="btn btn-topleft">
					<i className="fas fa-arrow-left mr-0-5"></i>
					Home
				</Link>
				<h1 className="L-heading">{getHeading(workType)}</h1>
			</div>
			{navbar}
			<div className="img-container container mt-2 center">
				{images &&
					images.map((image, index) => (
						<img
							src={`http://46.217.16.106:8080/uploads/${workType}/${image}`}
							alt="Some of our work"
							onClick={onImgClick}
							key={index}
							number={index}
						/>
					))}
			</div>
		</div>
	);
}
