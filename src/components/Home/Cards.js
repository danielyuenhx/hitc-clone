import React from 'react';

import Card from './Card';

import img1 from '../../images/88_HITC_SplashPage01-scaled.jpg';
import img2 from '../../images/88_HITC_SplashPage03-scaled.jpg';
import img3 from '../../images/88_HITC_SplashPage03.jpg';

const Cards = (props) => {
	return (
		<div className="sm:flex-col flex justify-around h-auto w-10/12 m-auto relative">
			<Card
				img={img1}
				title="jakarta, indonesia"
				location="community park pik2"
				onClick={props.onClick}
			/>
			<Card
				img={img3}
				title="jakarta, indonesia"
				location="community park pik2"
				onClick={props.onClick}
			/>
			<Card
				img={img2}
				title="manila, philippines"
				location="SM Festival Grounds Parañaque City"
				onClick={props.onClick}
			/>
		</div>
	);
};

export default Cards;
