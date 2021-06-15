import { useState } from 'react';
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
import LangContext from './context/lang-context';

function App() {
	const [lang, setLang] = useState('en');
	const [isMk, setIsMk] = useState(false);

	return (
		<LangContext.Provider
			value={{
				lang,
				setLang,
				isMk,
				setIsMk
			}}>
			<Router>
				<div className={`page-wrapper ${lang}`}>
					<Switch>
						<Route exact path="/">
							<LandingPage />
							<OurWork />
							<About />
							<Contact />
						</Route>
						<Route exact path="/upload">
							<Upload />
						</Route>
						<Route exact path="/work/:workType">
							<Work />
						</Route>
						<Redirect to="/" />
					</Switch>
				</div>
			</Router>
		</LangContext.Provider>
	);
}
export default App;
