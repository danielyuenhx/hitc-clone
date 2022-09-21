import React, { useEffect, useRef, useState, Suspense, useMemo } from 'react';
import { Canvas, useFrame, useLoader } from '@react-three/fiber';
import * as THREE from 'three';
import { PerspectiveCamera } from '@react-three/drei';

import img1 from '../../images/img1.jpg';
import img2 from '../../images/sign.png';
import img3 from '../../images/trees.jpg';

const lerp = (start, end, t) => {
	return start * (1 - t) + end * t;
};

let targetX = 0;
let targetY = 0;
let offsetX = 0;
let offsetY = 0;
const PERSPECTIVE = 1000;

window.addEventListener('mousemove', (e) => {
	targetX = e.clientX;
	targetY = e.clientY;
});

window.addEventListener('mouseenter', () => {
    console.log('testing')
});

function Mesh(props) {
	const texture1 = useLoader(THREE.TextureLoader, img1);
	const texture2 = useLoader(THREE.TextureLoader, img2);
	const texture3 = useLoader(THREE.TextureLoader, img3);
	const textures = [texture1, texture2, texture3];

	const meshRef = useRef(null);

	useEffect(() => {
		props.links.current.querySelectorAll('li').forEach((link, index) => {
			link.addEventListener('mouseenter', () => {
                meshRef.current.material.uniforms.uTexture.value = textures[index];
			});

			// link.addEventListener('mouseleave', () => {
			// 	setUniforms((prevUniforms) => {
			// 		return {
			// 			...prevUniforms,
			// 			uAlpha: {
			// 				value: lerp(uniforms.uAlpha.value, 0.0, 0.1),
			// 			},
			// 		};
			// 	});
			// });

			// props.links.current.querySelectorAll('ul').forEach((ul) => {
			// 	addEventListeners(ul);
			// });
		});
	}, [props.links.current]);

	useFrame((state, delta, xrFrame) => {
		offsetX = lerp(offsetX, targetX, 0.1);
		offsetY = lerp(offsetY, targetY, 0.1);
		meshRef.current.material.uniforms.uOffset.value = [
			(targetX - offsetX) * 0.0005,
			-(targetY - offsetY) * 0.0005,
		];

		meshRef.current.position.x = offsetX - (window.innerWidth / 2) ;
		meshRef.current.position.y = -offsetY + (window.innerHeight / 2);
        // console.log(meshRef.current.material.uniforms.uTexture.value)
	});

	return (
		<mesh
			{...props}
			scale={props.scale}
			position={props.position}
			ref={meshRef}
		>
			<shaderMaterial
				uniforms={{
					uTexture: { value: textures[2] },
					uAlpha: { value: 0.0 },
					uOffset: { value: [0.0, 0.0] },
				}}
				vertexShader={`uniform sampler2D uTexture;
                uniform vec2 uOffset;
                varying vec2 vUv;
                
                float M_PI = 3.141529;
                
                vec3 deformationCurve(vec3 position, vec2 uv, vec2 offset){
                    position.x = position.x + (sin(uv.y * M_PI) * offset.x);
                    position.y = position.y + (sin(uv.x * M_PI) * offset.y);
                    return position;
                }
                
                void main(){
                    vUv = uv;
                    vec3 newPosition = deformationCurve(position, uv, uOffset);
                    gl_Position = projectionMatrix * modelViewMatrix * vec4(newPosition, 1.0);
                }`}
				fragmentShader={`
                uniform sampler2D uTexture;
                uniform float uAlpha;
                varying vec2 vUv;
          
                void main() {
                  vec3 color = texture2D(uTexture,vUv).rgb;
                  gl_FragColor = vec4(color,1.0);
                }
              `}
              transparent
			/>
			{/* <meshStandardMaterial
				attach="material"
				map={textures[props.currentTexture]}
				opacity={props.opacity}
				transparent
			/> */}
			<planeGeometry args={[4, 4, 20, 20]} attach="geometry" />
		</mesh>
	);
}

const HoverImage = (props) => {
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

	const fov =
		(180 * (2 * Math.atan(window.innerHeight / 2 / PERSPECTIVE))) / Math.PI;
	const aspect = window.innerWidth / window.innerHeight;

	return (
		<>
			<div className="w-screen h-screen absolute top-0 left-0">
				<Canvas
					flat
					gl={{ antialias: true, toneMapping: THREE.NoToneMapping }}
					camera={{ position: [0, 0, PERSPECTIVE] }}
				>
					<PerspectiveCamera
						fov={fov}
						aspect={aspect}
						near={0.1}
						far={1000}
					/>
					<ambientLight />
					{/* <pointLight position={[10, 10, 10]} /> */}
					<Suspense fallback={null}>
						<Mesh
							scale={[250, 250, 1]}
							position={[offsetX, offsetY, 0]}
							currentTexture={currentTexture}
							opacity={1}
                            links={props.links}
						/>
					</Suspense>
				</Canvas>
			</div>
		</>
	);
};

export default HoverImage;
