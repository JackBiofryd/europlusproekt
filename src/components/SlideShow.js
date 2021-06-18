import React, { useState, useEffect, useCallback } from 'react';
import { useMediaQuery } from 'react-responsive';
import { Link } from 'react-scroll';
import shapeImg from '../static/bgShapeSmall-Desktop.png';
import mainImg1 from '../static/mainImg1.png';
import mainImg1Small from '../static/mainImage-Small.png';
import mainImg2 from '../static/mainImg2.png';
import mainImg3 from '../static/mainImg3.png';
import mainImg4 from '../static/mainImg4.png';
import mainImg5 from '../static/mainImg5.png';
import mainImg6 from '../static/mainImg6.png';
import mainImg7 from '../static/mainImg7.png';
import mainImg8 from '../static/mainImg8.png';

export default function SlideShow() {
	const [imgIndex, setImgIndex] = useState(0);
	const isSmallScreen = useMediaQuery({
		query: '(max-width: 768px), (orientation: portrait)'
	});

	const changeSlide = useCallback(
		numOfSlides => {
			const images = document.getElementsByClassName('main-img');
			const textContainers =
				document.getElementsByClassName('text-container');
			const backgrounds = document.getElementsByClassName('main-bg');

			const prevIndex = imgIndex;
			let newIndex = imgIndex + numOfSlides;
			if (newIndex === -1) newIndex = images.length - 1;
			if (newIndex === images.length) newIndex = 0;
			setImgIndex(newIndex);

			for (let i = 0; i < images.length; i++) {
				images[i].style.display = 'none';
				textContainers[i].style.display = 'none';
				backgrounds[i].style.display = 'none';
				backgrounds[i].classList.remove(
					'slide-from-left',
					'slide-from-right',
					'slide-to-right-hide',
					'slide-to-right-show'
				);
			}

			backgrounds[newIndex].style.display = 'block';
			backgrounds[prevIndex].style.display = 'block';
			images[newIndex].style.display = 'inline';
			textContainers[newIndex].style.display = 'inline';
			if (numOfSlides < 0) {
				backgrounds[prevIndex].classList.add('slide-to-right-hide');
				backgrounds[newIndex].classList.add('slide-to-right-show');
			} else {
				backgrounds[prevIndex].classList.add('slide-from-left');
				backgrounds[newIndex].classList.add('slide-from-right');
			}
		},
		[imgIndex]
	);

	useEffect(() => {
		const interval = setInterval(() => changeSlide(1), 7000);
		return () => clearInterval(interval);
	}, [changeSlide]);

	return (
		<React.Fragment>
			<div className="main-bg bg1"></div>
			<div className="main-bg bg2"></div>
			<div className="main-bg bg3"></div>
			<div className="main-bg bg4"></div>
			<div className="main-bg bg5"></div>
			<div className="main-bg bg6"></div>
			<div className="main-bg bg7"></div>
			<div className="main-bg bg8"></div>
			<div className="main-content">
				<div className="left">
					<div className="text-container mr-3 fade">
						<h2 className="XL-heading en">
							Hard Work <br />
							Pays Off.
						</h2>
						<h2 className="XL-heading mk">
							Трудот <br />
							Се Исплаќа.
						</h2>
						<p className="lead en">
							We are the proof. <br /> Contact us for any project
							on your mind.
						</p>
						<p className="lead mk">
							Ние сме доказот. <br /> Контактирајте не за секој
							проект кој посакувате!
						</p>
						<Link
							activeClass="current"
							to="ourWork"
							spy={true}
							smooth={true}
							offset={-100}
							duration={1000}
							className="btn my-1">
							<p className="en">Learn More</p>
							<p className="mk">Дознај Повеќе</p>
						</Link>
					</div>
					<div className="text-container mr-3 fade">
						<h2 className="XL-heading en">
							Solar <br />
							Systems.
						</h2>
						<h2 className="XL-heading mk">
							Соларни <br />
							Системи.
						</h2>
						<p className="lead en">
							Need hot water? <br /> We install effective solar
							systems fast and cheap!
						</p>
						<p className="lead mk">
							Ви треба топла вода? <br /> Инсталираме соларни
							системи брзо, ефикасно и евтино!
						</p>
						<Link
							activeClass="current"
							to="ourWork"
							spy={true}
							smooth={true}
							offset={-100}
							duration={1000}
							className="btn my-1">
							<p className="en">Learn More</p>
							<p className="mk">Дознај Повеќе</p>
						</Link>
					</div>
					<div className="text-container mr-3 fade">
						<h2 className="XL-heading en">
							Radiator <br />
							Heating.
						</h2>
						<h2 className="XL-heading mk">
							Парно и <br />
							Радијатори.
						</h2>
						<p className="lead en">
							Keep your family warm this winter. <br /> Get the
							highest quality radiators super quickly.
						</p>
						<p className="lead mk">
							Стоплете се во зима. <br /> Инсталирајте радијатори
							во вашиот дом веднаш!
						</p>
						<Link
							activeClass="current"
							to="ourWork"
							spy={true}
							smooth={true}
							offset={-100}
							duration={1000}
							className="btn my-1">
							<p className="en">Learn More</p>
							<p className="mk">Дознај Повеќе</p>
						</Link>
					</div>
					<div className="text-container mr-3 fade">
						<h2 className="XL-heading en">
							Rehau <br /> Profiles.
						</h2>
						<h2 className="XL-heading mk">
							Рехау <br /> Профили.
						</h2>
						<p className="lead en">
							Keep the cold outside! <br /> Get the best doors and
							windows!
						</p>
						<p className="lead mk">
							Држете го ладното надвор! <br /> Контактирајте не за
							најдобрите врати и прозор!
						</p>
						<Link
							activeClass="current"
							to="ourWork"
							spy={true}
							smooth={true}
							offset={-100}
							duration={1000}
							className="btn my-1">
							<p className="en">Learn More</p>
							<p className="mk">Дознај Повеќе</p>
						</Link>
					</div>
					<div className="text-container mr-3 fade">
						<h2 className="XL-heading en">
							Floor <br /> Heating.
						</h2>
						<h2 className="XL-heading mk">
							Подно <br /> Греење.
						</h2>
						<p className="lead en">
							Keep your feet warm! <br /> Let us heat up your
							floors!
						</p>
						<p className="lead mk">
							Чувајте ги вашите нози топли! <br /> Дозволете ни да
							го затоплиме вашиот под!
						</p>
						<Link
							activeClass="current"
							to="ourWork"
							spy={true}
							smooth={true}
							offset={-100}
							duration={1000}
							className="btn my-1">
							<p className="en">Learn More</p>
							<p className="mk">Дознај Повеќе</p>
						</Link>
					</div>
					<div className="text-container mr-3 fade">
						<h2 className="XL-heading en">
							Electricity <br /> & Power.
						</h2>
						<h2 className="XL-heading mk">
							Струја и <br /> Светлина.
						</h2>
						<p className="lead en">
							Let there be light! <br /> Fill your house with
							power outlets!
						</p>
						<p className="lead mk">
							Нека има светлина! <br /> Исполнете ја вашата ќуќа
							со штекери!
						</p>
						<Link
							activeClass="current"
							to="ourWork"
							spy={true}
							smooth={true}
							offset={-100}
							duration={1000}
							className="btn my-1">
							<p className="en">Learn More</p>
							<p className="mk">Дознај Повеќе</p>
						</Link>
					</div>
					<div className="text-container mr-3 fade">
						<h2 className="XL-heading en">
							Plumbing <br />
							Installation.
						</h2>
						<h2 className="XL-heading mk">
							Водоводна <br />
							Инсталација.
						</h2>
						<p className="lead en">
							Never stay thirsty again! <br /> The best pluming
							around!
						</p>
						<p className="lead mk">
							Никогаш повеќе не бидете жедни! <br /> Најдобрата
							водоинсталација во оклината!
						</p>
						<Link
							activeClass="current"
							to="ourWork"
							spy={true}
							smooth={true}
							offset={-100}
							duration={1000}
							className="btn my-1">
							<p className="en">Learn More</p>
							<p className="mk">Дознај Повеќе</p>
						</Link>
					</div>
					<div className="text-container mr-3 fade">
						<h2 className="XL-heading en">
							AC Cooling
							<br />& Heating
						</h2>
						<h2 className="XL-heading mk">
							Клими и
							<br /> Греење.
						</h2>
						<p className="lead en">
							Keep cool in the summer! <br /> Get an AC in
							record-breaking time!
						</p>
						<p className="lead mk">
							Бидете свежи за време на летото! <br /> Инсталирајте
							клима уреди во рекордно време!
						</p>
						<Link
							activeClass="current"
							to="ourWork"
							spy={true}
							smooth={true}
							offset={-100}
							duration={1000}
							className="btn my-1">
							<p className="en">Learn More</p>
							<p className="mk">Дознај Повеќе</p>
						</Link>
					</div>
				</div>
				<div className="right">
					<img
						className="main-img slide"
						src={isSmallScreen ? mainImg1Small : mainImg1}
						alt="Main Display 1"
					/>
					<img
						className="main-img slide"
						src={mainImg2}
						alt="Solar Power"
					/>
					<img
						className="main-img slide"
						src={mainImg3}
						alt="Radiator"
					/>
					<img
						className="main-img slide"
						src={mainImg4}
						alt="Window"
					/>
					<img
						className="main-img slide"
						src={mainImg5}
						alt="Floor Heating"
					/>
					<img
						className="main-img slide"
						src={mainImg6}
						alt="Electricity & Power"
					/>
					<img
						className="main-img slide"
						src={mainImg7}
						alt="Plumbing"
					/>
					<img
						className="main-img slide"
						src={mainImg8}
						alt="Air Conditioner"
					/>
				</div>
			</div>
			<div className="shape">
				<img src={shapeImg} alt="Shape" />
			</div>
			<div className="arrows">
				<i
					className="fas fa-angle-left"
					onClick={() => changeSlide(-1)}></i>
				<i
					className="fas fa-angle-right"
					onClick={() => changeSlide(1)}></i>
			</div>
			<div className="indicator">
				<p>08.</p>
				<div className="bar">
					<div className={`line ${imgIndex >= 7 && 'full'}`}></div>
					<div className={`line ${imgIndex >= 6 && 'full'}`}></div>
					<div className={`line ${imgIndex >= 5 && 'full'}`}></div>
					<div className={`line ${imgIndex >= 4 && 'full'}`}></div>
					<div className={`line ${imgIndex >= 3 && 'full'}`}></div>
					<div className={`line ${imgIndex >= 2 && 'full'}`}></div>
					<div className={`line ${imgIndex >= 1 && 'full'}`}></div>
					<div className="line full"></div>
				</div>
				<p>0{imgIndex + 1}.</p>
			</div>
		</React.Fragment>
	);
}
