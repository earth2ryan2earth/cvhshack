import { Card, CardImg, CardContent, CardTitle } from '../styles/Sponsor.style';

function Sponsor(props) {
	return (
		<Card className='clr-white  sponsor-card'>
			<CardImg
				src={props.img}
				alt='sponsor'
			/>
			<CardContent>
				<a href={props.href}>
					<CardTitle>{props.title}</CardTitle>
				</a>
			</CardContent>
		</Card>
	);
}

export default Sponsor;
