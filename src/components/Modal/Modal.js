import React, { useState } from "react";
import "./Modal.css";
import { connect } from "react-redux";

import Backdrop from "../Backdrop/Backdrop";
import { TextField, Button } from "@material-ui/core";
import { addCompany } from "../../store/actions";

const Modal = (props) => {
  const [company, setCompany] = useState({
    name: "",
    shortname: "",
    type: "",
    workscope: "",
    region: "",
    city: "",
    email: "",
    phone: "",
    description: "",
    address: null,
    is_owner: false,
    biin_iin: null,
    tax_payer: null,
    leader_position: null,
    leader: null,
    registered_address: null,
    registered_name: null,
    registered_size: 0,
    registered_type: "unknown",
    is_owner: false,
  });

  const inputChangeHandler = (e) => {
    setCompany({ ...company, [e.target.name]: e.target.value });
  };

  return (
    <>
      <Backdrop show={props.show} clicked={props.closeModal} />
      <div
        className="Modal"
        style={props.show ? { display: "block" } : { display: "none" }}>
        <span className="Modal_close" onClick={props.closeModal}></span>
        <h2 className="Modal_title">Добавить клиента</h2>
        <div className="Modal_row">
          <TextField
            className="Modal_input"
            name="name"
            id="outlined-basic"
            label="Наименование компании"
            onChange={inputChangeHandler}
            variant="outlined"
          />
          <TextField
            className="Modal_input"
            name="shortname"
            id="outlined-basic"
            label="Короткое название"
            onChange={inputChangeHandler}
            variant="outlined"
          />
        </div>
        <div className="Modal_row">
          <TextField
            className="Modal_input"
            name="type"
            id="outlined-basic"
            label="Тип юр.лица"
            variant="outlined"
            onChange={inputChangeHandler}
          />
          <TextField
            className="Modal_input"
            name="workscope"
            id="outlined-basic"
            label="Сфера деятельности"
            variant="outlined"
            onChange={inputChangeHandler}
          />
        </div>
        <div className="Modal_row">
          <TextField
            className="Modal_input"
            name="region"
            id="outlined-basic"
            label="Регион"
            variant="outlined"
            onChange={inputChangeHandler}
          />
          <TextField
            className="Modal_input"
            name="city"
            id="outlined-basic"
            label="Город"
            variant="outlined"
            onChange={inputChangeHandler}
          />
        </div>
        <div className="Modal_row">
          <TextField
            className="Modal_input"
            name="email"
            id="outlined-basic"
            label="Email"
            variant="outlined"
            onChange={inputChangeHandler}
          />
          <TextField
            className="Modal_input"
            name="phone"
            id="outlined-basic"
            label="Телефон"
            variant="outlined"
            onChange={inputChangeHandler}
          />
        </div>
        <TextField
          multiline
          rows={2}
          rowsMax={4}
          label="Дополнительное описание"
          variant="outlined"
          name="description"
          onChange={inputChangeHandler}
          className="Modal_textArea"
        />
        <div className="Modal_button_wrapper">
          <Button
            variant="contained"
            className="Modal_button"
            color="primary"
            onClick={() => {
              props.onAddCompany(company);
            }}>
            Добавить
          </Button>
        </div>
      </div>
    </>
  );
};

const mapDispatchToProps = (dispatch) => {
  return {
    onAddCompany: (company) => dispatch(addCompany(company)),
  };
};

export default connect(null, mapDispatchToProps)(Modal);
