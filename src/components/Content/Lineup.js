import React, { useRef, useEffect, useState } from 'react';
import ReactDOM from 'react-dom';

import HoverImage from './HoverImage';

import special from '../../images/special_guest.png';

const Lineup = () => {
	const lineupRef = useRef(null);
    const portalElement = document.getElementById('root');

	return (
		<div>
			{ReactDOM.createPortal(
				<HoverImage links={lineupRef} />,
				portalElement
			)}
			<div
				className="flex justify-center items-center relative w-full text-center font-bold text-lg tracking-tight pt-7 pb-7 select-none z-50"
				ref={lineupRef}
			>
				<ul className="w-full [&>*]:pt-1">
					<li>The 1975</li>
					<li>The Strokes</li>
					<li>Drake</li>
				</ul>
				<ul className="w-full [&>*]:pt-1">
					<li>Rich Brian</li>
					<li>Jackson Wang</li>
					<li>Joji</li>
				</ul>
			</div>
			{/* <img src={special} className="w-[200px]" alt="special guest" /> */}
		</div>
	);
};

export default Lineup;
