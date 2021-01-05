import { fetchLineNews } from 'api/news';
import NewsCarousel from 'components/news/NewsCarousel';
import NewsSection from 'components/news/NewsSection';
import NewsTabs from 'components/news/NewsTabs';
import { NewsActiveTabContext } from 'contexts/News';

import React, { useEffect, useState } from 'react';

const News = () => {
	const sortNewsIntoCategories = (data) => {
		if (!data) {
			return;
		}
		const sortedNews = {};

		data.result.categories.forEach((category) => {
			sortedNews[category.name] = {};
			sortedNews[category.name]['untagged'] = [];
			category.templates.forEach((template) => {
				const tags = template.title || 'untagged';
				if (tags) {
					sortedNews[category.name][tags] = [];
				}
				template.sections.forEach((section) => {
					section.articles.forEach((article) => {
						// remove ads and invalid articles
						if (article.id > 0 && article.source !== 'AD' && article.thumbnail)
							sortedNews[category.name][tags].push(article);
					});
				});
			});
		});

		return sortedNews;
	};

	const [newsPool, setNewsPool] = useState<any | undefined>(undefined);
	const [newsCategories, setNewsCategories] = useState<string[]>([]);
	const [currentActiveTab, setCurrentActiveTab] = useState('TOP');

	useEffect(() => {
		const { cancel, request } = fetchLineNews();
		request
			.then((data) => {
				const sortedNews = sortNewsIntoCategories(data);
				console.log(sortedNews);
				setNewsPool(sortedNews);

				const categories: string[] = [];
				for (let category in sortedNews) {
					categories.push(category);
				}
				setNewsCategories(categories);
			})
			.catch((err) => {
				console.log(err);
			});

		return () => {
			cancel();
		};
	}, []); // only fetch once!

	return (
		<NewsActiveTabContext.Provider value={{ currentActiveTab, setCurrentActiveTab }}>
			<NewsTabs categoryList={newsCategories}></NewsTabs>
			<NewsCarousel {...newsPool}></NewsCarousel>
			<NewsSection {...newsPool}></NewsSection>
			{/* needs to be passed with 'categoryList' key because the value is a list and can't be spread*/}
		</NewsActiveTabContext.Provider>
	);
};

export default News;
