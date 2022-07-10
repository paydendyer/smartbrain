import React, {Component} from 'react';
import Clarifai from 'clarifai';
import Navigation from './components/Navigation/Navigation';
import Logo from './components/Logo/Logo';
import ImageLinkForm from './components/ImageLinkForm/ImageLinkForm';
import FaceRecognition from './components/FaceRecognition/FaceRecognition';
import Rank from './components/Rank/Rank';
import './App.css';

const apiKey = process.env.REACT_APP_API_KEY
const app = new Clarifai.App({apiKey: apiKey});

class App extends Component {
  constructor() {
    super();
    this.state = {
      input: '',
      imageUrl: ''
    }
  }

  onInputChange = (event) => {
    this.setState({input:event.target.value});
  }

  onButtonSubmit = () => {
    this.setState({imageUrl: this.state.input})
    app.models
    .predict(
      Clarifai.FACE_DETECT_MODEL,
      this.state.input)
      .then
      (function (response) {
      console.log(response.outputs[0].data.regions[0].region_info.bounding_box);
    }, 
    function (err) {
      
    }
  );
}
  render() {
    return (
      <div className="App">
        <Navigation/>
        <Logo/>
        <Rank/>
        <ImageLinkForm onInputChange={
            this.onInputChange
          }
          onButtonSubmit={
            this.onButtonSubmit
          }/>
        <FaceRecognition imageUrl={this.state.imageUrl}/>
      </div>
    );
  }
}
export default App;
