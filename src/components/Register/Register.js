import React from 'react';

class Register extends React.Component {
	constructor() {
		super(); 
			this.state = {
				registeremail: '',
				registerpass: '',
				registername: '',
				geterror:''
			}
	}

	onNameChange = (event) =>{
		this.setState({registername: event.target.value});
	}

	onEmailChange = (event) => {
		this.setState({registeremail: event.target.value});
	}
	onPassChange = (event) => {
		this.setState({registerpass: event.target.value});
	}

	onSubmitRegister = () => {
		fetch('https://imagedetectmodel.herokuapp.com/register', {
			method: 'post',
			headers: {'Content-Type': 'application/json'},
			body : JSON.stringify({
				email: this.state.registeremail,
				password: this.state.registerpass,
				name: this.state.registername,
			})
		})
		.then(response => response.json())
		.then( user => {
			if (user.id) {
				this.props.loadUser(user)
				this.props.onRouteChange('home')
			} else {
				this.setState({geterror:user})
			}
		})
		.catch( err => console.log(err));
	}

	render () {
		const { geterror } = this.state;
		return (
			<div>
				<article className="br3 ba dark-gray shadow-4 b--black-10 mt6 mb3 w-100 w-50-m w-25-l mw6 center">
				<main className="pa4 black-80">
				  <div className="measure">
				    <fieldset id="sign_up" className="ba b--transparent ph0 mh0">
				      <legend className="f4 fw6 ph0 mh0">Register</legend>
				      <div className="mt3">
				        <label className="db fw6 lh-copy f6" htmlFor="name">Name</label>
				        <input 
				        	onChange = { this.onNameChange }
				        	className="pa2 input-reset ba bg-transparent hover-bg-black hover-white w-100" 
				        	type="text" 
				        	name="name"  
				        	id="name" />
				      </div>
				      <div className="mt3">
				        <label className="db fw6 lh-copy f6" htmlFor="email-address">Email</label>
				        <input 
				        	onChange = { this.onEmailChange }
				        	className="pa2 input-reset ba bg-transparent hover-bg-black hover-white w-100" 
				        	type="email" 
				        	name="email-address"  
				        	id="email-address" />
				      </div>
				      <div className="mv3">
				        <label className="db fw6 lh-copy f6" htmlFor="password">Password</label>
				        <input 
				        	onChange = {this.onPassChange }
				        	className="b pa2 input-reset ba bg-transparent hover-bg-black hover-white w-100" 
				        	type="password" 
				        	name="password"  
				        	id="password" />
				      </div>
				    </fieldset>
				    <div className="">
				      <input 
				      	onClick={this.onSubmitRegister}
				      	className="b ph3 pv2 input-reset ba b--black bg-transparent grow pointer f6 dib" type="submit" value="Register" />
				    </div>
				    <div className="lh-copy mt3">
				    </div>
				  </div>
				</main>
				</article>
				{ geterror === 'unable to register'
				? 
				<div className="f3 fw6 mt1 pt1 mb2 pb1" > 
				{'The email has already been registered. Try another one.'}
				</div>
					: (  geterror === 'incorrect form submission'
					? <div className="f3 fw6 mt1 pt1 mb2 pb1">
					{'Complete the Registration Form.'}
					</div> : <div></div>
					)
			}
			</div>
		)
	}
}
export default Register;