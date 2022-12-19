import React from 'react';
import {
	PrimaryFooter,
	Logo,
	MediaLinkContainer,
	MediaLink,
	MediaLinkImg,
} from '../styles/Footer.style';
import LogoSVG from '../assets/CVFalcon.svg';
import Email from '../assets/media-icons/email.svg';
import Discord from '../assets/media-icons/discord.png';
import Instagram from '../assets/media-icons/instagram.png';
import Remind from '../assets/media-icons/remind.png';
import { HashLink } from 'react-router-hash-link';

function Footer() {
	return (
		<PrimaryFooter
			id='bottom'
			className='flex'
		>
			<HashLink to='#top'>
				<Logo src={LogoSVG}></Logo>
			</HashLink>
			<MediaLinkContainer>
				<MediaLinkImg src={Email} />
				<MediaLink href='https://www.instagram.com/cvhshackathon/'>
					<MediaLinkImg src={Instagram} />
				</MediaLink>
				<MediaLink href='https://discord.gg/Ty5nTMX5V9'>
					<MediaLinkImg src={Discord} />
				</MediaLink>
				<MediaLink href='https://www.remind.com/join/cvhack'>
					<MediaLinkImg src={Remind} />
				</MediaLink>
			</MediaLinkContainer>
		</PrimaryFooter>
	);
}

export default Footer;
