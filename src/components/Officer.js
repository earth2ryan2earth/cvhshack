import {
	Card,
	CardImg,
	CardContent,
	CardTitle,
	CardDescription,
} from '../styles/Officer.style';

function Officer(props) {
	console.log(props);
	return (
		<Card className='clr-white officer-card'>
			<CardImg
				src={props.img}
				alt={props.name}
			/>
			<CardContent>
				<a href='#top'>
					<CardTitle>{props.name}</CardTitle>
				</a>
				<CardDescription>{props.testimonial}</CardDescription>
			</CardContent>
		</Card>
	);
}

export default Officer;
