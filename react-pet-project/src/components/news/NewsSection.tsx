import React, { useEffect, useState } from 'react';
import NewsCard from './NewsCard';
import { INewsCardProps } from 'interfaces/news/INewsCardProps';
import { fetchLineNews } from 'api/news';

const NewsSection = () => {
	const temp: INewsCardProps = { title: 'hello', imageHash: 'aa', publisher: 'hay' };
	const [newsPool, setNewsPool] = useState<any | undefined>(undefined);

	useEffect(() => {
		const { cancel, request } = fetchLineNews();
		request
			.then((data) => {
				const sortedNews = sortNewsIntoCategories(data);
				console.log(sortedNews);
				setNewsPool(sortedNews);
			})
			.catch((err) => {
				console.log(err);
			});

		return () => {
			cancel();
		};
	});

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
						if (article.id > 0 && article.source !== 'AD') sortedNews[category.name][tags].push(article);
					});
				});
			});
		});

		return sortedNews;
	};

	const iterateNews = () => {
		if (newsPool) {
			const newsCards: JSX.Element[] = [];
			for (let category in newsPool) {
				for (let tags in newsPool[category]) {
					newsPool[category][tags].forEach((article) => {
						const newsProps: INewsCardProps = {
							title: article.title,
							imageHash: article.thumbnail?.hash,
							publisher: article.publisher
						};
						newsCards.push(<NewsCard {...newsProps}></NewsCard>);
					});
				}
			}
			return <>{newsCards}</>;
		}
	};
	return (
		<div>
			{iterateNews()}
			{/* <NewsCard {...temp}></NewsCard>
			<NewsCard {...temp}></NewsCard> */}
		</div>
	);
};

export default NewsSection;
