import React from "react";
import { formatPrice } from "../helpers";
import { TransitionGroup, CSSTransition } from "react-transition-group";
import PropTypes from "prop-types";

class Order extends React.Component {
  renderOrder = (key) => {
    const fish = this.props.fishes[key];
    const count = this.props.order[key];

    if (this.props.order[key] === null) return null;

    if (!fish) return null;

    if (fish.status === "unavailable") {
      return <li key={key}>Sorry, {fish.name} is sold out!</li>;
    }

    return (
      <CSSTransition
        classNames="order"
        key={key}
        timeout={{ enter: 250, exit: 250 }}
      >
        <li key={key}>
          <span>
            <TransitionGroup component="span" className="count">
              <CSSTransition
                classNames="count"
                key={count}
                timeout={{ enter: 100, exit: 100 }}
              >
                <span>{count}</span>
              </CSSTransition>
            </TransitionGroup>
            &nbsp;lbs {fish.name}
          </span>
          <span className="order-price">
            {formatPrice(count * fish.price)}
            <button
              className="delete-order"
              onClick={() => this.props.deleteOrder(key)}
            >
              &times;
            </button>
          </span>
        </li>
      </CSSTransition>
    );
  };

  render() {
    const { fishes, order } = this.props;

    // grab keys of all fish in orders
    const orderIds = Object.keys(order);

    // calculate total price
    const total = orderIds.reduce((prevTotal, key) => {
      const fish = fishes[key];
      const count = order[key];
      const isAvailable = fish && fish.status === "available";
      if (isAvailable) {
        return prevTotal + count * fish.price;
      }
      return prevTotal;
    }, 0);

    return (
      <div className="order-wrap">
        <h2>Order</h2>
        <TransitionGroup component="ul" className="order">
          {orderIds.map(this.renderOrder)}
        </TransitionGroup>
        <div className="total">
          Total:
          <strong>{formatPrice(total)}</strong>
        </div>
      </div>
    );
  }
}

Order.propTypes = {
  deleteOrder: PropTypes.func.isRequired,
  fishes: PropTypes.object.isRequired,
  order: PropTypes.object.isRequired,
};

export default Order;
