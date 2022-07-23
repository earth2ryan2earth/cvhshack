import { useState, useEffect, useMemo } from 'react';
import { EventCard, EventCardTitle } from '../styles/Event.style';
import Axios from 'axios';
import { AgGridReact } from 'ag-grid-react';
import server from '../../config/server';

import 'ag-grid-community/styles/ag-grid.css';
import 'ag-grid-community/styles/ag-theme-alpine.min.css';

function Event(props) {
	const [dataVisible, setDataVisible] = useState(false);
	const [ariaExpanded, setAriaExpanded] = useState(false);
	const [isSelected, setIsSelected] = useState(false);
	const [tabIndex, setTabIndex] = useState(null);
	const [eventData, setEventData] = useState([]);
	const [loading, setLoading] = useState(true);
	const [error, setError] = useState(null);
	const [columnDefs, setColumnDefs] = useState([
		{ field: 'id', filter: true },
		{ field: 'fname', filter: true },
		{ field: 'lname', filter: true },
		{ field: 'email', filter: true },
		{ field: 'org', filter: true },
	]);

	const defaultColDef = useMemo(() => ({
		sortable: true,
	}));

	useEffect(() => {
		Axios.post(`${server}/entrants`, {
			title: props.title,
		})
			.then((response) => {
				console.log(response.data);
				setEventData(response.data);
			})
			.catch((error) => {
				console.error('Error Fetching Data: ', error);
				setError(error);
			})
			.finally(() => {
				setLoading(false);
			});
	}, [props.title]);

	if (loading) return <EventCard>Loading...</EventCard>;
	if (error) return <EventCard>Error! {error}</EventCard>;

	return (
		<>
			<EventCard
				className='show-entrants'
				aria-controls={props.title}
				aria-expanded={ariaExpanded}
				tabIndex={0}
				data-selected={isSelected}
				onClick={() => {
					setAriaExpanded((curr) => !curr);
					setDataVisible((curr) => !curr);
					setIsSelected((curr) => !curr);
					setTabIndex((curr) => (curr === null ? 0 : null));
				}}
			>
				<EventCardTitle>{props.title}</EventCardTitle>
			</EventCard>
			<EventCard id={props.title} className='fullwidth ag-theme-alpine-dark' data-visible={dataVisible} tabIndex={tabIndex}>
				{eventData.code ? 'No Table Data.' : <AgGridReact rowData={eventData} columnDefs={columnDefs} defaultColDef={defaultColDef} animateRows={true} rowSelection='multiple' />}
			</EventCard>
		</>
	);
}

export default Event;
