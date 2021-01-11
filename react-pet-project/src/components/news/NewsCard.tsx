import React from 'react';
import Card from 'react-bulma-components/lib/components/card';
import Content from 'react-bulma-components/lib/components/content';

import './NewsCard.scss';
import { INewsCardProps } from 'interfaces/news/INewsCardProps';

const NewsCard = (props: INewsCardProps) => {
	const LINE_IMAGE_PREFIX = 'https://obs.line-scdn.net/';

	return (
		<Card className="news-card">
			<Card.Image size="5by3" src={`${LINE_IMAGE_PREFIX}${props.imageHash}`} />
			<Card.Content className="news-title">
				<Content className="news-title-text">{props.title}</Content>
				<Content className="news-publisher-text">{props.publisher}</Content>
			</Card.Content>
		</Card>
	);
};

export default NewsCard;
