import React, { useContext, useState } from 'react';
// import { useGoogleLogin } from 'react-google-login';
import './LoginButton.scss';

// refresh token
import refreshTokenSetup from '../../utils/RefreshTokenSetup';
// credentials
import { GOOGLE_OAUTH_CLIENT_ID } from '../../config/config';
// button
import { GoogleLogin, useGoogleLogout } from 'react-google-login';
import { LoginContext } from 'contexts/Login';
import Navbar from 'react-bulma-components/lib/components/navbar';
import Image from 'react-bulma-components/lib/components/image';

const LoginButton = () => {
	const [isLoggedIn, setIsLoggedIn] = useState(false);
	const { setUsername, imageUrl, setImageUrl } = useContext(LoginContext);

	const onSuccess = (resp: any) => {
		console.log('Login Success: currentUser:', resp.profileObj);
		refreshTokenSetup(resp);
		setIsLoggedIn(true);
		setUsername(resp.profileObj.name);
		setImageUrl(resp.profileObj.imageUrl);
		alert(`Logged in successfully welcome ${resp.profileObj.name} 😍. \n See console for full profile object.`);
	};

	const onFailure = (resp: any) => {
		console.log('Login failed: res:', resp);
		alert(`Failed to login. 😢 Please ping this to repo owner twitter.com/sivanesh_fiz`);
	};

	const onLogoutSuccess = () => {
		console.log('Logged out Successful!');
		setIsLoggedIn(false);
		setUsername('');
		alert('Logged out Successfully ✌');
	};

	const onLogoutFailure = () => {
		console.log('Logout failed!');
	};

	const { signOut } = useGoogleLogout({
		clientId: GOOGLE_OAUTH_CLIENT_ID!,
		onLogoutSuccess: onLogoutSuccess,
		onFailure: onLogoutFailure
	});
	// const { signIn } = useGoogleLogin({
	// 	onSuccess,
	// 	onFailure,
	// 	clientId: GOOGLE_OAUTH_CLIENT_ID!,
	// 	isSignedIn: true, // to stay logged in
	// 	accessType: 'offline'
	// 	// responseType: 'code',
	// 	// prompt: 'consent',
	// });

	return (
		<>
			{!isLoggedIn ? (
				<GoogleLogin
					className="google-login-button"
					clientId={GOOGLE_OAUTH_CLIENT_ID!}
					buttonText="Login with Google"
					onSuccess={onSuccess}
					onFailure={onFailure}
					cookiePolicy={'single_host_origin'}
					isSignedIn={true}
				/>
			) : (
				<Navbar.Item className="profile-item" dropdown hoverable>
					<Navbar.Item arrowless={false}>
						<Image rounded className="profile-img" src={imageUrl}></Image>
					</Navbar.Item>
					<Navbar.Dropdown className="is-right">
						<Navbar.Item onClick={signOut}>
							Logout
							{/* <GoogleLogout
								clientId={GOOGLE_OAUTH_CLIENT_ID!}
								buttonText="Logout"
								onLogoutSuccess={onLogoutSuccess}
								onFailure={onLogoutFailure}
							/> */}
						</Navbar.Item>
					</Navbar.Dropdown>
				</Navbar.Item>
			)}
		</>

		// <button onClick={signIn} className="button">
		// 	<img src="icons/google.svg" alt="google login" className="icon"></img>

		// 	<span className="buttonText">Sign in with Google</span>
		// </button>
	);
};

export default LoginButton;
