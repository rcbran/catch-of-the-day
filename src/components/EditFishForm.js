import React from "react";
import PropTypes from "prop-types";

class EditFishForm extends React.Component {
  handleChange = (event) => {
    // make a copy
    const updatedFish = {
      ...this.props.fish,
      [event.currentTarget.name]: event.currentTarget.value,
    };

    this.props.updateFish(this.props.index, updatedFish);
  };

  render() {
    return (
      <div className="fish-edit">
        <input
          type="text"
          name="name"
          onChange={this.handleChange}
          value={this.props.fish.name}
        />
        <input
          type="text"
          name="price"
          onChange={this.handleChange}
          value={this.props.fish.price}
        />
        <select
          name="status"
          onChange={this.handleChange}
          value={this.props.fish.status}
        >
          <option onChange={this.handleChange} value="available">
            Available
          </option>
          <option onChange={this.handleChange} value="sold-out">
            Sold Out!
          </option>
        </select>
        <textarea
          name="desc"
          onChange={this.handleChange}
          value={this.props.fish.desc}
        />
        <input
          type="text"
          name="image"
          onChange={this.handleChange}
          value={this.props.fish.image}
        />
        <button
          className="delete-fish"
          onClick={() => this.props.deleteFish(this.props.index)}
        >
          Delete Fish
        </button>
      </div>
    );
  }
}

EditFishForm.propTypes = {
  deleteFish: PropTypes.func.isRequired,
  updateFish: PropTypes.func.isRequired,
  fish: PropTypes.object.isRequired,
  index: PropTypes.string.isRequired,
};

export default EditFishForm;
