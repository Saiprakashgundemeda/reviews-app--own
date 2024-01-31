// Write your code here
import {Component} from 'react'
import './index.css'

class ReviewsCarousel extends Component {
  state = {
    currentIndex: 0,
  }

  onClickPrevious = () => {
    const {currentIndex} = this.state
    const {reviewsList} = this.props
    this.setState({
      currentIndex:
        (currentIndex - 1 + reviewsList.length) % reviewsList.length,
    })
  }

  onClickNext = () => {
    const {currentIndex} = this.state
    const {reviewsList} = this.props
    this.setState({currentIndex: (currentIndex + 1) % reviewsList.length})
  }

  render() {
    const {currentIndex} = this.state
    const {reviewsList} = this.props
    const {imgUrl, username, companyName, description} = reviewsList[
      currentIndex
    ]

    return (
      <div className="background-section">
        <h1>Reviews</h1>
        <div className="reviews-container">
          <button type="button" className="button">
            <img
              src="https://assets.ccbp.in/frontend/react-js/left-arrow-img.png"
              alt="left arrow"
              className="left-arrow"
              onClick={this.onClickPrevious}
            />
          </button>
          <div className="information-container">
            <img src={imgUrl} className="profile-image" alt="profile" />
            <h1>{username}</h1>
            <p>{companyName}</p>
            <p>{description}</p>
          </div>
          <button type="button" className="button">
            <img
              src="https://assets.ccbp.in/frontend/react-js/right-arrow-img.png"
              alt="right arrow"
              className="right-arrow"
              onClick={this.onClickNext}
            />
          </button>
        </div>
      </div>
    )
  }
}

export default ReviewsCarousel
