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
	const [isLoading, setIsLoading] = useState(false);
	const { workType } = useParams();
	const isSmallScreen = useMediaQuery({
		query: '(max-width: 920px)'
	});
	const { isMk, setIsMk, setLang, lang } = useContext(LangContext);

	useEffect(() => {
		setIsLoading(true);
		const fetchFiles = async () => {
			const response = await fetch(
				`${process.env.REACT_APP_BACKEND_URL}/getImages/${workType}`
			);
			const data = await response.json();

			setImages(data.files);
			setIsLoading(false);
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
					{isMk ? 'Рехау Профили' : 'Rehau Profiles'}
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
				<div className="links navbar-secondary py-1 pr-4">
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
								{isMk ? 'Вода' : 'Plumbing'}
							</Link>
							<Link
								className={`work-link ${
									workType === 'heating' && 'current'
								}`}
								to="/work/heating">
								{isMk ? 'Подно Греење' : 'Floor Heating'}
							</Link>
							<Link
								className={`work-link ${
									workType === 'PVC' && 'current'
								}`}
								to="/work/PVC">
								{isMk ? 'Рехау Профили' : 'Rehau Profiles'}
							</Link>
							<Link
								className={`work-link ${
									workType === 'AC' && 'current'
								}`}
								to="/work/AC">
								{isMk ? 'Клими' : 'AC'}
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
		if (newIndex === -1 || newIndex === images.length) return;
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
		const images = document.getElementsByClassName('carousel-img');
		for (let i = 0; i < images.length; i++) {
			images[i].style.display = 'none';
			images[i].classList.remove(
				'slide-from-right-to-middle',
				'slide-from-middle-to-left',
				'slide-from-left-to-middle',
				'slide-from-middle-to-right'
			);
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
				return isMk ? 'Рехау Профили' : 'Rehau Profiles';
			case 'AC':
				return isMk ? 'Клима Уреди' : 'Air Conditioning';
			case 'electricity':
				return isMk ? 'Струја' : 'Electricity & Power';
			case 'solar':
				return isMk ? 'Соларни Системи' : 'Solar Systems';
			case 'radiators':
				return isMk ? 'Радијатори' : 'Radiator Heating';
			case 'plumbing':
				return isMk ? 'Вода' : 'Plumbing';
			case 'heating':
				return isMk ? 'Подно Греење' : 'Floor Heating';
			default:
				return isMk ? 'Наши Проекти' : 'Our Work';
		}
	};

	return (
		<div>
			{!isLoading && (
				<Modal hide={!showModal} onCancel={() => setShowModal(false)}>
					{images && imgIndex !== 0 && (
						<div
							className="arrow-left"
							onClick={() => changeSlide(-1)}>
							<i className="fas fa-arrow-left"></i>
						</div>
					)}
					{images && imgIndex !== images.length - 1 && (
						<div
							className="arrow-right"
							onClick={() => changeSlide(1)}>
							<i className="fas fa-arrow-right"></i>
						</div>
					)}
					<div className="carousel">
						{images &&
							images.map((image, index) => (
								<React.Fragment>
									<img
										src={`${process.env.REACT_APP_BACKEND_URL}/image/${image}`}
										alt="Some of our work"
										className="carousel-img"
										key={index}
									/>
									{imgIndex === index && (
										<Link
											to={`/delete/${image}`}
											className="btn btn-bottomright">
											<i className="fas fa-trash"></i>
										</Link>
									)}
								</React.Fragment>
							))}
					</div>
				</Modal>
			)}

			<div className={`work-bg bg-${workType}`}>
				<Link to="/" className="btn btn-topleft">
					<i className="fas fa-arrow-left mr-0-5"></i>
					{isMk ? 'Назад' : 'Home'}
				</Link>
				<button className="btn btn-topright" onClick={onLangChange}>
					{lang.toUpperCase()}
				</button>
				<h1 className="L-heading center">{getHeading(workType)}</h1>
			</div>
			{navbar}
			{isLoading && (
				<div className="center mt-1">
					<div className="loader"></div>
				</div>
			)}
			{!isLoading && (
				<div className="img-container container mt-2 center">
					{images &&
						images.map((image, index) => (
							<img
								src={`${process.env.REACT_APP_BACKEND_URL}/image/${image}`}
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
			)}
		</div>
	);
}
