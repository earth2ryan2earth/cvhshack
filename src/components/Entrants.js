import React from 'react';
import { EntrantsContainer } from '../styles/Entrants.style';
import Event from './Event';
import { Events } from '../utils/Events';

function Entrants() {
	return (
		<>
			<EntrantsContainer
				id='top'
				className='clr-white'
			>
				{Events.slice()
					.sort((a, b) => new Date(a.title) - new Date(b.title))
					.map((event, index) => {
						return (
							<Event
								key={index}
								title={new Date(event.title)
									.toLocaleDateString('sv', {
										year: 'numeric',
										month: '2-digit',
										day: '2-digit',
										timezone: 'America/Los_Angeles',
									})
									.replace(/-+/g, '_')}
							/>
						);
					})}
			</EntrantsContainer>
		</>
	);
}

export default Entrants;
