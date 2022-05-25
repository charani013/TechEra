import {Link} from 'react-router-dom'
import './index.css'

const TecheraCourse = props => {
  const {courseItemDetails} = props
  const {id, name, logoUrl} = courseItemDetails

  return (
    <Link className="list-of-language" to={`/courses/${id}`}>
      <li className="tech-era-language-row">
        <img className="image-language" src={logoUrl} alt={name} />
        <p className="language-heading">{name}</p>
      </li>
    </Link>
  )
}

export default TecheraCourse
