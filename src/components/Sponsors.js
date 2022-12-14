import React from 'react';
import { SponsorContainer } from '../styles/Sponsors.style';
import Sponsor from './Sponsor';

const sponsors = [
	{
		img: 'https://unsplash.it/400/200',
		title: 'Sponsor 1',
		text: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Voluptas, animi.',
	},
	{
		img: 'https://unsplash.it/300/300',
		title: 'Sponsor 2',
		text: 'Lorem ipsum dolor sit amet, consectetur adipisicing elit. Odio, autem?',
	},
	{
		img: 'https://unsplash.it/400/400',
		title: 'Sponsor 3',
		text: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Perspiciatis, sit!',
	},
	{
		img: 'https://unsplash.it/200/400',
		title: 'Sponsor 4',
		text: 'Lorem ipsum dolor sit amet, consectetur adipisicing elit. Nam, magni?',
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
							text={sponsor.text}
						/>
					);
				})}
			</SponsorContainer>
		</>
	);
}

export default Sponsors;
