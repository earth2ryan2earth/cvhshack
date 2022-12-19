import React from 'react';
import Falkon589 from '../assets/sponsors/Falkon-589-Robotics.png';
import Salesforce from '../assets/sponsors/Salesforce.png';
import { SponsorContainer } from '../styles/Sponsors.style';
import Sponsor from './Sponsor';

const sponsors = [
	{
		img: Salesforce,
		title: 'Salesforce',
		href: 'https://www.salesforce.com/',
	},
	{
		img: Falkon589,
		title: 'Falkon Robotics',
		href: 'https://www.cvrobots.com/',
	},
];

function Sponsors() {
	return (
		<>
			<SponsorContainer
				id='top'
				className='sponsor-grid'
			>
				{sponsors.map((sponsor, key) => {
					return (
						<Sponsor
							key={key}
							img={sponsor.img}
							title={sponsor.title}
							href={sponsor.href}
						/>
					);
				})}
			</SponsorContainer>
		</>
	);
}

export default Sponsors;
