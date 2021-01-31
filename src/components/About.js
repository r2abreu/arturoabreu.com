import React from 'react';
import { StyledFigure, InternalLink } from './styled/Lib';
import Img from 'gatsby-image';
import Description from './Description';
import { useStaticQuery, graphql } from 'gatsby';

// ...GatsbyImageSharpFluid
// ...GatsbyImageSharpFixed

export default () => {
	return (
		<section id="about">
			<InternalLink decorated="true" align="right" to="/about">
				Sobre Mi
			</InternalLink>
			<article>
				<StyledFigure>
					<Img fluid={usePicture()} />
				</StyledFigure>
				<Description />
			</article>
		</section>
	);
};

const usePicture = () => {
	const data = useStaticQuery(graphql`
		{
			file(name: { eq: "myself" }) {
				name
				childImageSharp {
					fluid {
						...GatsbyImageSharpFluid
					}
				}
			}
		}
	`);
	const { file: { childImageSharp: { fluid } } } = data;

	return fluid;
};
