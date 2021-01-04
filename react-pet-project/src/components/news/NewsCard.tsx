import React from 'react';
import Card from 'react-bulma-components/lib/components/card';
import Media from 'react-bulma-components/lib/components/media';
import Image from 'react-bulma-components/lib/components/image';
import Content from 'react-bulma-components/lib/components/content';
import Heading from 'react-bulma-components/lib/components/heading';
import { RouteComponentProps } from 'react-router-dom';

import './NewsCard.scss';
import { INewsCardProps } from 'interfaces/news/INewsCardProps';

const NewsCard = (props: INewsCardProps) => {
	const LINE_IMAGE_PREFIX = 'https://obs.line-scdn.net/';

	return (
		<Card className="news-card">
			<Card.Image size="4by3" src={`${LINE_IMAGE_PREFIX}${props.imageHash}`} />
			<Card.Content>
				<Content>{props.title}</Content>
			</Card.Content>
		</Card>
	);
};

export default NewsCard;
