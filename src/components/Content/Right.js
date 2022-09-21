import React from 'react';

import Lineup from './Lineup';

import featuring from '../../icons/featuring.png';

const Right = () => {
	return (
		<div className="flex flex-col justify-center items-center uppercase text-white height leading-6 pt-12 tracking-widest space-y-3">
			<p className="text-sm font-thin">Dec 3-4, 2022</p>
			<p className="text-2xl">COMMUNITY PARK PIK2</p>
			<img src={featuring} className="w-[150px]" alt="featuring" />
            <Lineup />
		</div>
	);
};

export default Right;
