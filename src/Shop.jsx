import { NavLink } from "react-router-dom";
import "./App.css";

function Shop() {
  return (
    <div className="main-container-div">
      <div className="main-title-start-div">
        <label className="main-title-logo">Celebrity Brain Buster</label>
        <div className="logged-in-user"> </div>
      </div>
      <div className="shop-content">
        <div className="main-shop-title">
          <label>Taylor Swift | The Eras Tour Collection Promo Codes</label>
        </div>

        <div className="promocode-taylor-div">
          <div className="promocode-1">
            <label>Promo Code: For 50% </label>
            <label className="item-price-50percent">Price: 425 points</label>
            <NavLink>
              <button>Get Code</button>
            </NavLink>
          </div>
          <div className="promocode-2">
            <label>Promo Code: For 15%</label>
            <label className="item-price-15percent">Price: 150 points</label>
            <NavLink>
              <button>Get Code</button>
            </NavLink>
          </div>
        </div>
      </div>
    </div>
  );
}
export default Shop;
