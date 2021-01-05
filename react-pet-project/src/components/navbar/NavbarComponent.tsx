import LoginButton from 'components/auth/LoginButton';
import React from 'react';
// import Navbar from 'react-bulma-components/lib/components/navbar';
import Navbar from 'react-bulma-components/lib/components/navbar';

const NavbarComponent = () => {
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
			<Navbar.Menu>
				<Navbar.Container>
					<Navbar.Item href="#">News</Navbar.Item>
					<Navbar.Item dropdown hoverable href="#">
						<Navbar.Link arrowless={true}>First</Navbar.Link>
						<Navbar.Dropdown>
							<Navbar.Item href="#">Subitem 1</Navbar.Item>
							<Navbar.Item href="#">Subitem 2</Navbar.Item>
						</Navbar.Dropdown>
					</Navbar.Item>
				</Navbar.Container>
				<Navbar.Container position="end">
					<Navbar.Item href="#">Hello</Navbar.Item>
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
