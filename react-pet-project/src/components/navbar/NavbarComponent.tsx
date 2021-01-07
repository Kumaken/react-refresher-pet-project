import LoginButton from 'components/auth/LoginButton';
import { LoginContext } from 'contexts/Login';
import React, { useContext } from 'react';
// import Navbar from 'react-bulma-components/lib/components/navbar';
import Navbar from 'react-bulma-components/lib/components/navbar';
import { Link } from 'react-router-dom';
import './NavbarComponent.scss';

const NavbarComponent = () => {
	const { username } = useContext(LoginContext);

	return (
		<Navbar color="black" fixed="top" active={false} transparent={false}>
			<Navbar.Brand>
				<Navbar.Burger />
			</Navbar.Brand>
			<Navbar.Menu className="navbar-menu">
				<Navbar.Container>
					<div className="navbar-item">
						<Link to="/news">News</Link>
					</div>
					<div className="navbar-item">
						<Link to="/games">Games</Link>
					</div>
				</Navbar.Container>
				<Navbar.Container position="end">
					{username !== '' ? (
						<Navbar.Item>
							Hello there, &nbsp;<b>{username}</b>
						</Navbar.Item>
					) : null}

					<LoginButton></LoginButton>
				</Navbar.Container>
			</Navbar.Menu>
		</Navbar>
	);
};

export default NavbarComponent;

// import React from 'react';
// import Button from 'react-bulma-components/lib/components/button';

// export default () => <Button color="primary">My Bulma button</Button>;
