import React, { useEffect, useRef, useState, Suspense } from 'react';
import { Canvas, useFrame, useLoader } from '@react-three/fiber';
import * as THREE from 'three';
// import { Plane } from '@react-three/drei'

import img1 from '../../images/trees.jpg';
import img2 from '../../images/sign.png';

const lerp = (start, end, t) => {
	return start * (1 - t) + end - t;
};

function Mesh(props) {
	const texture1 = useLoader(THREE.TextureLoader, img1);
	const texture2 = useLoader(THREE.TextureLoader, img2);
	const textures = [texture1, texture2];

	return (
		<mesh {...props} scale={props.scale} position={props.position}>
			{/* <boxGeometry args={[1, 1, 1]} /> */}
			<meshStandardMaterial attach="material" map={textures[props.currentTexture]} opacity={props.opacity} transparent />
			<planeGeometry args={[4, 4, 20, 20]} attach="geometry" />
			{/* <shaderMaterial
				uniforms={{
					uTexture: {
						value: texture1,
					},
					uAlpha: { value: 1.0 },
					uOffset: { value: [0.0, 0.0] },
				}}
			/> */}
		</mesh>
	);
}

const HoverImage = (props) => {
	let targetX = 0;
	let targetY = 0;
	const [sizes, setSizes] = useState([1, 1]);
	const [offset, setOffset] = useState([0, 0]);
	const [uniforms, setUniforms] = useState({
		uTexture: { value: 0 },
		uAlpha: { value: 0.0 },
		uOffset: { value: [0.0, 0.0] },
	});
	const [linkHovered, setLinkHovered] = useState(false);

	const [currentTexture, setCurrentTexture] = useState(0);

	const addEventListeners = (element) => {
		element.addEventListener('mouseenter', () => {
			setLinkHovered(true);
		});
		element.addEventListener('mouseleave', () => {
			setLinkHovered(false);
		});
	};

	useEffect(() => {
		props.links.current.querySelectorAll('li').forEach((link, index) => {
			link.addEventListener('mouseenter', () => {
				setCurrentTexture(index);
			});

			link.addEventListener('mouseleave', () => {
				setUniforms((prevUniforms) => {
					console.log(lerp(uniforms.uAlpha.value, 0.0, 0.1));
					return {
						...prevUniforms,
						uAlpha: {
							value: lerp(uniforms.uAlpha.value, 0.0, 0.1),
						},
					};
				});
			});

			props.links.current.querySelectorAll('ul').forEach((ul) => {
				addEventListeners(ul);
			});
		});
	}, [props.links.current]);

    window.addEventListener('mousemove', (e) => {
        targetX = e.clientX;
        targetY = e.clientY;
        console.log(targetX);
    })

	return (
		<>
			<div className="w-full h-full absolute">
				<Canvas>
					<ambientLight />
					{/* <pointLight position={[10, 10, 10]} /> */}
					<Suspense fallback={null}>
						<Mesh
							scale={[...sizes, 1]}
							position={[...offset, 0]}
							currentTexture={currentTexture}
                            opacity={1}
						/>
					</Suspense>
				</Canvas>
			</div>
		</>
	);
};

export default HoverImage;
