import { createContext } from 'react';

export default createContext({
	lang: 'en',
	isMk: false,
	setLang: () => {},
	setIsMk: () => {}
});
