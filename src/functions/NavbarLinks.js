import { useState, useEffect } from 'react';
import { useLocation } from 'react-router-dom';

const NAV = {
	home: '#top',
	info: '#info',
	about: '#about',
	officers: '#officers',
	apply: '/apply',
	sponsors: '/sponsors',
	active: '/',
};

export default function useNavbarLinks() {
	const { pathname } = useLocation();
	const [getNav, setNav] = useState(NAV);

	useEffect(() => {
		if (pathname === '/apply') {
			setNav({
				home: '/' + NAV.home,
				info: '/' + NAV.info,
				about: '/' + NAV.about,
				officers: '/' + NAV.officers,
				apply: '#top',
				sponsors: NAV.sponsors,
				active: '/apply',
			});
		} else if (pathname === '/sponsors') {
			setNav({
				info: '/' + NAV.info,
				about: '/' + NAV.about,
				officers: '/' + NAV.officers,
				apply: NAV.apply,
				sponsors: '#top',
				active: '/sponsors',
			});
		} else {
			setNav(NAV);
		}
	}, [pathname]);

	return getNav;
}
