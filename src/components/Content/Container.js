import React from 'react';

import Lineup from './Right';

import logo from '../../icons/white-logo.png';
import sign from '../../icons/sign.png';

const Container = (props) => {
	return (
		<div className="w-screen h-screen bg-background bg-center bg-no-repeat fixed bg-cover">
			<img
				src={logo}
				className="w-[60px] max-w-full top-5 left-5 fixed cursor-pointer p-2 z-10"
				onClick={props.onClick.bind(null, true)}
                alt="logo"
			/>
			<div className="flex justify-center items-center relative w-full z-0">
				<div className="w-full max-w-[560px]">
					<img
						src={sign}
						className="fixed left-[-25%] max-w-full bottom-0 w-[1440px]"
                        alt="sign"
					/>
				</div>
				<div className="w-full max-w-[560px]">
					<Lineup />
				</div>
			</div>
		</div>
	);
};

export default Container;
