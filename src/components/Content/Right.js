import React from 'react';

import Lineup from './Lineup';
import Box from './Box';

import featuring from '../../images/featuring.png';

const Right = () => {
	return (
		<div className="flex flex-col justify-center uppercase text-white height leading-6 pt-12 tracking-widest space-y-3 relative w-full">
			<p className="text-sm font-thin">Dec 3-4, 2022</p>
			<p className="text-2xl">COMMUNITY PARK PIK2</p>
			<div className="flex justify-center items-center">
				<Box />
				<Box />
				<Box />
			</div>
			<div className="flex justify-center">
				<img src={featuring} className="w-[150px]" alt="featuring" />
			</div>
			<Lineup />
		</div>
	);
};

export default Right;
