import React from 'react';
import Navbar from '../components/Navbar';
import SlideShow from '../components/SlideShow';

export default function LandingPage() {
	return (
		<div className="main-landing" id="home">
			<Navbar />
			<SlideShow />
		</div>
	);
}
