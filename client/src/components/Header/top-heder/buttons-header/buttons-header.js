import React, { Fragment } from "react";
import { Link } from "react-router-dom";
import { connect } from "react-redux";
import PropTypes from "prop-types";
import { logout } from "../../../../actions/auth";
import AuthProfileIcon from '../../../Profile/profileList/ProfileIcon/AuthProfileIcon'



import "./buttons-header.scss";

const ButtonsHeader = ({ auth: { isAuthenticated, loading,user }, logout}) => {
   const userProfile_path=((user==null))?('/'):(`/profile/show_single_profile/${user._id}`)
   const userProfile_id=((user==null))?(''):(user._id)
  console.log ("user_ID",userProfile_id);
  const authLinks = (
    <Fragment>
    <Link to="/">
      <button
        onClick={logout}
        type="button"
        className="btn btn-login-header btn-outline-primary"
      >
        Logout
      </button>
    </Link>
    <Link to={userProfile_path}>
      <AuthProfileIcon user_id={userProfile_id}/>
    </Link>
    </Fragment>
  );

  const guestLinks = (
    <Fragment>
      <Link to="/login">
        <button
          type="button"
          className="btn btn-login-header btn-outline-primary"
        >
          Login
        </button>
      </Link>

      <Link to="/register">
        <button
          type="button"
          className="btn btn-register-header btn-outline-primary"
        >
          Register
        </button>
      </Link>
    </Fragment>
  );

  return (
    <Fragment>
      <div className="header-top-right col">
        {!loading && (
          <Fragment>{isAuthenticated ? authLinks : guestLinks}</Fragment>
        )}
      </div>
    </Fragment>
  );
};

ButtonsHeader.propTypes = {
  logout: PropTypes.func.isRequired,
  auth: PropTypes.object.isRequired
};

const mapStateToProps = state => ({
  auth: state.auth
});

export default connect(
  mapStateToProps, {logout}
)(ButtonsHeader);
