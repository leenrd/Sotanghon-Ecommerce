import './style-deals-page.css'
import { sampleBread } from '../../data/breadsData'

const Deals = () => {
    return (
        <div className='container'>
            <div id='heading' className='heading-cont'>
                <h1 className='headingTitle'>
                    Our Hottest Deals
                </h1>
                <p className='headsubText'>Best Croissant and Cakes in town</p>
            </div>
            <div className="content">
                {sampleBread.map(bread => {
                    return (
                        <Card name={bread.name} description={bread.description} imageName={bread.imageName} imageAlt={bread.imageAlt} price={bread.price} key={bread.id} />
                    )
                })}
            </div>
        </div>
    )
}


const Card = ({name, description, imageName, imageAlt, price}) => {
    return (
        <div className="card">
                <img className='ProductImage' src={`/assets/${imageName}`} alt={imageAlt} />
                <h3>{name}</h3>
                <p className='price'>{price}</p>
                <p className='description'>{description}</p>
                <div className="buttons">
                <button className="btn-secondary">Buy</button>
                <button className="btn-primary"><i className="fa-solid fa-cart-plus"></i> Add to Cart</button>
                </div>
        </div>
    )
}

export default Deals