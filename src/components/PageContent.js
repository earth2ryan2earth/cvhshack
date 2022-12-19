import React from 'react';
import TitleCard from './TitleCard';
import InfoCard from './InfoCard';
import AboutCard from './AboutCard';
import Officers from './Officers';

function PageContent() {
	return (
		<>
			<div className='page-content'>
				<TitleCard className='title-card' />
				<InfoCard className='info-card' />
				<hr />
				<AboutCard className='about-card' />
				<hr />
				<Officers className='officers-card' />
			</div>
		</>
	);
}

export default PageContent;
