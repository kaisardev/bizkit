import React from "react";
import "./Header.css";

import { Button } from "@material-ui/core";

const Header = (props) => {
  return (
    <div className="Header">
      <h3>{props.headerTitle}</h3>
      <Button variant="contained" color="primary" onClick={props.showModal}>
        Добавить +
      </Button>
    </div>
  );
};

export default Header;
