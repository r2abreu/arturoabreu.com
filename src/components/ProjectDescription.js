import React from 'react';
import { StyledParragraph, DescriptionArticle } from './styled/Lib';
import VuexPicture from '../images/Vuex.svg';

export default (picture) => {
	console.log(picture);
	return (
		<DescriptionArticle>
			<h1>Faketube</h1>
			<figure>
				<img src={VuexPicture} alt="Vue + Vuex" title="Vue + Vuex" />
			</figure>
			<StyledParragraph>
				Durante mi búsqueda de trabajo, fui contacto por una empresa la cual buscaba un desarrollador junior con
				experiencia en Vue.
			</StyledParragraph>
			<StyledParragraph>
				Por entonces yo solo tenía una experiencia corta con React pero utilice esa oportunidad para aprender
				Vue y su administrador de estado Vuex.
			</StyledParragraph>
			<StyledParragraph>
				De esa idea nació Faketube, una pequeña aplicacion que usa la API de YouTube para recrear una
				funcionalidad similar.
			</StyledParragraph>
			<StyledParragraph>
				Los comentarios y las estadísticas son generados usando una combinación de Fakeuser y RandomUser.
			</StyledParragraph>
			<div>
				<div>
					<span>Ver codigo</span>
					<figure>
						<img src="" alt="" title="" />
					</figure>
				</div>
				<div>
					<span>Ver demo</span>
					<figure>
						<img src="" alt="" title="" />
					</figure>
				</div>
			</div>
		</DescriptionArticle>
	);
};
