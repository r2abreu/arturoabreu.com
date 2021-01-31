import React from 'react';
import Header from './Header';
import Footer from './Footer';
import { ThemeProvider } from 'styled-components';
import { GlobalStyle, theme } from './styled/Lib';

export default ({ children }) => {
	return (
		<ThemeProvider theme={theme}>
			<GlobalStyle />
			<React.Fragment>
				<Header />
				<main>{children}</main>
				<Footer />
			</React.Fragment>
		</ThemeProvider>
	);
};
