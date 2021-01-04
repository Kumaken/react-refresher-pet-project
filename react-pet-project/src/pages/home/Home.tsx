import LoginButton from 'components/auth/LoginButton';
import NavbarComponent from 'components/navbar/NavbarComponent';
import NewsSection from 'components/news/NewsSection';

import React from 'react';

const Home = () => {
	return (
		<>
			<LoginButton></LoginButton>
			<NavbarComponent></NavbarComponent>
			<NewsSection></NewsSection>
		</>
	);
};

export default Home;
