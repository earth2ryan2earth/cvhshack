import React from 'react';
import { OfficerContainer } from '../styles/Officers.style';
import Vela_Bendeicto from '../assets/officers/Vela_Benedicto.jpg';
import Kevin_Loritsch from '../assets/officers/Kevin_Loritsch.jpg';
import Eungyeom_Kim from '../assets/officers/Eungyeom_Kim.jpg';
import Claire_Yang from '../assets/officers/Claire_Yang.png';
import Ethan_Lee from '../assets/officers/Ethan_Lee.jpg';
import Amanda_An from '../assets/officers/Amanda_An.jpg';
import Jasmine_Chung from '../assets/officers/Jasmine_Chung.jpg';
import Alice_Kim from '../assets/officers/Alice_Kim.jpg';
import Officer from './Officer';

const officers = [
	{
		img: Vela_Bendeicto,
		name: 'Vela Benedicto - President',
		testimonial: `Since I've first discovered hackathons, I've always been amazed at the mind-blowing creations we are able to come up with and code. I also hope to share this joy and wonder I experience toward others by promoting hackathons.`,
	},
	{
		img: Kevin_Loritsch,
		name: 'Kevin Loritsch - Vice-President',
		testimonial: `Hello everyone! I have completely fallen in love with computer science over the past few years, and want to do as much as I can to share that passion with the community. I hope to help others find that same feeling of pure joy that accumulates through creating incredible programs!`,
	},
	{
		img: Eungyeom_Kim,
		name: 'Eungyeom Kim - Treasurer',
		testimonial: `My favorite food is fried chicken :)`,
	},
	{
		img: Claire_Yang,
		name: 'Claire Yang - Secretary',
		testimonial: `Hello everyone! My name is Claire Yang and I'm your Secretary for the 2022-2023 school year. Through this opportunity, I hope to grow our programming community here at CV and create new experiences that'll not only welcome you to our family but also inspire some great ideas!!`,
	},
	{
		img: Ethan_Lee,
		name: 'Ethan Lee - Operations Lead',
		testimonial: `Hello, my name is Ethan Lee and I am one of the clubs operations lead. My goals for the club is to be able to reach more people and have them experience the world of S.T.E.M. while also trying to having fun with other people with similar interests!!`,
	},
	{
		img: Amanda_An,
		name: 'Amanda An - Operations Lead',
		testimonial: `I hope that this year more people (especially girls!) are encouraged to try out programming and stepping out of their comfort zones`,
	},
	{
		img: Jasmine_Chung,
		name: 'Jasmine Chung - Marketing Lead',
		testimonial: `Hi! My name is Jasmine Chung and my position in the Hackathon Club is Marketing Lead. My hobbies include drawing digitally on Procreate, playing the violin, and building Lego kits. 

    Why I love programming: 
    From websites, GUIs, 3D graphics, applications, or programming a robot, you can create just about anything. Additionally, there are a huge variety of languages you can learn, and each one has its own unique features!`,
	},
	{
		img: Alice_Kim,
		name: 'Alice Kim - Publicist',
		testimonial: `Hey!! My name is Alice Kim and I'm the publicist for the Hackathon club at CV! My goals for this community is, hopefully everyone will reach a sense of inspiration to create whatever they would like with the help of our club, even if it is very difficult along the way :)`,
	},
];

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
