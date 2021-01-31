import React from 'react';
import Layers from '../images/layers.svg';
import Profile from '../images/profile.svg';
import Contact from '../images/contact.svg';
import MenuIcon from './MenuIcon';
import { Nav, Menu } from './styled/Lib';
import { AnchorLink } from 'gatsby-plugin-anchor-links';

export default () => {
	return (
		<Nav>
			<Menu>
				<li>
					<AnchorLink to="/#about">
						<MenuIcon image={Profile} content="Sobre mi" />
					</AnchorLink>
				</li>
				<li>
					<AnchorLink to="/#proyects">
						<MenuIcon image={Layers} content="Proyectos" />
					</AnchorLink>
				</li>
				<li>
					<AnchorLink to="/#contact">
						<MenuIcon image={Contact} content="Contactame" />
					</AnchorLink>
				</li>
			</Menu>
		</Nav>
	);
};
