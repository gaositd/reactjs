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
							src={'../images/testimonio-' + data.imagen + '.png'}
							alt={data.nombre}
						/>
						<div className="contenedorTextoTestimonio">
							<p className='nombreTestinomonio'>{data.nombre} en {data.pais}</p>
							<p className='cargoTestinomonio'>{data.cargo}</p>
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