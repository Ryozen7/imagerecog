import React from 'react';
import './FaceRecognition.css';

const FaceRecognition = ({ imageURL, box }) => {
	
	return (
		<div className='center ma2 br0 pb7'>
			<div className='absolute mt2'>
				
				<img className='br2 shadow-1' id='Inputimage'  alt='' src={ imageURL} width = '600px' height = 'auto' />
				{ box.length > 0
					? <div>
						{
							box.map((square, i) => {
								return (
									<div className='boundingbox' key={i} style={{top: box[i].top, right: box[i].right, bottom: box[i].bottom, left: box[i].left }}>
									</div>
								);
							})
						} 
					 </div>
					:( box.length === undefined
						? <div  className='br2 f4'> 
							Image will display here!
						</div>
						: <div  className='ma0 br0 f3 mb4 mt3'>Oooopps! Try a different picture with face(s) (preferably in jpeg/jpg)...</div>
					 )
				} 
			</div>

		</div>
	)
}

export default FaceRecognition;