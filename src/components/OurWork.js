import React from 'react';
import { Link } from 'react-router-dom';
import workImg1 from '../static/workImg1.jpg';
import workImg2 from '../static/workImg2.png';
import workImg3 from '../static/workImg3.jpg';
import workImg4 from '../static/workImg4.png';
import workImg5 from '../static/workImg5.jpg';
import workImg6 from '../static/workImg6.png';
import workImg7 from '../static/workImg7.jpg';

export default function OurWork() {
	return (
		<React.Fragment>
			<div className="mb-5">
				<div className="center mt-12 mb-4" id="ourWork">
					<h5 className="header mb-1-5">Euro Plus Proekt</h5>
					<p className="medium light clip en">
						Our innovative project development solutions make the
						future possible for households, businesses, property
						owners, and more.
					</p>
					<p className="medium light clip mk">
						Нашите иновативни решенија за проектите ја прават
						иднината достапна за домови, бизниси, имотни сопственици
						и многу повеќе.
					</p>
				</div>
				<hr className="line-smaller line-light" />
			</div>
			<div className="container-small mb-4">
				<div className="flex-container">
					<div className="main-work-text">
						<div className="title">
							<i className="fas fa-briefcase fa-3x"></i>
							<h3 className="L-heading en">Our Work</h3>
							<h3 className="L-heading mk">Наши Проекти</h3>
						</div>
						<p className="lead mt-1-5 mb-3 en">
							In our company we make sure the work we do is
							perfect! When working with us, you can be certain
							that you will receive the fastest yet most
							professional service there is!
						</p>
						<p className="lead mt-1-5 mb-3 mk">
							Бидете сигурни дека работата која ја вршиме во
							нашата копанија е перфектна! За време на нашата
							соработка, бидете сигурни дека ќе ја добиете
							најбрзата и најпрофесионалната услуга што постои!
						</p>
						<Link
							to="/work/solar"
							className="btn btn-large my-2 btn-inverse">
							<p className="en">Learn More</p>
							<p className="mk">Дознај Повеќе</p>
						</Link>
						<ul className="work-list mt-2">
							<li>
								<Link to="/work/solar">
									<p className="en">
										Solar Panel Installation
									</p>
									<p className="mk">
										Инсталација на Соларни Панели
									</p>
								</Link>
							</li>
							<li>
								<Link to="/work/radiators">
									<p className="en">Raditator Installation</p>
									<p className="mk">
										Инсталација на Радијатори
									</p>
								</Link>
							</li>
							<li>
								<Link to="/work/heating">
									<p className="en">Floor Heating</p>
									<p className="mk">
										Инсталација на Подно Греење
									</p>
								</Link>
							</li>
							<li>
								<Link to="/work/PVC">
									<p className="en">Rehau Profiles</p>
									<p className="mk">Рехау Профили</p>
								</Link>
							</li>
							<li>
								<Link to="/work/electricity">
									<p className="en">Power Installation</p>
									<p className="mk">Инсталација на Струја</p>
								</Link>
							</li>
							<li>
								<Link to="/work/AC">
									<p className="en">AC Installation</p>
									<p className="mk">
										Инсталација на Клима Уреди
									</p>
								</Link>
							</li>
							<li>
								<Link to="/work/plumbing">
									<p className="en">Plumbing</p>
									<p className="mk">Водоинсталација</p>
								</Link>
							</li>
						</ul>
					</div>
					<div className="work-images mt-3">
						<div className="top">
							<div></div>
							<Link to="/work/solar">
								<div className="work-img-container">
									<img
										src={workImg1}
										alt="Solar"
										className="work-img"
									/>
									<p className="img-text en">Solar</p>
									<p className="img-text mk">
										Соларни Системи
									</p>
								</div>
							</Link>
							<Link to="/work/radiators">
								<div className="work-img-container">
									<img
										src={workImg2}
										alt="Radiator"
										className="work-img"
									/>
									<p className="img-text en">Radiators</p>
									<p className="img-text mk">Радијатори</p>
								</div>
							</Link>
						</div>
						<div className="mid">
							<Link to="/work/heating">
								<div className="work-img-container">
									<img
										src={workImg3}
										alt="Floor Heating"
										className="work-img"
									/>
									<p className="img-text en">Floor Heating</p>
									<p className="img-text mk">Подно Греење</p>
								</div>
							</Link>
							<Link to="/work/PVC">
								<div className="work-img-container">
									<img
										src={workImg4}
										alt="PVC Doors & Windows"
										className="work-img"
									/>
									<p className="img-text en">
										Rehau Profiles
									</p>
									<p className="img-text mk">Рехау Профили</p>
								</div>
							</Link>
							<Link to="/work/electricity">
								<div className="work-img-container">
									<img
										src={workImg5}
										alt="Power Installation"
										className="work-img"
									/>
									<p className="img-text en">Electricity</p>
									<p className="img-text mk">Струја</p>
								</div>
							</Link>
						</div>
						<div className="bottom">
							<Link to="/work/AC">
								<div className="work-img-container">
									<img
										src={workImg6}
										alt="Air Conditioner"
										className="work-img"
									/>
									<p className="img-text en">AC</p>
									<p className="img-text mk">Клими</p>
								</div>
							</Link>
							<Link to="/work/plumbing">
								<div className="work-img-container">
									<img
										src={workImg7}
										alt="Plumbing"
										className="work-img"
									/>
									<p className="img-text en">Plumbing</p>
									<p className="img-text mk">Водоводство</p>
								</div>
							</Link>
							<div></div>
						</div>
					</div>
				</div>
			</div>
		</React.Fragment>
	);
}
