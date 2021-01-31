import React from 'react';
import { StyledSection, StyledParragraph, AbsoluteLink } from './styled/Lib';

export default () => {
	return (
		<StyledSection>
			<StyledParragraph>
				Soy un desarollador web de 28 años, aprendiendo día a día en{' '}
				<AbsoluteLink href="https://www.bit.es/" target="_blank">
					Bit Academy
				</AbsoluteLink>.
			</StyledParragraph>
			<p>
				Aunque hoy disfruto de lo que hago, la programación es algo relativamente nuevo en mi vida. Lo cierto es
				que trabajé por más de 4 años como piloto comercial antes de emigrar en busca de nuevas oportunidades.
			</p>
			<p>
				Desde entonces me plantee un cambio de profesión y he estado compaginando mis estudios con el trabajo.
				Recientemente me incorporé a Bit Academy, donde he aprendido de desarrolladores y diseñadores más
				experimentados.
			</p>
			<p>
				He encontrado que todos los días hay cosas nuevas por aprender, recursos, herramientas y metodologías.
				Sin embargo considero que nada ha sido tan importante como aprender a aprender, pensar como un
				ingeniero, ver cada problema como una solución en potencia y priorizar la comunicación efectiva.
			</p>
			<p>Son habilidades fundamentales para esta nueva etapa de mi vida.</p>
		</StyledSection>
	);
};
