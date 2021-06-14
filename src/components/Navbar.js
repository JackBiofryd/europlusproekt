import React, { useState, useEffect } from 'react';
import { useMediaQuery } from 'react-responsive';
import { Link } from 'react-scroll';
import logo from '../static/logo.png';

export default function Navbar() {
	const [showMenu, setShowMenu] = useState(false);
	const [stickyNav, setStickyNav] = useState(false);
	const isSmallScreen = useMediaQuery({
		query: '(max-width: 900px)'
	});

	useEffect(() => {
		window.onscroll = () => {
			setStickyNav(window.pageYOffset !== 0);
		};
	}, []);

	let navLinks = (
		<React.Fragment>
			<div className="links mr-1">
				<Link
					activeClass="current"
					to="home"
					spy={true}
					smooth={true}
					offset={0}
					duration={1000}>
					Home
				</Link>
				<Link
					activeClass="current"
					to="about"
					spy={true}
					smooth={true}
					offset={-70}
					duration={1000}>
					About
				</Link>
				<Link
					activeClass="current"
					to="contact"
					spy={true}
					smooth={true}
					offset={-70}
					duration={1000}>
					Contact
				</Link>
			</div>
			<div className="btns">
				<Link
					activeClass="current"
					to="ourWork"
					spy={true}
					smooth={true}
					offset={-100}
					duration={1000}
					className="btn">
					Our Work
				</Link>
				<button className="lang-change-btn">EN</button>
			</div>
		</React.Fragment>
	);

	if (isSmallScreen) {
		navLinks = (
			<React.Fragment>
				<div className="links">
					<div className="hamburger-menu">
						<i
							onClick={() => setShowMenu(prevState => !prevState)}
							class="fas fa-bars fa-2x"></i>

						<div
							className={`menu ${
								showMenu ? 'fade-in' : 'fade-out'
							}`}>
							<Link
								activeClass="current"
								to="home"
								spy={true}
								smooth={true}
								offset={0}
								duration={1000}>
								Home
							</Link>
							<Link
								activeClass="current"
								to="ourWork"
								spy={true}
								smooth={true}
								offset={-100}
								duration={1000}>
								Our Work
							</Link>
							<Link
								activeClass="current"
								to="about"
								spy={true}
								smooth={true}
								offset={-70}
								duration={1000}>
								About
							</Link>
							<Link
								activeClass="current"
								to="contact"
								spy={true}
								smooth={true}
								offset={-70}
								duration={1000}>
								Contact
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

	return (
		<div className={`${stickyNav && 'hideNav'}`}>
			<nav className="main-nav">
				<div className="container">
					<div className="logo-container">
						<img src={logo} alt="Logo" className="logo" />
						<h1 className="M-heading">EURO PLUS PROEKT</h1>
					</div>
					{navLinks}
				</div>
			</nav>
			{stickyNav && (
				<nav className="main-nav sticky-nav">
					<div className="container">
						<div className="logo-container">
							<img src={logo} alt="Logo" className="logo" />
							<h1 className="M-heading">EURO PLUS PROEKT</h1>
						</div>
						{navLinks}
					</div>
				</nav>
			)}
		</div>
	);
}
