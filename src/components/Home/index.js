import {Component} from 'react'
import Loader from 'react-loader-spinner'
import Header from '../Header'
import TecheraCourse from '../TecheraCourse'
import './index.css'

const apiStatusConstants = {
  initial: 'INITIAL',
  success: 'SUCCESS',
  failure: 'FAILURE',
  inProgress: 'IN_PROGRESS',
}

class Home extends Component {
  state = {
    apiStatus: apiStatusConstants.initial,
    courseList: [],
  }

  componentDidMount() {
    this.getCourses()
  }

  getCourses = async () => {
    this.setState({
      apiStatus: apiStatusConstants.inProgress,
    })
    const url = 'https://apis.ccbp.in/te/courses'
    const options = {
      method: 'GET',
    }
    const response = await fetch(url, options)
    if (response.ok) {
      const fetchedData = await response.json()
      const updatedData = fetchedData.courses.map(each => ({
        id: each.id,
        name: each.name,
        logoUrl: each.logo_url,
      }))
      this.setState({
        courseList: updatedData,
        apiStatus: apiStatusConstants.success,
      })
    } else {
      this.setState({
        apiStatus: apiStatusConstants.failure,
      })
    }
  }

  onClickRetry = () => {
    this.getCourses()
  }

  renderFailureView = () => (
    <div className="container-class">
      <img
        className="img-notfound"
        src="https://assets.ccbp.in/frontend/react-js/tech-era/failure-img.png"
        alt="failure view"
      />
      <h1 className="something-wrong">Oops! Something Went Wrong</h1>
      <p className="something-wrong">
        We cannot seem to find the page you are looking for.
      </p>
      <button
        type="button"
        className="button-class"
        onClick={this.onClickRetry}
      >
        Retry
      </button>
    </div>
  )

  techEraLanguageList = () => {
    const {courseList} = this.state

    return (
      <div className="tech-era-course-container">
        <h1 className="tech-era-course">Courses</h1>
        <ul className="ul-class">
          {courseList.map(each => (
            <TecheraCourse key={each.id} courseItemDetails={each} />
          ))}
        </ul>
      </div>
    )
  }

  techEraLoader = () => (
    <div data-testid="loader" className="container-class">
      <Loader type="ThreeDots" color="#00BFFF" height={50} width={50} />
    </div>
  )

  techEraView = () => {
    const {apiStatus} = this.state

    switch (apiStatus) {
      case apiStatusConstants.success:
        return this.techEraLanguageList()
      case apiStatusConstants.failure:
        return this.renderFailureView()
      case apiStatusConstants.inProgress:
        return this.techEraLoader()
      default:
        return null
    }
  }

  render() {
    return (
      <>
        <Header />
        {this.techEraView()}
      </>
    )
  }
}

export default Home
