import React, { useState } from 'react';
// import logo from './logo.svg';
import './App.scss';
import News from 'pages/News';
import 'react-responsive-carousel/lib/styles/carousel.min.css';
import { BrowserRouter, Route, Switch } from 'react-router-dom';
import Games from 'pages/Games';
import NavbarComponent from 'components/navbar/NavbarComponent';
import { LoginContext } from 'contexts/Login';

function App() {
	const [username, setUsername] = useState('');
	const [imageUrl, setImageUrl] = useState('');

	return (
		<div className="App">
			<LoginContext.Provider value={{ username, setUsername, imageUrl, setImageUrl }}>
				<BrowserRouter>
					<NavbarComponent></NavbarComponent>

					<Switch>
						<Route path="/" exact>
							<News></News>
						</Route>
						<Route path="/news">
							<News></News>
						</Route>
						<Route path="/games">
							<Games></Games>
						</Route>
					</Switch>
				</BrowserRouter>
			</LoginContext.Provider>
			{/* <header className="App-header">
				<img src={logo} className="App-logo" alt="logo" />
				<p>
					Edit <code>src/App.tsx</code> and save to reload.
				</p>
				<a className="App-link" href="https://reactjs.org" target="_blank" rel="noopener noreferrer">
					Learn React
				</a>
			</header> */}
		</div>
	);
}

export default App;
