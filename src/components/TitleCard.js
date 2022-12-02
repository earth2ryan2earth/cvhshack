import React from 'react';
import { Title, TitleParallax, TitleContainer, TitleTitle, TitleToApplyContainer, TitleToApply, TitleNextEvent, TitleNextEventLocation, TitleNextEventCountdown, TitleNextEventDate } from '../styles/TitleCard.style';
import getCountdown from '../functions/Countdown';

function TitleCard() {
	return (
		<Title id='top' className='title'>
			<TitleParallax className='title-parallax'></TitleParallax>

			<TitleContainer className='title-container clr-white'>
				<TitleTitle className='title-title'>CVHS Hack</TitleTitle>
				<TitleToApplyContainer>
					<TitleToApply className='title-to-apply' to='/apply' target='_blank' rel='noopener noreferrer'>
						Apply
					</TitleToApply>
				</TitleToApplyContainer>
				<TitleNextEvent className='title-next-event'>
					<TitleNextEventDate className='title-next-event-date'>MM DD HH:MM:SS</TitleNextEventDate>
					<TitleNextEventLocation className='title-next-event-location'>Crescenta Valley High School Gymnasium</TitleNextEventLocation>
					<TitleNextEventCountdown className='title-next-event-countdown'>
						<div>
							<div className='title-next-event-countdown-days'>DD</div>
							<span>days</span>
						</div>
						<div>
							<div className='title-next-event-countdown-hours'>HH</div>
							<span>hours</span>
						</div>
						<div>
							<div className='title-next-event-countdown-minutes'>MM</div>
							<span>minutes</span>
						</div>
						<div>
							<div className='title-next-event-countdown-seconds'>SS</div>
							<span>seconds</span>
						</div>
					</TitleNextEventCountdown>
					{getCountdown()}
				</TitleNextEvent>
			</TitleContainer>
		</Title>
	);
}

export default TitleCard;
