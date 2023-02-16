import React from 'react'
import './HomeGuest.css'

const HomeGuest = () => {
  return (
    <div className="homeGuestList">
        <div className="homeGuestListItems">
            <img src="https://cf.bstatic.com/xdata/images/hotel/square600/343086396.webp?k=1988c3e3708f63e617f46f9b9a4d21be14fa4596fafbb816bdd069ded0a1fd80&o=&s=1" className="homeGuestImg" />
            <span className="name">Little Queen Suite</span>
            <span className="city">Madrid</span>
            <span className="price">Start from $450</span>
            <div className="ratingbtn">
                <button>
                    8.9
                   
                </button>
                <span>Very Good</span>
            </div>
        </div>
        <div className="homeGuestListItems">
            <img src="https://cf.bstatic.com/xdata/images/hotel/max1280x900/215955381.jpg?k=ff739d1d9e0c8e233f78ee3ced82743ef0355e925df8db7135d83b55a00ca07a&o=&hp=1" className="homeGuestImg"  />
            <span className="name">Aparthotel stare miasto</span>
            <span className="city">Madrid</span>
            <span className="price">Start from $450</span>
            <div className="ratingbtn">
                <button>
                    9.2
                   
                </button>
                <span>Excellent</span>
            </div>
        </div>
        <div className="homeGuestListItems">
            <img src="https://cf.bstatic.com/xdata/images/hotel/max1280x900/232902339.jpg?k=3947def526b8af0429568b44f9716e79667d640842c48de5e66fd2a8b776accd&o=&hp=1" className="homeGuestImg" />
            <span className="name">Aparthotel stare miasto</span>
            <span className="city">Madrid</span>
            <span className="price">Start from $450</span>
            <div className="ratingbtn">
                <button>
                    8.7
                   
                </button>
                <span>Superb</span>
            </div>
        </div>
        <div className="homeGuestListItems">
            <img src="https://cf.bstatic.com/xdata/images/hotel/max1280x900/322658536.jpg?k=3fffe63a365fd0ccdc59210188e55188cdb7448b9ec1ddb71b0843172138ec07&o=&hp=1" className="homeGuestImg" />
            <span className="name">Aparthotel stare miasto</span>
            <span className="city">Madrid</span>
            <span className="price">Start from $450</span>
            <div className="ratingbtn">
                <button>
                    9.6
                    
                </button>
                <span>Amazing</span>
            </div>
        </div>
       
    </div>
  )
}

export default HomeGuest;