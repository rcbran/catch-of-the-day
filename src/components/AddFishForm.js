import React from "react";
import PropTypes from "prop-types";

class AddFishForm extends React.Component {
  // attach to our input ref fields
  nameRef = React.createRef();
  priceRef = React.createRef();
  statusRef = React.createRef();
  descRef = React.createRef();
  imageRef = React.createRef();

  createFish = (event) => {
    // prevent form from refreshing page
    event.preventDefault();

    // create a new fish object
    const fish = {
      name: this.nameRef.current.value,
      price: parseFloat(this.priceRef.current.value),
      status: this.statusRef.current.value,
      desc: this.descRef.current.value,
      image: this.imageRef.current.value,
    };

    // call our parent func
    this.props.addFish(fish);

    // reset the form after submit
    event.currentTarget.reset();
  };
  render() {
    return (
      <form className="fish-edit" onSubmit={this.createFish}>
        <input type="text" name="name" ref={this.nameRef} placeholder="Name" />
        <input
          type="text"
          name="price"
          ref={this.priceRef}
          placeholder="Price"
        />
        <select name="status" ref={this.statusRef}>
          <option value="available">Available</option>
          <option value="sold-out">Sold Out!</option>
        </select>
        <textarea name="desc" ref={this.descRef} placeholder="Desc" />
        <input
          type="text"
          name="image"
          ref={this.imageRef}
          placeholder="Image"
        />
        <button className="add-fish-btn" type="submit">
          + Add Fish
        </button>
      </form>
    );
  }
}

AddFishForm.propTypes = {
  addFish: PropTypes.func.isRequired,
};

export default AddFishForm;
