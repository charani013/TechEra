import Header from '../Header'
import './index.css'

const NotFound = () => (
  <>
    <Header />
    <div className="container-class">
      <img
        className="img-notfound"
        src="https://assets.ccbp.in/frontend/react-js/tech-era/not-found-img.png "
        alt="not found"
      />
      <h1 className="something-wrong">Page Not found</h1>
      <p className="something-wrong">
        We are sorry, the page you requested could not be found
      </p>
    </div>
  </>
)

export default NotFound
