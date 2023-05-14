import { useState } from 'react';
import './App.css';

import Header from './components/Header';
import Cards from './components/Home/Cards';
import Container from './components/Content/Container';

function App() {
	const [isHome, setIsHome] = useState(true);

	return (
		<div className="App">
			{isHome && (
				<>
					<Header />
					<Cards onClick={setIsHome} />
				</>
			)}
			{!isHome && (
				<>
					<Container onClick={setIsHome} />
				</>
			)}
		</div>
	);
}

export default App;
