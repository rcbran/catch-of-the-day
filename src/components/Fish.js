import React from "react";
import { formatPrice } from "../helpers";
import PropTypes from "prop-types";

class Fish extends React.Component {
  handleClick = () => {
    this.props.addToOrder(this.props.index);
  };

  render() {
    const { image, name, price, desc, status } = this.props.details;

    let isAvailable;
    if (status === "available") {
      isAvailable = true;
    } else {
      isAvailable = false;
    }

    return (
      <li className="menu-fish">
        <img src={image} alt={name} />
        <h3 className="fish-name">
          {name}
          <span className="price">{formatPrice(price)}</span>
        </h3>
        <p>{desc}</p>
        <button disabled={!isAvailable} onClick={this.handleClick}>
          {isAvailable ? "Add To Cart " : "Sold Out!"}
        </button>
      </li>
    );
  }
}

Fish.propTypes = {
  addToOrder: PropTypes.func.isRequired,
  details: PropTypes.shape({
    image: PropTypes.string,
    name: PropTypes.string,
    price: PropTypes.number,
    desc: PropTypes.string,
    status: PropTypes.string,
  }),
};

export default Fish;
