import React from 'react';

const Card = (props) => {
	return (
		<div className='sm:w-[100%] sm:mb-5 w-[32%] h-inherit bg-slate-50 rounded-xl align-top relative' onClick={props.onClick.bind(null, false)}>
            <div className='z-10 absolute w-full h-full top-0 left-0 bg-white opacity-0 hover:opacity-80 transition cursor-pointer duration-500 flex flex-col justify-center items-center'>
                <h1 className='uppercase text-4xl'>{props.title}</h1>
                <h2 className='uppercase text-lg tracking-wider'>{props.location}</h2>
            </div>
			<img
				src={props.img} className='h-inherit'
			/>
		</div>
	);
};

export default Card;
