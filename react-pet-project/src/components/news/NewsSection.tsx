import React, { useContext } from 'react';
import NewsCard from './NewsCard';
import { INewsCardProps } from 'interfaces/news/INewsCardProps';
import { NewsActiveTabContext } from 'contexts/News';
import './NewsSection.scss';

const NewsSection = (newsPool: any) => {
	const { currentActiveTab } = useContext(NewsActiveTabContext); // will rerender everytime context changes

	const iterateNews = () => {
		if (newsPool) {
			console.log('Rendering category: ', currentActiveTab);
			const newsCards: JSX.Element[] = [];
			console.log(newsPool[currentActiveTab]);
			for (let tags in newsPool[currentActiveTab]) {
				if (tags === 'untagged' || newsPool[currentActiveTab][tags].length <= 0) continue;
				newsCards.push(
					<>
						<div className="tags-title">{tags}</div>
						<hr className="news-section-line" />
					</>
				);
				newsPool[currentActiveTab][tags].forEach((article) => {
					const newsProps: INewsCardProps = {
						title: article.title,
						imageHash: article.thumbnail?.hash,
						publisher: article.publisher
					};
					// CAREFUL! IF KEY IS NOT UNIQUE, DUPLICATES RERENDER CAN HAPPEN
					newsCards.push(<NewsCard key={tags + article.id} {...newsProps}></NewsCard>);
				});
			}
			return <>{newsCards}</>;
		}
	};
	return (
		<div className="news-section">
			{iterateNews()}
			{/* <NewsCard {...temp}></NewsCard>
			<NewsCard {...temp}></NewsCard> */}
		</div>
	);
};

export default NewsSection;
