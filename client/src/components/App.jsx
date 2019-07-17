import React from 'react'
import axios from 'axios'

class App extends React.Component {
  constructor() {
    super();
    this.state ={
      //state
      //window.location.pathname =  /itemId; e.g., localhost:3000/<itemId>
      //you can slice off the '/' or use regex
      //window.location.pathname.slice(1)
        data: [],
        color: '',
        button1color: '',
        button2color: '',
        // itemId: 80,
        bigImage: '',
        thumbnail1: '',
        thumbnail2: '',
        thumbnail3: ''
    }
    //binding
    this.getRequest = this.getRequest.bind(this)
    this.handleImageClick = this.handleImageClick.bind(this)
    this.handleButtonClick = this.handleButtonClick.bind(this)
  }
  //methods
    //get request
  getRequest()  {
    axios.get(`http://localhost:3000/images/${window.location.pathname.slice(1)}`)
    .then((response)=>{
      this.setState({
        data: [...response.data],
        color: response.data[0].color,
        button1color: response.data[0].color,
        button2color: response.data[3].color,
        bigImage: response.data[0].url,
        thumbnail1: response.data[0].url,
        thumbnail2: response.data[1].url,
        thumbnail3: response.data[2].url
      })
    })
    .catch((error)=>{
      console.log(error)
    })
  }
  //when the page loads
  componentDidMount() {
    this.getRequest()
  }
    //filter function?
    //handleClick for buttons
  handleButtonClick(event) {
    console.log(event.target.className)
    if (event.target.className === 'color-button-2') {
      this.setState({
        color: this.state.data[3].color,
        bigImage: this.state.data[3].url,
        thumbnail1: this.state.data[3].url,
        thumbnail2: this.state.data[4].url,
        thumbnail3: this.state.data[5].url
      })
    }
    if (event.target.className === 'color-button-1') {
      this.setState({
        color: this.state.data[0].color,
        bigImage: this.state.data[0].url,
        thumbnail1: this.state.data[0].url,
        thumbnail2: this.state.data[1].url,
        thumbnail3: this.state.data[2].url
      })
    }
  }
    //handleClick for images
  handleImageClick(e) {
    console.log(e.target.src)
    this.setState({
      bigImage: e.target.src
    })
  }
  //inline styling
  
  //render function
  render() {
    return (
      <div>
        <div className="container">
        <div className="thumbnail-div">
          <div>
            <img src={this.state.thumbnail1} onClick={this.handleImageClick} className="thumbnail"/>
          </div>
          <div>
            <img src={this.state.thumbnail2} onClick={this.handleImageClick} className="thumbnail"/>
          </div>
          <div>
          <img src={this.state.thumbnail3} onClick={this.handleImageClick} className="thumbnail"/>
          </div>
        </div>
      <div className="big-div">
        <img className="big-image" src={this.state.bigImage} onClick={this.handleImageClick}/>
      </div>
      <div className="button-div">
      <button className="color-button-1" onClick={this.handleButtonClick} style={{backgroundColor: this.state.button1color}}>
        </button>
        <button className="color-button-2" onClick={this.handleButtonClick} style={{backgroundColor: this.state.button2color}}>
          
        </button>
      </div>
      </div>
      </div>
    )
  }
}
export default App
