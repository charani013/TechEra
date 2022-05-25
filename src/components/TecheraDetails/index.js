import './index.css'

const CourseDetailsItem = props => {
  const {courseItemDetails} = props
  const {name, description, imageUrl} = courseItemDetails

  return (
    <li className="language-details">
      <img className="img-language" src={imageUrl} alt={name} />
      <div>
        <h1 className="language-heading">{name}</h1>
        <p className="language-paragraph">{description}</p>
      </div>
    </li>
  )
}

export default CourseDetailsItem
