import {
	Card,
	CardImg,
	CardContent,
	CardTitle,
	CardDescription,
} from '../styles/Sponsor.style';

function Sponsor(props) {
	return (
		<Card className='clr-white  sponsor-card'>
			<CardImg src={props.img} alt='sponsor' />
			<CardContent>
				<a href='#top'>
					<CardTitle>{props.title}</CardTitle>
				</a>
				<CardDescription>{props.text}</CardDescription>
			</CardContent>
		</Card>
	);
}

export default Sponsor;
