import React from 'react';
import Layout from '../components/Layout';
import SEO from '../components/SEO';
import About from '../components/About';
import Hero from '../components/Hero';
import Proyects from '../components/Proyects';
import Nav from '../components/Nav';

export default () => {
	return (
		<Layout>
			<SEO />
			<Nav />
			<Hero />
			<About />
			<Proyects />
		</Layout>
	);
};
