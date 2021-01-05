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
				<Navbar.Item renderAs="a" href="#">
					<img
						src="https://bulma.io/images/bulma-logo.png"
						alt="Bulma: a modern CSS framework based on Flexbox"
						width="112"
						height="28"
					/>
				</Navbar.Item>
				<Navbar.Burger />
			</Navbar.Brand>
			<Navbar.Menu className="navbar-menu">
				<Navbar.Container>
					<Navbar.Item>
						<Link to="/news">News</Link>
					</Navbar.Item>
					<Navbar.Item>
						<Link to="/games">Games</Link>
					</Navbar.Item>
					<Navbar.Item dropdown hoverable href="#">
						<Navbar.Link arrowless={true}>Games</Navbar.Link>
						<Navbar.Dropdown>
							<Navbar.Item href="#">Subitem 1</Navbar.Item>
							<Navbar.Item href="#">Subitem 2</Navbar.Item>
						</Navbar.Dropdown>
					</Navbar.Item>
				</Navbar.Container>
				<Navbar.Container position="end">
					{username !== '' ? (
						<Navbar.Item href="#">
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
