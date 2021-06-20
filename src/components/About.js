import React from 'react';
import { Link } from 'react-scroll';
import aboutImg from '../static/aboutImg.jpg';

export default function About() {
	return (
		<div className="mt-12 primary-bg" id="about">
			<hr className="line-smaller line-light mb-4" />
			<div className="about-container pb-4 flex-container container-small">
				<div className="about-img mr-1">
					<img src={aboutImg} alt="About Us" />
				</div>
				<div className="about-text px-2">
					<h3 className="S-heading center mb-3 en">About Us</h3>
					<h3 className="S-heading center mb-3 mk">За Нас</h3>
					<p className="lead mt-1-5 en">
						We are a company that works with Solar Panel
						Installation, Heating, Raditators, Floor Heating,
						Heating Pumps, Pallet Boilers, Wood Boilers, Electical
						Boilers, Stoves, PVC Doors and Windows, Power
						Installation, AC Installation and Plumbing!
						<br />
						<br />
						You can check out our work here:
					</p>
					<p className="lead mt-1-5 mk">
						Ние сме компанија која работи со Инсталација на Соларни
						Панели, Парно Греење, Радијатори, Подно Греење,
						Топлински Пумпи, Котли на Палети, Котли на Дрва, Котли
						на Струја, Шпорети, ПВЦ Врати и Прозорци, Инсталација на
						Струја, Климатизација и Водоинсталација!
						<br />
						<br />
						Можете да ја видите нашата работа овде:
					</p>
					<Link
						to="ourWork"
						spy={true}
						smooth={true}
						offset={0}
						duration={1000}
						className="center btn-block btn mt-2">
						<p className="en">Our Work</p>
						<p className="mk">Наши Проекти</p>
					</Link>
					<p className="lead mt-2 en">
						In our company we assure you that the work is going to
						be done fast and cheap, yet professional and elegant!
					</p>
					<p className="lead mt-2 mk">
						Во нашата компанија може да ве осигуриме дека работата
						ќе биде завршена брзо и ефтино, но професионално и
						елегантно!
					</p>
					<p className="lead mt-2 en">
						"Is the material good?" - "No! It's the best!" <br /> We
						make sure the material we work with is the best there
						is!
					</p>
					<p className="lead mt-2 mk">
						„Дали материјалот е добар?“ - „Не. Материјалот е
						најдобар!“ <br /> Во Euro Plus Proekt материјалот кој
						што го користиме е најдобриот што постои!
					</p>
					<p className="lead mt-2 mb-3 en">
						We give you plenty of options to choose from and we
						always make sure you get EXACTLY what you want and need!
					</p>
					<p className="lead mt-2 mb-3 mk">
						Ви даваме многу опции од кои вие може да одберете ТОЧНО
						што сакате!
					</p>
				</div>
			</div>
		</div>
	);
}
