import React from 'react';
import './Home.css';
import Product from './Product';
import frontbanner from './img/home.jpg';

function Home() {
  return (
    <div className='home'>
        <div className='home__container'>
            <img
          className="home__image"
           src={frontbanner} alt="logo" />
          
        <div className='home__row'>
             <Product
            id="12346941"
            title="Panasonic LUMIX G7 16.00 MP 4K Mirrorless Camera Kit with 42 mm Lens with 3x Optical Zoom"
            price={42990}
            rating={4}
            image="https://m.media-amazon.com/images/I/91xnO7qHAeL._SX679_.jpg"
          />
           <Product 
           id="12321341"
           title="Samsung Galaxy S23 5G (Green, 8GB, 256GB Storage)" 
           price={79999} 
           image="https://m.media-amazon.com/images/I/41V4aNRci3L._SX300_SY300_QL70_FMwebp_.jpg"
            rating={5} />
            <Product
            id="4903850"
            title="Amazfit T-Rex 2 Premium Multisport GPS Sports Watch"
            price={1999}
            rating={3}
            image="https://m.media-amazon.com/images/I/41OmofFCgjL._SX300_SY300_QL70_FMwebp_.jpg"
          />
            
        </div>
        <div className='home__row'>
           <Product
            id="49538094"
            title="Kenwood Stand Mixer for Baking,Kitchen Mixer with K-beater, Dough Hook and Whisk"
            price={5399}
            rating={4}
            image="https://images-na.ssl-images-amazon.com/images/I/81O%2BGNdkzKL._AC_SX450_.jpg"
          />
          <Product
            id="23445930"
            title="Amazon Echo (3rd generation) | Smart speaker with Alexa, Charcoal Fabric"
            price={2599}
            rating={5}
            image="https://m.media-amazon.com/images/I/81bVIjpGEZL._SX569_.jpg"
          />
           <Product
            id="3254354345"
            title="New Apple iPad Pro (12.9-inch, Wi-Fi, 128GB) - Silver (4th Generation)"
            price={89999}
            rating={4}
            image="https://m.media-amazon.com/images/I/41WkmC8bOEL._SY445_SX342_QL70_FMwebp_.jpg"
          />
        </div>
          <div className='home__row'>
          <Product
            id="90829332"
            title="Sony PS5 PlayStation Console+God Of War Ragnarok | Standard Edition | PS5 Game (PlayStation 5)"
            price={55099}
            rating={4}
            image="https://m.media-amazon.com/images/I/518vel6lTLL._SX679_.jpg"
          />
          <Product
            id="46429162"
            title="Apple 2023 MacBook Air (15-inch, M2 chip with 8‑core CPU and 10‑core GPU, 8GB Unified Memory, 256GB)"
            price={126790}
            rating={5}
            image="https://store.storeimages.cdn-apple.com/4668/as-images.apple.com/is/mba15-midnight-config-202306?wid=420&hei=254&fmt=jpeg&qlt=95&.v=1684340991333"
          />
           
        </div>
        </div>
    </div>
  ) 
}

export default Home