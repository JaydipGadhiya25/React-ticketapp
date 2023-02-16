import React from 'react';
import './featured.css'

export const Featured = () => {
  return (
    <div className="featured">
      <div className="featuredItem">
        <img src="https://cf.bstatic.com/xdata/images/region/square250/69967.webp?k=2e683234884f1caa334734e2ee99dd2036f55c3c413f65702d965eca167619a4&o=" alt="" className="featuredImg" />
        <div className="featuredtitles">
          <h1>South Goa</h1>
          <h2>123 properties</h2>
        </div>
      </div>
      <div className="featuredItem">
        <img src="https://cf.bstatic.com/xdata/images/city/square250/733507.webp?k=66c8dae717d74c6e7a05e0140e2fe3f87b6061e50b7aa36e317c05b3796cb257&o=" alt="" className="featuredImg" />
        <div className="featuredtitles">
          <h1>vagator</h1>
          <h2>123 properties</h2>
        </div>
      </div>
      <div className="featuredItem">
        <img src="https://cf.bstatic.com/xdata/images/region/square250/68606.webp?k=4b43b9128b79beaab4ca2e8c038ddf5709b0b90608afbca222cfbe08fabda7d2&o=" alt="" className="featuredImg" />
        <div className="featuredtitles">
          <h1>North Goa</h1>
          <h2>123 properties</h2>
        </div>
      </div>
      
    </div>
  )
}
export default Featured;