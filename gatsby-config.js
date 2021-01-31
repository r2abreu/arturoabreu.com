const path = require('path');

module.exports = {
	plugins: [
		`gatsby-plugin-react-helmet`,
		`gatsby-transformer-sharp`,
		`gatsby-plugin-sharp`,
		`gatsby-plugin-anchor-links`,

		{
			resolve: 'gatsby-plugin-google-fonts',
			options: {
				fonts: [ `Bebas Neue\:400`, 'Lato:300,400,700' ]
			}
		},
		{
			resolve: 'gatsby-source-filesystem',
			options: {
				name: 'images',
				path: path.join(__dirname, 'src', 'images')
			}
		}
	],
	siteMetadata: {
		defaultTitle: 'Arturo Abreu | Portfolio',
		defaultDescription: 'Desarrollador web, piloto comercial',
		siteUrl: 'https://www.arturoabreu.com'
	}
};
