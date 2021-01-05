import React from 'react';

// Context:
export const NewsActiveTabContext = React.createContext({
	currentActiveTab: '',
	setCurrentActiveTab: (key: string) => {}
});
