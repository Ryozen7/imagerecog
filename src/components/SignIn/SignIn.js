import React from 'react';
import GetError from './GetError';


class SignIn extends React.Component {
	constructor( ) {
		super(); 
			this.state = {
				signinEmail: '',
				signinPassword: '',
				geterror: '',
			}
	}

	onEmailChange = (event) => {
		this.setState({signinEmail: event.target.value})
	}

	onPasswordChange = (event) => {
		this.setState({signinPassword: event.target.value})
	}

	gettingError = (user) => {
		this.setState({geterror: user})
	}

	onSubmission = () => {
		fetch('https://detectfaceserver.herokuapp.com/signin', {
			method: 'post',
			headers: {'Content-Type': 'application/json'},
			body: JSON.stringify({
				email: this.state.signinEmail,
				password: this.state.signinPassword,
			})
		}) 
		.then(response => response.json())
		.then(user => {
			if (user !== 'Wrong password or email') {
				this.props.loadUser(user)
				this.props.onRouteChange('home');
			} else {
			this.gettingError(true)
			}
		
		})
	}

	render () {
		const { onRouteChange } = this.props;
		const { geterror } = this.state;

		return (
			<div>
			<article className="br3 ba dark-gray shadow-4 b--black-10 mt6 mb3 w-100 w-50-m w-25-l mw6 center">
				<main className="pa4 black-80">
				  <div className="measure">
				    <fieldset id="sign_up" className="ba b--transparent ph0 mh0">
				      <legend className="f4 fw6 ph0 mh0">Sign In</legend>
				      <div className="mt3">
				        <label className="db fw6 lh-copy f6" htmlFor="email-address">Email</label>
				        <input 
				        	onChange = {this.onEmailChange} 
				        	className="pa2 input-reset ba bg-transparent hover-bg-black hover-white w-100" type="email" name="email-address"  id="email-address" />
				      </div>
				      <div className="mv3">
				        <label className="db fw6 lh-copy f6" htmlFor="password">Password</label>
				        <input 
				        	onChange = {this.onPasswordChange }
				        	className="b pa2 input-reset ba bg-transparent hover-bg-black hover-white w-100" 
				        	type="password" 
				        	name="password"  
				        	id="password" />
				      </div>
				    </fieldset>
				    <div className="">
				      <input 
				      	onClick={ this.onSubmission }
				      	className="b ph3 pv2 input-reset ba b--black bg-transparent grow pointer f6 dib" type="submit" value="Sign In" />
				    </div>
				    <div className="lh-copy mt3">
				      <p onClick={() => onRouteChange('register')} 
				      	className="f6 link dim black db pointer">
				      		Register
				      </p>

				    </div>
				 	</div>
				</main>
			</article>
			{ geterror === true
			? 
			<GetError gettingError= { this.gettingError } />
			: <div></div>
			}
			</div>
		);
	}
} 

export default SignIn;