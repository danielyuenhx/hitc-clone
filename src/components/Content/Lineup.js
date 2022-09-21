import React, { useRef, useEffect, useState } from 'react';

import HoverImage from './HoverImage';

import special from '../../images/special_guest.png';

const Lineup = () => {
	const lineupRef = useRef(null);

	return (
		<div>
			<HoverImage links={lineupRef} />
			<div className="flex justify-center items-center relative w-full text-center font-bold text-lg tracking-tight pt-7 pb-7 select-none" ref={lineupRef}>
				<ul className="w-full [&>*]:pt-1">
					<li>Atarashii Gakko!</li>
					<li>HunBaoBao</li>
					<li>Eaj</li>
					<li>Elephante</li>
					<li>G(I-DLE)</li>
					<li>Jackson Wang</li>
				</ul>
				<ul className="w-full [&>*]:pt-1">
					<li>Rich Brian</li>
					<li>Spence Lee</li>
					<li>Stephanie Poetri</li>
					<li>Veegee</li>
					<li>Voice of Baceprot</li>
					<li>Warren Hue</li>
				</ul>
			</div>
			<img src={special} className="w-[200px]" alt="special guest" />
		</div>
	);
};

export default Lineup;
