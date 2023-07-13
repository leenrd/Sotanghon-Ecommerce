import './style-location.css'
import { locations } from '../../data/locationData'

function Location() {
  return (
    <div className="location-content">
      <div className="heading-cont">
        <h3 className="headingTitle">Our Stores</h3>
      </div>
      <div className="stores">
      {
        locations.map(loc => {
          return (
            <LocationCard key={loc.id} image={loc.image} alt={loc.alt} title={loc.title} description={loc.description} />
          )
        })
      }
      </div>
    </div>
  )
}

const LocationCard = ({image, alt, title, description}) => {
  return(
    <div className='card'>
      <img className='storeImg' src={`/assets/${image}`} alt={alt} />
      <div className="desc">
        <h1 className="storeName">{title}</h1>
        <p className="description">
          {description}
        </p>
      </div>
    </div>
  )
}

export default Location