import React from 'react';

import logo from '../icons/88_simple_logo-gray.png'

const Header = () => {
	return (
		<header className="h-16 w-full flex justify-center items-center bg-[#e1eef7] top-0 mb-5">
			<img src={logo} className="w-12" />
		</header>
	);
};

export default Header;
