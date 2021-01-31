import React from 'react';
import Layout from '../components/Layout';
import { useStaticQuery, graphql } from 'gatsby';
import Img from 'gatsby-image';
import ProjectDescription from '../components/ProjectDescription';
import { DescriptionSection, DescriptionFigure } from '../components/styled/Lib';
export default () => {
	const projectPicture = useSinglePicture();
	return (
		<Layout>
			<DescriptionSection>
				<ProjectDescription />
				<DescriptionFigure size="30em">
					<Img
						fluid={projectPicture.file.childImageSharp.fluid}
						alt="Faketube muckup"
						title="Proyecto Faketube"
					/>
				</DescriptionFigure>
			</DescriptionSection>
		</Layout>
	);
};

const useSinglePicture = () => {
	const data = useStaticQuery(graphql`
		{
			file(name: { regex: "/FakebookMockup/" }) {
				id
				childImageSharp {
					fluid {
						...GatsbyImageSharpFluid
					}
				}
			}
		}
	`);
	return data;
};
