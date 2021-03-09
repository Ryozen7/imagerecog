import React, { Component } from 'react';
import Particles from 'react-particles-js';
import './App.css';
import Navigation from './components/Navigation/Navigation';
import Logo from './components/Logo/Logo';
import ImageLinkForm from './components/ImageLink/ImageLinkForm';
import Rank from './components/Rank/Rank';
import FaceRecognition from './components/FaceRecognition/FaceRecognition';
import SignIn from './components/SignIn/SignIn';
import Register from './components/Register/Register';



const particlesOptions = {
  particles: {
    number: {
      value: 50,
      density: {
        enable: true,
        value_area: 600 
      }
    }
  }           
}

const initialState = {
      input: '',
      imageURL: '',
      box: {},
      route: 'signin',
      isSignedIn: false,
      user: {
        id: '',
        name: '',
        email: '',
        entries: 0,
        joined:''
      }
}

class App extends Component {
  constructor() {
    super();
    this.state = {
      input: '',
      imageURL: '',
      box: {},
      route: 'signin',
      isSignedIn: false,
      user: {
        id: '',
        name: '',
        email: '',
        entries: 0,
        joined:''
      }
    }
  }
  // componentDidMount(){
  //   fetch('http://localhost:3001')
  //   .then(response => response.json())
  //   .then(console.log)
  // }
  loadUser = (data) => {
    this.setState({user: {
        id: data.id,
        name: data.name,
        email: data.email,
        entries: data.entries,
        joined: data.joined
    }});
  }

  calculateFaceLocation = (data) => {
    // const clarifaiFace = data.outputs[0].data.regions[1].region_info.bounding_box;
    const image = document.getElementById('Inputimage');
    const width = Number(image.width);
    const height = Number(image.height);
   
    const regArray = data.outputs[0].data.regions;
    const checkdata = data.outputs[0].data;
    var array = [ ];
   
    if (checkdata.regions) {
      for (var i=0; i < regArray.length ; i++){
        var clari = regArray[i].region_info.bounding_box;
        array.push({
            left: clari.left_col* width, 
            top: clari.top_row* height, 
            right: width - (clari.right_col* width), 
            bottom: height - (clari.bottom_row* height)});
      }
    } else {
      console.log('There are no faces or invalid link', array);
    }
    return array;
  }

  facerecogBox = (box) => {
    this.setState({ box: box});
    // console.log(box);
  }
  
  onInputChange = (event) => {
    this.setState({input: event.target.value});
  }

  onSubmit = () => {
    this.setState({imageURL: this.state.input});
      fetch('http://localhost:3005/imageurl', {
            method: 'post',
            headers: {'Content-Type': 'application/json'},
            body : JSON.stringify({
              input : this.state.input
            })
          })
      .then(response => response.json())
      .then(response => {
        if (response) {
          fetch('http://localhost:3005/image', {
            method: 'put',
            headers: {'Content-Type': 'application/json'},
            body : JSON.stringify({
              id : this.state.user.id
            })
          })
            .then(response => response.json())
            .then(count => { this.setState(Object.assign(this.state.user, {entries: count}))
            })
            .catch(console.log)
        }
        this.facerecogBox(this.calculateFaceLocation(response))
      })
      .catch( err => console.log(err));
  }

  onRouteChange = (route) => {
    if (route === 'signout') {
      this.setState(initialState);
    } else if (route === 'home') {
      this.setState({isSignedIn: true});
    } this.setState({route: route}); 
  }

  render() {
    const { isSignedIn, imageURL, route, box, } = this.state ;
    const { name, entries } = this.state.user;
    return (
      <div className="App">
            <Particles className= 'particles'
              params={particlesOptions}
              />
        <Navigation isSignedIn={isSignedIn} onRouteChange={this.onRouteChange}/>
        { route === 'home'
          ?  <div>
              <Logo />
              <Rank name = {name} entries = {entries} />
              <ImageLinkForm 
                onInputChange = {this.onInputChange} 
                onSubmit = {this.onSubmit}
                box = {box}
              />
              <FaceRecognition box={box} imageURL={imageURL}/> 
            </div>
          : (
              route === 'signin'
              ? <SignIn loadUser = {this.loadUser} onRouteChange={this.onRouteChange}/>
              : ( route === 'signout'
                ? <SignIn loadUser = {this.loadUser} onRouteChange={this.onRouteChange}/>
                : <Register loadUser = {this.loadUser} onRouteChange={this.onRouteChange}/>
                )
            )
        }
      </div>
    );
  }
}

export default App;
