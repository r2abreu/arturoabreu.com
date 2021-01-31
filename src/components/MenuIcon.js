import React, { useState, useEffect } from 'react';
import { StyledIcon } from './styled/Lib';

export default ({ image, content }) => {
	const [ viewable, setViewable ] = useState(false);
	const shouldSlide = useUnmount(viewable, 180);
	const mountedStyle = { animation: 'slidein 200ms cubic-bezier(.17,.67,.83,.67) forwards' };
	const unmountedStyle = { animation: 'slideout 200ms cubic-bezier(.17,.67,.83,.67)' };

	const mouseEntered = () => {
		setViewable(!viewable);
		console.log(shouldSlide);
	};

	return (
		<StyledIcon onMouseEnter={mouseEntered} onMouseLeave={mouseEntered}>
			<img src={image} alt="" />
			{shouldSlide && <figcaption style={viewable ? mountedStyle : unmountedStyle}>{content}</figcaption>}
		</StyledIcon>
	);
};

const useUnmount = (isMounted, delay) => {
	const [ render, setRender ] = useState(false);

	useEffect(
		() => {
			let timeoutId;
			if (isMounted && !render) {
				setRender(true);
			} else if (!isMounted && render) {
				timeoutId = setTimeout(() => {
					setRender(false);
				}, delay);
			}
			return () => clearInterval(timeoutId);
		},
		[ isMounted, render, delay ]
	);

	return render;
};
