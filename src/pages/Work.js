import React, { useState, useEffect, useContext } from 'react';
import { useParams } from 'react-router-dom';
import { useMediaQuery } from 'react-responsive';
import { Link } from 'react-router-dom';
import Modal from '../components/Modal';
import LangContext from '../context/lang-context';

export default function Work() {
	const [imgIndex, setImgIndex] = useState(0);
	const [showMenu, setShowMenu] = useState(false);
	const [showModal, setShowModal] = useState(false);
	const [images, setImages] = useState();
	const { workType } = useParams();
	const isSmallScreen = useMediaQuery({
		query: '(max-width: 768px)'
	});
	const { isMk, setIsMk, setLang, lang } = useContext(LangContext);

	useEffect(() => {
		const fetchFiles = async () => {
			const response = await fetch(
				`https://europlusproekt.herokuapp.com/getImages/${workType}`
			);
			const data = await response.json();

			setImages(data.files);
		};

		fetchFiles();
	}, [workType]);

	const onLangChange = () => {
		if (isMk) {
			setIsMk(false);
			setLang('en');
			return;
		}

		setIsMk(true);
		setLang('mk');
	};

	let navbar = (
		<nav className="navbar-secondary py-1">
			<div className="container-small center">
				<Link
					className={`work-link ${workType === 'solar' && 'current'}`}
					to="/work/solar">
					{isMk ? 'Соларни' : 'Solar'}
				</Link>
				<Link
					className={`work-link ${
						workType === 'radiators' && 'current'
					}`}
					to="/work/radiators">
					{isMk ? 'Радијатори' : 'Radiators'}
				</Link>
				<Link
					className={`work-link ${
						workType === 'electricity' && 'current'
					}`}
					to="/work/electricity">
					{isMk ? 'Струја' : 'Electricity'}
				</Link>
				<Link
					className={`work-link ${
						workType === 'plumbing' && 'current'
					}`}
					to="/work/plumbing">
					{isMk ? 'Водоинсталација' : 'Plumbing'}
				</Link>
				<Link
					className={`work-link ${
						workType === 'heating' && 'current'
					}`}
					to="/work/heating">
					{isMk ? 'Подно Греење' : 'Floor Heating'}
				</Link>
				<Link
					className={`work-link ${workType === 'PVC' && 'current'}`}
					to="/work/PVC">
					{isMk ? 'Врати и Прозори' : 'Doors & Windows'}
				</Link>
				<Link
					className={`work-link ${workType === 'AC' && 'current'}`}
					to="/work/AC">
					{isMk ? 'Клими' : 'AC'}
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
				return isMk ? 'Врати и Прозори' : 'Doors & Windows';
			case 'AC':
				return isMk ? 'Клима Уреди' : 'Air Conditioning';
			case 'electricity':
				return isMk ? 'Струја' : 'Electricity & Power';
			case 'solar':
				return isMk ? 'Соларни Системи' : 'Solar Systems';
			case 'radiators':
				return isMk ? 'Радијатори' : 'Radiator Heating';
			case 'plumbing':
				return isMk ? 'Водоинсталација' : 'Plumbing';
			case 'heating':
				return isMk ? 'Подно Греење' : 'Floor Heating';
			default:
				return isMk ? 'Наши Проекти' : 'Our Work';
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
								src={`https://europlusproekt.herokuapp.com/uploads/${workType}/${image}`}
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
					{isMk ? 'Назад' : 'Home'}
				</Link>
				<button className="btn btn-topright" onClick={onLangChange}>
					{lang.toUpperCase()}
				</button>
				<h1 className="L-heading">{getHeading(workType)}</h1>
			</div>
			{navbar}
			<div className="img-container container mt-2 center">
				{images &&
					images.map((image, index) => (
						<img
							src={`https://europlusproekt.herokuapp.com/uploads/${workType}/${image}`}
							alt="Some of our work"
							onClick={onImgClick}
							key={index}
							number={index}
						/>
					))}
				<Link to="/upload" className="btn btn-bottomright">
					+
				</Link>
			</div>
		</div>
	);
}
