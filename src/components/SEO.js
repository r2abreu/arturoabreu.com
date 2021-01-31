import React from 'react';
import { Helmet } from 'react-helmet';
import { useLocation } from '@reach/router';
import { useStaticQuery, graphql } from 'gatsby';

export default ({ title, description }) => {
	const { site } = useStaticQuery(query);
	const { pathname } = useLocation();
	const { defaultTitle, defaultDescription, siteUrl } = site.siteMetadata;
	const seo = {
		title: title || defaultTitle,
		description: description || defaultDescription,
		url: `${siteUrl}${pathname}`
	};
	return (
		<Helmet title={seo.title}>
			<meta name="description" content={seo.description} />
			{seo.url && <meta property="og:url" content={seo.url} />}
			{seo.title && <meta property="og:title" content={seo.title} />}
			{seo.description && <meta property="og:description" content={seo.description} />}
		</Helmet>
	);
};

export const query = graphql`
	{
		site {
			siteMetadata {
				defaultTitle
				defaultDescription
				siteUrl
			}
		}
	}
`;
