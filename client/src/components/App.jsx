import React from 'react'
import axios from 'axios'

class App extends React.Component {
  constructor() {
    super();
    this.state ={
      //state
        data: [],
        color: '',
        itemId: null,
        bigImage: '',
        thumbnails: []
    }
    //binding
    this.getRequest = this.getRequest.bind(this)
    this.handleImageClick = this.handleImageClick.bind(this)
    this.handleButtonClick = this.handleButtonClick.bind(this)
  }
  //methods
    //get request
  getRequest()  {
    axios.get('/images/0')
    .then((response)=>{
      console.log(response.data)
      //expect response of 6 images or 3?
      //how do we deal with the different colors
      this.setState({
        data: [...response.data],
        color: response.data[0].color,
        itemId: response.data[0].itemId,
        bigImage: response.data[0].url
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
          {/* <div>
            <img src={this.state.thumbnails[0]} onClick={this.handleImageClick}>Thumbnail1</img>
          </div>
          <div>
          <img src={this.state.thumbnails[1]} onClick={this.handleImageClick}
          >Thumbnail2</img>
          </div> */}
          {/* <div>
          <img src={this.state.thumbnails[2]} onClick={this.handleImageClick}>Thumbnail3</img>
          </div> */}
        </div>
      <div>
        <img src={this.state.bigImage} onClick={this.handleImageClick}/>Big Image
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
