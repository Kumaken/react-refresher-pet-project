// import bulmaCarousel from 'bulma-carousel/dist/js/bulma-carousel.min.js';

import { NewsActiveTabContext } from 'contexts/News';
import React, { useContext, useEffect, useState } from 'react';
import { Carousel } from 'react-responsive-carousel';
import './NewsCarousel.scss';

const NewsCarousel = (props: any) => {
	const [news, setNews] = useState<any[]>();
	const LINE_IMAGE_PREFIX = 'https://obs.line-scdn.net/';
	const { currentActiveTab } = useContext(NewsActiveTabContext); // will rerender everytime context changes

	useEffect(() => {
		if (!props[currentActiveTab]) return;
		let count = 0;
		const newsList: any[] = [];
		console.log(currentActiveTab);
		console.log(props);
		for (let data of props[currentActiveTab]['untagged']) {
			if (count >= 7) break;
			newsList.push(data);
			count++;
		}
		// handle if no untagged or still less than 7 carousel news:
		for (let tag in props[currentActiveTab]) {
			for (let data of props[currentActiveTab][tag]) {
				if (count >= 7) break;
				newsList.push(data);
				count++;
			}
		}

		setNews(newsList);
	}, [currentActiveTab, props]);

	const iterateCarousel = () => {
		const carouselList: JSX.Element[] = [];

		news?.forEach((data) => {
			carouselList.push(
				<div key={`${currentActiveTab}${data.id}`}>
					<img
						src={`${LINE_IMAGE_PREFIX}${data.thumbnail?.hash}`}
						alt="carousel"
						className="news-carousel-img"
					></img>
					<p className="legend">{data.title}</p>
				</div>
			);
		});

		return carouselList;
	};
	return (
		<Carousel className="news-carousel" showArrows={true} showThumbs={false} autoPlay={true}>
			{iterateCarousel()}
		</Carousel>
	);
};

export default NewsCarousel;
