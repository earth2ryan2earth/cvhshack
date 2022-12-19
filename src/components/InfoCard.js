import React from 'react';
import { Info, InfoTitle, InfoContent } from '../styles/InfoCard.style';

function InfoCard() {
	return (
		<Info
			id='info'
			className='info clr-white'
		>
			<InfoTitle className='info-title'>Event Information</InfoTitle>
			<InfoContent className='info-content'>
				Join us starting at 9am for a jam-packed, fun filled 24 hour hackathon
				at Crescenta Valley High School! Throughout the event, you'll be able to
				interact and bond with fellow high school students through fun games and
				activities and be able to enhance your computer programming skills
				through workshops. In addition, you'll be able to listen to industry
				speakers and gain personalized feedback from judges. All levels of
				programming are wholeheartedly welcome, and we hope to see you there!
			</InfoContent>
		</Info>
	);
}

export default InfoCard;
