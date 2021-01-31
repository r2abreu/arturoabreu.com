import React from 'react';
import { InternalLink } from './styled/Lib';
import Contact from './Contact';

export default () => {
	return (
		<footer>
			<Contact />
			<InternalLink to="/#top" align="right">
				R2<span>.</span>
			</InternalLink>
		</footer>
	);
};
