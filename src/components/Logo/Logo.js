import React from 'react';
import Tilt from 'react-tilt';
import './Logo.css';
import smart from './smart.png';

const Logo = () => {
	return (
		<div className ='ma4 nt0'>
			<Tilt className="Tilt br2 shadow-2" options={{ max : 70, perspective: 800, scale: 1.1 }} style={{ height: 150, width: 150 }} >
			 	<div className="Tilt-inner"> 
			 		<img style={{paddingTop:'5px'}} alt='Smart Recognition'src={smart} /> 
			 		<p className='f5 ma0 pa0 center' style={{marginBottom:'10px'}}>
			 			Drag your mouse here
			 		</p>
			 	</div>
				
			</Tilt>
		</div>	
	);
}

export default Logo;