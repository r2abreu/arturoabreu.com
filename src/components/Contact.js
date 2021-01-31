import React from 'react';
import { SectionHeading, SocialLink, ContactCTA, StyledParragraph } from './styled/Lib';

export default () => {
	return (
		<section id="contact">
			<SectionHeading to="/contact" decorated="true" align="center">
				Contactame
			</SectionHeading>
			<StyledParragraph align="center">
				Proyectos, ideas, charlas, dejame saber como puedo ayudarte.
			</StyledParragraph>
			<ContactCTA>
				<SocialLink href="https://www.linkedin.com/in/artuabreu/" target="_blank">
					Linkedin
				</SocialLink>
				<SocialLink href="mailto:axa.gomez@gmail.com" target="_blank">
					Mail
				</SocialLink>
			</ContactCTA>
		</section>
	);
};
