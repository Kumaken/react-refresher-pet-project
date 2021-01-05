import LoginButton from 'components/auth/LoginButton';
import NavbarComponent from 'components/navbar/NavbarComponent';
import NewsSection from 'components/news/NewsSection';
import NewsTabs from 'components/news/NewsTabs';

import React from 'react';

const Home = () => {
	return (
		<>
			<LoginButton></LoginButton>
			<NavbarComponent></NavbarComponent>
			<NewsTabs></NewsTabs>
			<NewsSection></NewsSection>
		</>
	);
};

export default Home;
