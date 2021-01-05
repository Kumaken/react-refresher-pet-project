import { NewsActiveTabContext } from 'contexts/News';
import React, { useCallback, useContext, useMemo } from 'react';
import Tabs from 'react-bulma-components/lib/components/tabs';

const NewsTabs = (props: any) => {
	// this still rerenders because category tabs depends on setCurrentActiveTab
	const { currentActiveTab, setCurrentActiveTab } = useContext(NewsActiveTabContext); // will rerender everytime context changes

	const CategoryTabs = useCallback(
		(props) => {
			const iterateTabs = () => {
				const tabs: JSX.Element[] = [];
				console.log(props.categoryList);
				props.categoryList.forEach((category) => {
					tabs.push(
						<Tabs.Tab
							key={category}
							active={category === currentActiveTab}
							onClick={() => setCurrentActiveTab(category)}
						>
							{category}
						</Tabs.Tab>
					);
				});

				return tabs;
			};

			return (
				<Tabs type="boxed" fullwidth={true} align={'centered'}>
					{iterateTabs()}
				</Tabs>
			);
		},
		[currentActiveTab, setCurrentActiveTab]
	);

	return useMemo(() => CategoryTabs(props), [CategoryTabs, props]);
	// return (
	// 	<>
	// 		<CategoryTabs {...props} />
	// 	</>
	// );
};

export default NewsTabs;
