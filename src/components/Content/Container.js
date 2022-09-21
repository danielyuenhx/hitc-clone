import React from 'react';

import Lineup from './Right';

import logo from '../../images/white-logo.png';
import sign from '../../images/sign.png';

const Container = (props) => {
	return (
		<div className="">
            <div className="w-screen h-screen bg-background bg-center bg-no-repeat fixed bg-cover z-[-10]"></div>
			<img
				src={logo}
				className="w-[60px] max-w-full top-5 left-5 fixed cursor-pointer p-2 z-0"
				onClick={props.onClick.bind(null, true)}
                alt="logo"
			/>
			<div className="flex justify-center items-center relative w-full">
				<div className="w-full max-w-[560px]">
					<img
						src={sign}
						className="fixed left-[-25%] max-w-full bottom-0 w-[1440px]"
                        alt="sign"
					/>
				</div>
				<div className="w-full max-w-[560px] z-10">
					<Lineup />
				</div>
			</div>
		</div>
	);
};

export default Container;
