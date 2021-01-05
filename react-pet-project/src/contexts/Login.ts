import React from 'react';

// Context:
export const LoginContext = React.createContext({
	username: '',
	setUsername: (key: string) => {},
	imageUrl: '',
	setImageUrl: (key: string) => {}
});
