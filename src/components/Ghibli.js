import React from 'react';
import { ProjectElement } from './styled/Lib';

export default () => {
	return (
		<React.Fragment>
			<ProjectElement top="true" right="true" red="true">
				Ghibli
			</ProjectElement>
			<ProjectElement bottom="true" left="true" blue="true">
				Ghibli
			</ProjectElement>
		</React.Fragment>
	);
};
