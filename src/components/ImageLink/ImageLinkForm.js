import React from 'react';
import './ImageLink.css';

const ImageLinkForm =({ onInputChange , onSubmit, box }) => {
	return (
		<div>
			<p className='f3 ma0 pa3'>
			{'This Smart Brain will detect faces in your picture. Give it a try!!!'}
			</p>
			<div className='center'>
				<div className = 'center pa4 br3 shadow-5 form' >
					<input 
						className='f4 pa2 w-70 center ma1' type='tex' placeholder={'Put the image link here'}
						onChange = {onInputChange}
					/>
					<button 
						className = 'w-30 grow f4 link ph3 pv2 dib white bg-black' 
						onClick={onSubmit}>
						<strong>Detect</strong>
					</button>
				</div>
			</div>
			{ box.length === 1
				?
				<div className='f3 ma0 mt1 pa1 grow'>
				{'There is only ' + box.length + ' face in the picture'}
				</div> 
				: ( 
					box.length > 1
					?<div className='f3 ma0 mt1 pa1 grow'>
					{'There are ' + box.length + ' faces in the picture'}
					</div>  
						: (box === false ?
							 <div className='f3 ma0 mt1 pa1 grow'>
							 {'Error Detecting. Image link is not attached. Find one'}
							 </div>:<div></div>)
					)
			}
		</div>
	);
}

export default ImageLinkForm;