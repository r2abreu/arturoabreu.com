import { useStaticQuery, graphql } from 'gatsby';

export const usePicture = (arg) => {
	const data = useStaticQuery(graphql`
		{
			allFile(filter: { name: { regex: "/Faketube|Ghibli/" } }, sort: { fields: name }) {
				nodes {
					id
					childImageSharp {
						fluid {
							...GatsbyImageSharpFluid
							originalName
						}
					}
				}
			}
		}
	`);
	const images = [];
	data.allFile.nodes.map((image) => {
		return images.push(image.childImageSharp.fluid);
	});
	return images[arg];
};
