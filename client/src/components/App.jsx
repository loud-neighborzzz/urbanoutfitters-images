import React from 'react'
import axios from 'axios'

class App extends React.Component {
  constructor() {
    super();
    this.state ={
      //state
        //color: string
        itemId: 0
        //bigImage: string
        //thumbnails: []
    }
    //binding
    this.getRequest = this.getRequest.bind(this)
    this.handleImageClick = this.handleImageClick.bind(this)
    this.handleButtonClick = this.handleButtonClick.bind(this)
  }
  //methods
    //get request
  getRequest()  {
    axios.get(`/images?itemId=${this.state.itemId}`)
    .then((response)=>{
      console.log(response)
      //expect response of 6 images or 3?
      //how do we deal with the different colors
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
  handleButtonClick() {

    }
    //handleClick for images
  handleImageClick() {

  }
  //render function
  render() {
    return (
      <div>
        <div>
          <div>
            <img src={this.state.thumbnails[0]} onClick={this.handleImageClick}>Thumbnail1</img>
          </div>
          <div>
          <img src={this.state.thumbnails[1]} onClick={this.handleImageClick}
          >Thumbnail2</img>
          </div>
          <div>
          <img src={this.state.thumbnails[2]} onClick={this.handleImageClick}>Thumbnail3</img>
          </div>
        </div>
      <div>
        <img src={this.state.bigImage} onClick={this.handleImageClick}>Big Image</img>
      </div>
      <div>
        <button onClick={this.handleButtonClick}>
          Color Button 1
        </button>
        <button onClick={this.handleButtonClick}>
          Color Button 2
        </button>
      </div>
      </div>
    )
  }
}
export default App
