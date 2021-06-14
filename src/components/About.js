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
					<h3 className="S-heading center mb-3">About Us</h3>
					<p className="lead mt-1-5">
						Lorem ipsum, dolor sit amet consectetur adipisicing
						elit. Accusantium praesentium nostrum qui laudantium
						quia architecto impedit. Quos a incidunt quidem.
					</p>
					<Link
						to="ourWork"
						spy={true}
						smooth={true}
						offset={0}
						duration={1000}
						className="center btn-block btn mt-2">
						Our Work
					</Link>
					<p className="lead mt-2">
						Lorem ipsum dolor sit amet consectetur adipisicing elit.
						Necessitatibus quisquam provident cum maxime minima
						harum obcaecati neque consequuntur ex ut.
					</p>
					<p className="lead mt-2 mb-3">
						Lorem ipsum dolor, sit amet consectetur adipisicing
						elit. Magni doloremque voluptates officia. In, quidem
						dicta modi illum quos at voluptatum aperiam sed
						consequatur repellendus molestiae ea! Praesentium,
						perspiciatis magnam. Modi!
					</p>
				</div>
			</div>
		</div>
	);
}
