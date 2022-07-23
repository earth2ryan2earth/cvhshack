import { Events } from '../utils/Events';

export default function getCountdown() {
	const sortedEvents = Events.slice().sort((a, b) => new Date(a.title) - new Date(b.title));
	const NOW = new Date().getTime();

	for (let i = 0; i < sortedEvents.length; i++) {
		if (new Date(sortedEvents[i].title) < new Date(NOW)) {
			sortedEvents.splice(i, 1);
			i -= 1;
		}
	}

	try {
		var countDownDate = new Date(sortedEvents[0].title).getTime();
	} catch {
		countDownDate = new Date('Jan 1, 0000 00:00:00').getTime();
	}

	var interval = setInterval(() => {
		var now = new Date().getTime();

		var distance = countDownDate - now;

		var days = Math.floor(distance / (1000 * 60 * 60 * 24));
		var hours = Math.floor((distance % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
		var minutes = Math.floor((distance % (1000 * 60 * 60)) / (1000 * 60));
		var seconds = Math.floor((distance % (1000 * 60)) / 1000);

		days = (days < 10 ? '0' : '') + days;
		hours = (hours < 10 ? '0' : '') + hours;
		minutes = (minutes < 10 ? '0' : '') + minutes;
		seconds = (seconds < 10 ? '0' : '') + seconds;
		if (distance < 0) {
			clearInterval(interval);
			document.querySelector('.title-next-event-countdown').innerHTML = 'EXPIRED';
			document.querySelector('.title-next-event-date').innerHTML = 'EXPIRED';
		} else {
			document.querySelector('.title-next-event-date').innerHTML = new Intl.DateTimeFormat('en-US', {
				dateStyle: 'full',
				timeStyle: 'long',
				timeZone: 'America/Los_Angeles',
			}).format(countDownDate);
			document.querySelector('.title-next-event-countdown-days').innerHTML = days;
			document.querySelector('.title-next-event-countdown-hours').innerHTML = hours;
			document.querySelector('.title-next-event-countdown-minutes').innerHTML = minutes;
			document.querySelector('.title-next-event-countdown-seconds').innerHTML = seconds;
		}
	});
}
