import coats from '/images/products/coats.jpg';
import Delivery from '/images/products/Delivery.png';
import shoppingCart from '/images/products/shoppingCart.png';
import tapeMeasure from '/images/products/tapeMeasure.png';
import bulb from '/images/products/bulb.webp';
import cards from '/images/products/cards.webp';
import one from '/images/products/one.webp';
import two from '/images/products/two.webp';
import three from '/images/products/three.webp';
import four from '/images/products/four.webp';
import five from '/images/products/five.webp';
import six from '/images/products/six.webp';

const Webflow = () => {
  return (
    <div className="card-container">
      <div className="card-wrap">
        <div>
          <img
            src={one}
            alt="number"
            width="60px"
            height="60px"
            className="number-img"
          />
        </div>
        <h4 className="head-1"> PLAN EARLY ORDER </h4>
        <div>
          <img
            src={bulb}
            alt="bulb"
            width="80px"
            height="80px"
            className="flow-img"
          />
        </div>
        <p> Plan your order with delivery date in mind. </p>
      </div>
      <div className="card-wrap">
        <div>
          <img
            src={two}
            alt="number"
            width="60px"
            height="60px"
            className="number-img"
          />
        </div>
        <h4 className="head-2"> CUSTOMIZATION </h4>
        <div>
          <img
            src={coats}
            alt="coats"
            width="80px"
            height="80px"
            className="flow-img"
          />
        </div>
        <p> Customize Your Style , Fabric, & Measurments </p>
      </div>
      <div className="card-wrap">
        <div>
          <img
            src={three}
            alt="number"
            width="60px"
            height="60px"
            className="number-img"
          />
        </div>
        <h4 className="head-3"> MEASUREMENT </h4>
        <div>
          <img
            src={tapeMeasure}
            alt="tape"
            width="100px"
            height="60px"
            className="flow-img"
          />
        </div>
        <p> Tailor and the Customer communicate for body measurement. </p>
      </div>
      <div className="card-wrap">
        <div>
          <img
            src={four}
            alt="number"
            width="60px"
            height="60px"
            className="number-img"
          />
        </div>
        <h4 className="head-4"> PLACE ORDER </h4>
        <div>
          <img
            src={shoppingCart}
            alt="cart"
            width="90px"
            height="80px"
            className="flow-img"
          />
        </div>
        <p> Place your order after confirming all details. </p>
      </div>
      <div className="card-wrap">
        <div>
          <img
            src={five}
            alt="number"
            width="60px"
            height="60px"
            className="number-img"
          />
        </div>
        <h4 className="head-5"> ADVANCE PAYMENT </h4>
        <div>
          <img
            src={cards}
            alt="cards"
            width="80px"
            height="80px"
            className="flow-img"
          />
        </div>
        <p> Full Payment to be made in advance. </p>
      </div>
      <div className="card-wrap">
        <div>
          <img
            src={six}
            alt="number"
            width="60px"
            height="60px"
            className="number-img"
          />
        </div>
        <h4 className="head-6"> TIMELY DELIVERY </h4>
        <div>
          <img
            src={Delivery}
            alt="delivery"
            width="80px"
            height="80px"
            className="flow-img"
          />
        </div>
        <p> We deliver your order to your doorsteps. </p>
      </div>
    </div>
  );
};

export default Webflow;
