import React from 'react';
import { SectionHeading, StyledArticle } from './styled/Lib';
import ProyectGrid from './ProyectGrid';
import { usePicture } from '../hooks';

export default (props) => {
	console.log(props);
	return (
		<section id="proyects">
			<SectionHeading decorated="true" align="left">
				Proyectos
			</SectionHeading>
			<StyledArticle>
				<ProyectGrid details={faketube} pictures={[ usePicture(0), usePicture(1) ]} />
			</StyledArticle>
			<StyledArticle>
				<ProyectGrid details={ghibli} pictures={[ usePicture(2), usePicture(3) ]} />
			</StyledArticle>
		</section>
	);
};

const faketube = {
	title: 'Faketube',
	stack: 'VUE + VUEX',
	url: '/faketube',
	description: '¿El desafío? Aprender todo lo que se pueda de Vue en 3 días. ¿El resultado? Un clon de YouTube.'
};

const ghibli = {
	title: 'Ghibli World',
	stack: 'REACT',
	url: '/ghibliworld',
	description: 'Implementando una barra de búsqueda con sugerencias en el mítico mundo de Miyazaki.'
};
