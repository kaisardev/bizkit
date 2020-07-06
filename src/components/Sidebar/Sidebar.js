import React from "react";
import logo from "../../assets/img/logo.png";
import { NavLink } from "react-router-dom";
import { connect } from "react-redux";

import "./Sidebar.css";
import { logout } from "../../store/actions";

const Sidebar = (props) => {
  return (
    <div className="Sidebar">
      <img src={logo} alt="" />
      <NavLink
        to="/main"
        exact
        className="Sidebar_link"
        activeClassName="Sidebar_link-active">
        Клиенты
      </NavLink>
      <NavLink
        to="/"
        exact
        className="Sidebar_link exit_link"
        onClick={() => {
          props.onLogout();
        }}>
        Выход
      </NavLink>
    </div>
  );
};

const mapDispatchToProps = (dispatch) => {
  return {
    onLogout: () => dispatch(logout()),
  };
};

export default connect(null, mapDispatchToProps)(Sidebar);
