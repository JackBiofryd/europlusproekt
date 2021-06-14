import React from 'react';
import { Link } from 'react-router-dom';
import solarWorkImg from '../static/workSolar.jpg';

export default function OurWork() {
	return (
		<React.Fragment>
			<div className="mb-5">
				<div className="center mt-12 mb-4" id="ourWork">
					<h5 className="header mb-1-5">Euro Plus Proekt</h5>
					<p className="medium light clip">
						Our innovative project development solutions make the
						future possible for households, businesses, property
						owners, and more.
					</p>
				</div>
				<hr className="line-smaller line-light" />
			</div>
			<div className="container-small mb-4">
				<div className="flex-container">
					<div className="main-work-text">
						<div className="title">
							<i className="fas fa-briefcase fa-3x"></i>
							<h3 className="L-heading">Our Work</h3>
						</div>
						<p className="lead mt-1-5 mb-3">
							In our company we make sure the work we do is
							perfect! When working with us, you can be certain
							that you will receive the fastest yet most
							professional service there is!
						</p>
						<Link
							to="/work/solar"
							className="btn btn-large my-2 btn-inverse">
							Learn More
						</Link>
						<ul className="work-list mt-2">
							<li>
								<Link to="/work/solar">
									Solar Panel Installation
								</Link>
							</li>
							<li>
								<Link to="/work/radiators">
									Radiator Installation
								</Link>
							</li>
							<li>
								<Link to="/work/heating">Floor Heating</Link>
							</li>
							<li>
								<Link to="/work/electricity">
									Power Installation
								</Link>
							</li>
							<li>
								<Link to="/work/AC">AC Installation</Link>
							</li>
							<li>
								<Link to="/work/plumbing">Plumbing</Link>
							</li>
							<li>
								<Link to="/work/PVC">
									Doors and Windows w/ Rehau Profile
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
										src={solarWorkImg}
										alt="Solar"
										className="work-img"
									/>
									<p className="img-text">Solar</p>
								</div>
							</Link>
							<Link to="/work/solar">
								<div className="work-img-container">
									<img
										src={solarWorkImg}
										alt="Solar"
										className="work-img"
									/>
									<p className="img-text">Solar</p>
								</div>
							</Link>
						</div>
						<div className="mid">
							<Link to="/work/solar">
								<div className="work-img-container">
									<img
										src={solarWorkImg}
										alt="Solar"
										className="work-img"
									/>
									<p className="img-text">Solar</p>
								</div>
							</Link>
							<Link to="/work/solar">
								<div className="work-img-container">
									<img
										src={solarWorkImg}
										alt="Solar"
										className="work-img"
									/>
									<p className="img-text">Solar</p>
								</div>
							</Link>
							<Link to="/work/solar">
								<div className="work-img-container">
									<img
										src={solarWorkImg}
										alt="Solar"
										className="work-img"
									/>
									<p className="img-text">Solar</p>
								</div>
							</Link>
						</div>
						<div className="bottom">
							<Link to="/work/solar">
								<div className="work-img-container">
									<img
										src={solarWorkImg}
										alt="Solar"
										className="work-img"
									/>
									<p className="img-text">Solar</p>
								</div>
							</Link>
							<Link to="/work/solar">
								<div className="work-img-container">
									<img
										src={solarWorkImg}
										alt="Solar"
										className="work-img"
									/>
									<p className="img-text">Solar</p>
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
