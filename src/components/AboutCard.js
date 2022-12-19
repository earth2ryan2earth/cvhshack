import React from 'react';
import { About, AboutTitle, AboutContent } from '../styles/AboutCard.style';

function AboutCard() {
	return (
		<About
			id='about'
			className='about clr-white'
		>
			<AboutTitle className='about-title'>Mission Statement</AboutTitle>
			<AboutContent className='about-content'>
				The potential of computer science is tremendous. Hackathons are a
				one-of-a-kind experience to be able to enhance your programming and STEM
				skills while meeting other passionate and talented individuals. Here at
				CV Hacks, our goal is to bring the best hackathon to you through
				engaging events and learning opportunities. We welcome individuals of
				all experience to a continuously growing and supportive community of
				passionate hackers.
			</AboutContent>
		</About>
	);
}

export default AboutCard;
