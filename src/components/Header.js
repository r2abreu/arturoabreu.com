import React from 'react';
import { StyledHeader, InternalLink } from './styled/Lib';

export default () => {
	return (
		<StyledHeader id="top">
			<InternalLink to="/">
				R2<span>.</span>
			</InternalLink>
		</StyledHeader>
	);
};
