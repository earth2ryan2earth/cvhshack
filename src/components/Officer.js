import {
	Card,
	CardImg,
	CardContent,
	CardTitle,
	CardDescription,
} from '../styles/Officer.style';

function Officer(props) {
	return (
		<Card className='clr-white officer-card'>
			<CardImg
				src={props.img}
				alt={props.name}
			/>
			<CardContent>
				<CardTitle>{props.name}</CardTitle>
				<CardDescription>{props.testimonial}</CardDescription>
			</CardContent>
		</Card>
	);
}

export default Officer;
