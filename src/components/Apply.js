import React, { useState } from 'react';
import { ApplicationContainer, ApplicationForm, ApplicationTitle, ApplicationQueryLabel, ApplicationQuery, ApplicationQueryContainer, ReceiptContainer, ReceiptContent, ReceiptEvent, ReceiptInfo, ReceiptSubtitle, ReceiptSection, ReceiptLI } from '../styles/Apply.style';
import NavbarApply from './NavbarApply';
import { Events } from '../utils/Events';
import Axios from 'axios';
import server from '../../config/server';

let queries = [
	{
		title: 'First Name',
		type: 'text',
		name: 'fname',
		placeholder: 'Enter First Name',
		required: true,
	},
	{
		title: 'Last Name',
		type: 'text',
		name: 'lname',
		placeholder: 'Enter Last Name',
		required: false,
	},
	{
		title: 'Email',
		type: 'text',
		name: 'email',
		placeholder: 'Enter Email',
		required: true,
	},
	{
		title: 'Organization',
		type: 'text',
		name: 'org',
		placeholder: 'Enter School or Organization',
		required: false,
	},
];

let checkboxes = [];
let eventDates = [];

const sortedEvents = Events.slice().sort((a, b) => new Date(a.title) - new Date(b.title));
const NOW = new Date().getTime();

for (let i = 0; i < sortedEvents.length; i++) {
	if (new Date(sortedEvents[i].title) < new Date(NOW)) {
		sortedEvents.splice(i, 1);
		i -= 1;
	}
}

sortedEvents.map((event, id) => {
	eventDates.push(
		new Date(event.title)
			.toLocaleDateString('sv', {
				year: 'numeric',
				month: '2-digit',
				day: '2-digit',
				timezone: 'America/Los_Angeles',
			})
			.replace(/-+/g, '_')
	);
	return checkboxes.push(
		id === 0
			? {
					title: event.title,
					type: 'checkbox',
					name: 'event',
					required: true,
			  }
			: {
					title: event.title,
					type: 'checkbox',
					name: 'event',
					required: false,
			  }
	);
});

function Apply() {
	const [data, setData] = useState({
		fname: null,
		lname: null,
		email: null,
		org: null,
		events: new Array(Events.length).fill(false),
	});

	const [receipt, setReceipt] = useState(false);

	const addEntrant = (e) => {
		if (document.querySelector('#form').checkValidity()) {
			e.preventDefault();
			Axios.post(`${server}/create`, {
				fname: data.fname,
				lname: data.lname,
				email: data.email,
				org: data.org,
				events: data.events,
				eventDates: eventDates,
			}).then((response) => {
				setReceipt(true);
			});
		}
	};

	const handleTextChange = ({ target }, val) => {
		setData((prevData) => ({ ...prevData, [val]: target.value }));
	};

	const handleCheckChange = (position) => {
		const updatedCheckState = data.events.map((event, index) => (index === position ? !event : event));
		setData((prevData) => ({ ...prevData, events: updatedCheckState }));
	};

	return (
		<>
			<NavbarApply />
			<ApplicationContainer id='top'>
				<ApplicationTitle>Registration Form</ApplicationTitle>
				<ApplicationForm id='form' className='clr-white'>
					{queries.map((query, key) => {
						return (
							<ApplicationQueryContainer name={query.name} key={key}>
								<ApplicationQueryLabel htmlFor={query.name}>{query.title}</ApplicationQueryLabel>
								<ApplicationQuery type={query.type} name={query.name} onChange={(e) => handleTextChange(e, query.name)} placeholder={query.placeholder} required={query.required} />
							</ApplicationQueryContainer>
						);
					})}
					{checkboxes.map((query, key) => {
						return (
							<ApplicationQueryContainer name={query.name} key={key}>
								<ApplicationQueryLabel htmlFor={query.name}>{query.title}</ApplicationQueryLabel>
								<ApplicationQuery type={query.type} name={query.name} onChange={() => handleCheckChange(key)} required={query.required} />
							</ApplicationQueryContainer>
						);
					})}
					<ApplicationQuery type='submit' value='submit' onClick={(e) => addEntrant(e)} />
				</ApplicationForm>
			</ApplicationContainer>
			{receipt && (
				<ReceiptContainer className='clr-white'>
					{data.events.map((event, id) => {
						return (
							event && (
								<ReceiptLI key={id}>
									<ReceiptEvent>{sortedEvents[id].title}</ReceiptEvent>
									<ReceiptInfo>
										<ReceiptSection>
											<ReceiptSubtitle>First Name</ReceiptSubtitle>
											<ReceiptContent>{data.fname}</ReceiptContent>
										</ReceiptSection>
										<ReceiptSection>
											<ReceiptSubtitle>Last Name</ReceiptSubtitle>
											<ReceiptContent>{data.lname}</ReceiptContent>
										</ReceiptSection>
										<ReceiptSection>
											<ReceiptSubtitle>Email</ReceiptSubtitle>
											<ReceiptContent>{data.email}</ReceiptContent>
										</ReceiptSection>
										<ReceiptSection>
											<ReceiptSubtitle>Organization</ReceiptSubtitle>
											<ReceiptContent>{data.org}</ReceiptContent>
										</ReceiptSection>
									</ReceiptInfo>
								</ReceiptLI>
							)
						);
					})}
				</ReceiptContainer>
			)}
		</>
	);
}

export default Apply;
