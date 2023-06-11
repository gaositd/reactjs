import React from 'react'
import '../css/testimonio.css'

export function Testimonio(props) {
	const { testimonio } = props;
	return (
		testimonio.map((data, index) => (
			<div key={index} className='contenedorTestimonio'>
			{
				<>
					<img
						className='imagenTestimonio'
						src={'./images/testimonio-' + data.imagen + '.png'}
						alt={data.imagen}
						/>
					<div className="contenedorTextoTestimonio">
						<p className='nombreTestinomonio'>
							<strong>{data.nombre}</strong> en {data.pais}</p>
						<p className='cargoTestinomonio'>{data.cargo} en <strong>{data.empresa} </strong></p>
						<p className='textoTestinomonio'>
							{data.testimonio}
						</p>
					</div>
				</>
			}
			</div>
		))
	);
}