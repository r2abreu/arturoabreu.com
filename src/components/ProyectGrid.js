import React from 'react';
import { ProjectElement, StyledLink } from './styled/Lib';
import Img from 'gatsby-image';

export default ({ details, pictures }) => {
	return (
		<React.Fragment>
			<ProjectElement top="true" left="true" shadow="true">
				<Img fluid={pictures[0]} alt="Faketube screenshot" title="Faketube, captura de pantalla" />
			</ProjectElement>
			<ProjectElement top="true" right="true">
				<h2>{details.title}</h2>
				<span>{details.stack}</span>
				<StyledLink to={details.url}>Mirar el proyecto</StyledLink>
			</ProjectElement>
			<ProjectElement bottom="true" left="true">
				<p>{details.description}</p>
			</ProjectElement>
			<ProjectElement bottom="true" right="true" shadow="true">
				<Img fluid={pictures[1]} alt="Faketube screenshot" title="Faketube, captura de pantalla" />
			</ProjectElement>
		</React.Fragment>
	);
};
