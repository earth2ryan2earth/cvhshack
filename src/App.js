import './styles/Global.style';
import PageContent from './components/PageContent';
import Apply from './components/Apply';
import Sponsors from './components/Sponsors';
import Entrants from './components/Entrants';
import Footer from './components/Footer';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import GlobalStyle from './styles/Global.style';
import ScrollToTop from './functions/ScrollToTop';

// FOR CLIENT in 'React Attempt'/client
// npm install react-router-dom
// npm install styled-components
// npm install react-scroll
// npm install react-router-hash-link
// npm install axios

// FOR SERVER in 'React Attempt'/server
// npm init -y
// npm install mysql
// npm install express
// npm install cors
// npm install dotenv

function App() {
	return (
		<Router>
			<GlobalStyle />
			<ScrollToTop />
			<Routes>
				<Route path='/' element={<PageContent />} />
				<Route path='/apply' element={<Apply />} />
				<Route path='/sponsors' element={<Sponsors />} />
				<Route path='/events' element={<Entrants />} />
			</Routes>
			<Footer />
		</Router>
	);
}

export default App;
