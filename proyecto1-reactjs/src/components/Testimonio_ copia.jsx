import React from 'react'
import Emma from '../images/testimonio-emma.png'
import '../css/testimonio.css'

export function Testimonio(){
	return (
		<div className='contenedorTestimonio'>
			<img 
				className='imagenTestimonio'
				src={Emma}
				alt="EMMA"
			/>
			<div className="contenedorTextoTestimonio">
				<p className='nombreTestinomonio'>

				</p>
				<p className='nombreTestinomonio'>Emma Bostian en Suecia</p>
				<p className='cargoTestinomonio'>Ingeniero de software en Spotify</p>
				<p className='textoTestinomonio'>
					Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed sollicitudin ante et massa bibendum condimentum. Aliquam dolor est, faucibus ac erat id, vestibulum interdum mi. Curabitur dignissim nisl non massa venenatis hendrerit. Quisque neque nunc, condimentum id rutrum sed, feugiat nec nunc. Cras in mauris fermentum, tempus nisl id, blandit sapien. Cras eget nunc eget orci malesuada maximus.
				</p>
			</div>
		</div>
	);
}
