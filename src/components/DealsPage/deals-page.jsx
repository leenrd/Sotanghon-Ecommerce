import './style-deals-page.css'


const sampleBread = {
    name: 'Pandesal',
    description: 'Pandesal is a popular yeast-raised bread in the Philippines. Individual loaves are shaped by rolling the dough into long logs (bastón, Spanish for "stick") which are rolled in fine bread crumbs',
    imageName: 'saile-ilyas-T1AX0yT9dd4-unsplash.jpg',
    imageAlt: "pandesal image"
}


const Deals = () => {
    return (
        <div className='container'>
        <div id='heading' className="heading">
            <h1>
                Our Hottest Deals
            </h1>
            <p>Best Croissant and Cakes in town</p>
        </div>
        <div className="content">
            <Card name={sampleBread.name} description={sampleBread.description} imageName={sampleBread.imageName} imageAlt={sampleBread.imageAlt}/>
            <Card name={sampleBread.name} description={sampleBread.description} imageName={sampleBread.imageName} imageAlt={sampleBread.imageAlt}/>
            <Card name={sampleBread.name} description={sampleBread.description} imageName={sampleBread.imageName} imageAlt={sampleBread.imageAlt}/>
            <Card name={sampleBread.name} description={sampleBread.description} imageName={sampleBread.imageName} imageAlt={sampleBread.imageAlt}/>
            <Card name={sampleBread.name} description={sampleBread.description} imageName={sampleBread.imageName} imageAlt={sampleBread.imageAlt}/>
            <Card name={sampleBread.name} description={sampleBread.description} imageName={sampleBread.imageName} imageAlt={sampleBread.imageAlt}/>
        </div>
        </div>
    )
}

// add if sold out or not tick after pic debug
const Card = ({name, description, imageName, imageAlt}) => {
    // let soldOut
    // if(stock === 0) {
    //     soldOut = true
    // } else {
    //     soldOut = false
    // }

    return (
        <div className="card">
                {/* {soldOut && <div className='tick'>SOLD OUT</div>} */}
                <img className='ProductImage' src={`/assets/${imageName}`} alt={imageAlt} />
                <h3>{name}</h3>
                <p>{description}</p>
                <div className="buttons">
                <button className="btn-secondary">Buy</button>
                <button className="btn-primary"><i className="fa-solid fa-cart-plus"></i> Add to Cart</button>
                </div>
        </div>
    )
}

export default Deals