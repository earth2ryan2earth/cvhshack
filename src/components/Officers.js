import React from 'react';
import { OfficerContainer } from '../styles/Officers.style';
import { officers } from '../utils/Officers';
import Officer from './Officer';

function Sponsors() {
	return (
		<div
			id='officers'
			className='officers clr-white'
		>
			<h2 className='officers-title'>Officers</h2>
			<OfficerContainer
				id='top'
				className='officer-grid'
			>
				{officers.map((officer, key) => {
					return (
						<Officer
							key={key}
							img={officer.img}
							name={officer.name}
							testimonial={officer.testimonial}
						/>
					);
				})}
			</OfficerContainer>
		</div>
	);
}

export default Sponsors;
