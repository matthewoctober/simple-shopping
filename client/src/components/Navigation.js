import React from "react";
import { connect } from "react-redux";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { Link } from "react-router-dom";
import { toggleCartStatus } from "../redux/actionCreators";
import makeAccessiblePsuedoButton from "../utils";
import Cart from "./Cart";
import "../styles/Navigation.css";

const Navigation = props => {
  const { cartStatus, toggleCartStatus } = props;
  return (
    <nav className="navigation">
      <span className="navigation__profile-container">
        <FontAwesomeIcon
          className="navigation__icon navigation__icon--profile"
          icon="user"
        />
      </span>
      <h1>
        <Link to="/" className="link link--heading">
          Simple Shopping
        </Link>
      </h1>
      <span
        className="navigation__cart-container closed"
        onClick={toggleCartStatus}
        {...makeAccessiblePsuedoButton(toggleCartStatus)}
      >
        <FontAwesomeIcon
          className="navigation__icon navigation__icon--cart"
          icon="shopping-cart"
        />
        <Cart />
      </span>
    </nav>
  );
};

const mapStateToProps = state => {
  return {
    cartStatus: state.cartStatus
  };
};

const mapDispatchToProps = dispatch => {
  return {
    toggleCartStatus: e => dispatch(toggleCartStatus(e))
  };
};

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(Navigation);