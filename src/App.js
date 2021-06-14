import {
	BrowserRouter as Router,
	Switch,
	Route,
	Redirect
} from 'react-router-dom';
import LandingPage from './pages/LandingPage';
import OurWork from './components/OurWork';
import Contact from './components/Contact';
import About from './components/About';
import Work from './pages/Work';
import Upload from './pages/Upload';

function App() {
	return (
		<Router>
			<Switch>
				<Route path="/upload">
					<Upload />
				</Route>
				<Route path="/work/:workType">
					<Work />
				</Route>
				<Route path="/">
					<LandingPage />
					<OurWork />
					<About />
					<Contact />
				</Route>
				<Redirect to="/" />
			</Switch>
		</Router>
	);
}
export default App;
