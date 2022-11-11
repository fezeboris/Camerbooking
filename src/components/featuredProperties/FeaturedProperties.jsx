import React from "react";
import "./FeaturedProperties.css";
import hyde from '../../assets/images/hyde.jpg'
const FeaturedProperties = () => {
  return (
    <div className="fp">
    <div className="fpItem">
    <img src={hyde} alt="" className="fpImg" />
      <span className="fpName">Aparthotel Stare Miasto</span>
      <span className="fpCity">Yaounde</span>
      <span className="fpPrice">Starting from $100</span>
      <div className="fpRating">
        <button>8.9</button>
        <span>Excellent</span>
      </div>
    </div>
    <div className="fpItem">
    <img src={hyde} alt="" className="fpImg" />
      <span className="fpName">Aparthotel Stare Miasto</span>
      <span className="fpCity">Douala</span>
      <span className="fpPrice">Starting from $100</span>
      <div className="fpRating">
        <button>8.9</button>
        <span>Excellent</span>
      </div>
    </div>
    <div className="fpItem">
    <img src={hyde} alt="" className="fpImg" />
      <span className="fpName">Aparthotel Stare Miasto</span>
      <span className="fpCity">Bafoussam</span>
      <span className="fpPrice">Starting from $100</span>
      <div className="fpRating">
        <button>8.9</button>
        <span>Excellent</span>
      </div>
    </div>
    <div className="fpItem">
    <img src={hyde} alt="" className="fpImg" />
      <span className="fpName">Aparthotel Stare Miasto</span>
      <span className="fpCity">Kribi</span>
      <span className="fpPrice">Starting from $100</span>
      <div className="fpRating">
        <button>8.9</button>
        <span>Excellent</span>
      </div>
    </div>
    </div>
  );
};

export default FeaturedProperties;
