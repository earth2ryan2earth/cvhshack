import React from 'react';
import NavbarHome from './NavbarHome';
import TitleCard from './TitleCard';
import InfoCard from './InfoCard';
import AboutCard from './AboutCard';
import Officers from './Officers';

function PageContent() {
	return (
		<>
			<NavbarHome />
			<div className='page-content'>
				<TitleCard className='title-card' />
				<InfoCard className='info-card' />
				<AboutCard className='about-card' />
				<Officers className='officers-card' />
			</div>
		</>
	);
}

export default PageContent;
