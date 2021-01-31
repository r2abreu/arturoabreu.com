import styled, { createGlobalStyle, css } from 'styled-components';
import { normalize } from 'styled-normalize';
import { Link as GatsbyLink } from 'gatsby';
import { AnchorLink } from 'gatsby-plugin-anchor-links';
import chainBackground from '../../images/chain.svg';

export const theme = {
	primaryColor: '#000',
	secondaryColor: '#61DBFB',
	backgroundColor: '#FFF',
	primaryFontColor: '#818179',
	fontSize: (px) => `${px / 16}rem`,
	fontFamily: "'Lato', Verdana, Arial, sans-serif",
	lineHeight: '1.5',
	borders: '1px solid #cdc7c2',
	linkBorderBottom: '4px solid #232a33'
};

export const GlobalStyle = createGlobalStyle`
    ${normalize};
	


    *,
	::after,
	::before {
		margin: 0;
		padding: 0;
		box-sizing: border-box;
	}

	ul {
		list-style-type: none;
		padding: 0;
	}

	ol {
		list-style-position: inside;
	}

	body {
		font-family: ${(props) => props.theme.fontFamily};
		color: ${(props) => props.theme.primaryColor};
		background-color: ${(props) => props.theme.backgroundColor};
		max-width: 80%;
		margin: auto;
		
	}

	article {
		display: flex;
		margin: 0 auto 7em;
		align-items: center;
	}
`;

const AnchorBase = css`
	color: ${(props) => props.theme.secondaryColor};
	text-decoration: none;
	transition: all 0.3s ease-in;
	position: relative;
	padding: 0 0.1em;
	cursor: pointer;
	border-bottom: ${(props) => props.theme.linkBorderBottom};

	:link {
		color: ${(props) => props.theme.primaryColor};
	}

	:visited {
		color: ${(props) => props.theme.secondaryColor};
	}

	:hover {
		color: ${(props) => props.theme.backgroundColor};
	}

	:hover::after {
		transform: scaleY(1);
	}

	:active {
		color: ${(props) => props.theme.primaryColor};
	}
	:focus {
		color: ${(props) => props.theme.primaryColor};
	}

	::after {
		content: "";
		position: absolute;
		bottom: 0;
		left: 0;
		width: 100%;
		height: 100%;
		transform: scaleY(0);
		transform-origin: bottom center;
		background: ${(props) => props.theme.secondaryColor};
		z-index: -1;
		transition: transform 0.3s;
	}
`;

export const AbsoluteLink = styled.a`${AnchorBase};`;

export const StyledHero = styled.section`
	display: flex;
	height: 100vh;

	h1 {
		font-size: 100px;
		color: #000;
		width: 800px;
		font-weight: lighter;
	}
`;

export const SocialLink = styled.a`
	${AnchorBase};
	border: 2px solid ${(props) => props.theme.primaryColor};
	border-radius: 0.5em;
	padding: 0.5rem 2rem;
	font-size: 2em;
	text-align: center;

	:hover {
		border-radius: 0;
	}
`;

export const ContactCTA = styled.div`
	display: flex;
	width: 40%;
	margin: 2em auto 1em;
	justify-content: space-between;
`;

export const StyledHeader = styled.header`
	display: flex;
	align-items: center;
`;

const baseLogo = css`
	color: #000;
	font-size: 7em;
	display: block;
	width: 100%;
	font-family: 'Bebas Neue', Verdana, sans-serif;
	text-decoration: none;
	text-align: ${(props) => props.align};
	margin-top: ${(props) => props.decorated && '0'};
	margin-bottom: ${(props) => props.decorated && '1em'};
	border-bottom: ${(props) => props.decorated && `9px solid ${props.theme.secondaryColor}`};

	span {
		color: black;
		font-family: serif;
	}
`;

export const Logo = styled(GatsbyLink)`
	${baseLogo};
`;

export const InternalLink = styled(AnchorLink)`
	${baseLogo};
`;

export const SectionHeading = styled.h2`${baseLogo};`;

export const StyledLink = styled(GatsbyLink)`
	${AnchorBase}
`;

export const Nav = styled.nav`
	position: fixed;
	left: 10em;
	top: 80%;
	width: min-content;
	height: min-content;
`;
export const DescriptionFigure = styled.figure`
	width: 15rem;
	flex: 1 1 30%;
	box-shadow: 0px 3px 15px 5px #a0a0a0;
	max-width: 650px;

	.gatsby-image-wrapper {
		width: 100%;
	}
`;
export const DescriptionSection = styled.section`display: flex;`;
export const DescriptionArticle = styled.article`
	flex: 1 1 10%;
	display: initial;
	max-width: 530px;

	* + * {
		margin-top: 1.5rem;
	}
`;

export const Menu = styled.ul`
	display: flex;
	flex-direction: column;
	height: 10em;
	width: min-content;
	justify-content: space-between;
`;
export const MenuLink = styled(GatsbyLink)`
	border: 2px solid transparent;
	position: relative;

	:before{
		content:'';
		width:0;
		height:2px;
		background:#676567;
		position:absolute;
		left:0;
		bottom:0;
	}
	
	:hover:before {
		animation: 0.3s slideright ease-in forwards;
	}

	@keyframes slideright {
		from: {
			width: 0;
		}

		to {
			width: 100%
		}
	}

	
`;

export const StyledFigure = styled.figure`
	flex: 1 1 40%;

	.gatsby-image-wrapper {
		width: ${(props) => props.size || '20rem'};
		margin: auto;
	}
`;

export const StyledIcon = styled.figure`
	width: 2em;
	margin: 0;
	position: relative;
	cursor: pointer;

	img {
		width: 100%;
	}

	figcaption {
		position: absolute;
		top: 5px;
		width: max-content;
		text-align: right;
		box-sizing: content-box;
		font-variant: small-caps;
		color: ${(props) => props.theme.primaryColor};
	}

	@keyframes slidein {
		from {
			left: 0px;
			opacity: 0;
		}

		to {
			left: 45px;
			opacity: 1;
		}
	}

	@keyframes slideout {
		from {
			left: 45px;
			opacity: 1;
		}

		to {
			left: 0px;
			opacity: 0;
		}
	}
`;

export const Chain = styled.div`
	background-image: url(${chainBackground});
	background-size: 100%;
	background-repeat: no-repeat;
	width: 500px;
	height: 500px;
`;

export const StyledSection = styled.section`
	flex: 1 1 40%;
	* + * {
		margin-top: 1.5em;
	}
`;

export const StyledParragraph = styled.p`
	font-size: ${(props) => props.theme.fontSize(20)};
	font-weight: 300;
	text-align: ${(props) => props.align};
`;

export const StyledArticle = styled.article`
	width: 680px;
	height: 490px;
	position: relative;
`;

export const ProjectElement = styled.figure`
	position: absolute;
	width: 321px;
	height: 296px;
	border-radius: 0.5em;
	top: ${(props) => props.top && '0'};
	bottom: ${(props) => props.bottom && '0'};
	left: ${(props) => props.left && '0'};
	right: ${(props) => props.right && '0'};
	z-index: ${(props) => props.bottom && '-1'};
	background-color: ${(props) => props.shadow && '#181D23'};
	box-shadow: ${(props) => props.shadow && '0px 3px 15px 5px #a0a0a0'};
	text-align: right;

	h2 {
		font-family: 'Bebas Neue', Verdana, sans-serif;
		font-size: 3.7rem;
		letter-spacing: 5px;
	}

	p {
		position: absolute;
		bottom: 25px;
		width: 200px;
		text-align: right;
		right: 0;
		font-size: 1.5rem;
	}

	a {
		display: block;
		width: 39%;
		margin-top: 0.5em;
		margin-left: auto;
		cursor: pointer;
	}

	img {
		border-radius: 0.5em;
	}
`;
