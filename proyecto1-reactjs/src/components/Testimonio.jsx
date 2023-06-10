import React from 'react'
import '../css/testimonio.css'

export function Testimonio(props){
	const imagen = `../images/testimonio-${props.imagen}.png`;
	return (
		<div className='contenedorTestimonio'>
			<img 
				className='imagenTestimonio'
				src={`../images/testimonio-${props.imagen}.png`}
				alt={props.nombre}
			/>
			<div className="contenedorTextoTestimonio">
				<p className='nombreTestinomonio'>

				</p>
				<p className='nombreTestinomonio'>
					<strong>{props.nombre}</strong> en {props.pais}</p>
				<p className='cargoTestinomonio'>{props.cargo} en <strong>{props.empresa}</strong></p>
				<p className='textoTestinomonio'>"{props.testimonio}"</p>
			</div>
		</div>
	);
}
