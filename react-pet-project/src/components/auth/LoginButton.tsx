import React, { useState } from 'react';
// import { useGoogleLogin } from 'react-google-login';
import './LoginButton.css';

// refresh token
import refreshTokenSetup from '../../utils/RefreshTokenSetup';
// credentials
import { GOOGLE_OAUTH_CLIENT_ID } from '../../config/config';
// button
import { GoogleLogin, GoogleLogout } from 'react-google-login';

const LoginButton = () => {
	const [isLoggedIn, setIsLoggedIn] = useState(false);

	const onSuccess = (resp: any) => {
		console.log('Login Success: currentUser:', resp.profileObj);
		refreshTokenSetup(resp);
		setIsLoggedIn(true);
		alert(`Logged in successfully welcome ${resp.profileObj.name} 😍. \n See console for full profile object.`);
	};

	const onFailure = (resp: any) => {
		console.log('Login failed: res:', resp);
		alert(`Failed to login. 😢 Please ping this to repo owner twitter.com/sivanesh_fiz`);
	};

	const onLogoutSuccess = () => {
		console.log('Logged out Successful!');
		setIsLoggedIn(false);
		alert('Logged out Successfully ✌');
	};

	const onLogoutFailure = () => {
		console.log('Logout failed!');
	};

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
					clientId={GOOGLE_OAUTH_CLIENT_ID!}
					buttonText="Login with Google"
					onSuccess={onSuccess}
					onFailure={onFailure}
					cookiePolicy={'single_host_origin'}
					isSignedIn={true}
				/>
			) : (
				<GoogleLogout
					clientId={GOOGLE_OAUTH_CLIENT_ID!}
					buttonText="Logout"
					onLogoutSuccess={onLogoutSuccess}
					onFailure={onLogoutFailure}
				/>
			)}
		</>

		// <button onClick={signIn} className="button">
		// 	<img src="icons/google.svg" alt="google login" className="icon"></img>

		// 	<span className="buttonText">Sign in with Google</span>
		// </button>
	);
};

export default LoginButton;
