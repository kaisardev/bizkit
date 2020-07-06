import React, { useState, useEffect } from "react";
import "./FullCompany.css";
import { connect } from "react-redux";
import {
  getFullCompany,
  editFullCompany,
  openModal,
  closeModal,
} from "../../store/actions";
import Sidebar from "../../components/Sidebar/Sidebar";
import Header from "../../components/Header/Header";
import { TextField, Button } from "@material-ui/core";
import Modal from "../../components/Modal/Modal";
import axios from "../../axios-bizkit";

const FullCompany = (props) => {
  const [company, setCompany] = useState({
    name: "",
    shortname: "",
  });

  useEffect(() => {
    axios
      .get(`/companies/${props.match.params.id}/`)
      .then((response) => {
        setCompany(response.data || {});
      })
      .catch();
  }, []);

  const companyChangeHandler = (e) => {
    setCompany({ ...company, [e.target.name]: e.target.value });
  };

  return (
    <div className="FullCompany">
      <Modal show={props.isModal} closeModal={props.onCloseModal} />
      <Sidebar />
      <div className="Main_content">
        <Header
          headerTitle="Наименование компании"
          showModal={props.onOpenModal}
        />
        <div className="Table_wrapper">
          <div className="info">
            <div className="main_info">
              <h3 className="main_info_title">Основная информация</h3>
              <div className="Modal_row">
                <TextField
                  className="Modal_input"
                  name="name"
                  label="Наименование компании"
                  variant="outlined"
                  value={company.name || ""}
                  onChange={companyChangeHandler}
                />
                <TextField
                  className="Modal_input"
                  name="shortname"
                  label="Короткое название"
                  variant="outlined"
                  value={company.shortname || ""}
                  onChange={companyChangeHandler}
                />
              </div>
              <div className="Modal_row">
                <TextField
                  className="Modal_input"
                  name="type"
                  label="Тип юр.лица"
                  variant="outlined"
                  value={company.type || ""}
                  onChange={companyChangeHandler}
                />
                <TextField
                  className="Modal_input"
                  name="workscope"
                  label="Сфера деятельности"
                  variant="outlined"
                  value={company.workscope || ""}
                  onChange={companyChangeHandler}
                />
              </div>
              <div className="Modal_row">
                <TextField
                  className="Modal_input"
                  name="region"
                  label="Регион"
                  variant="outlined"
                  value={company.region || ""}
                  onChange={companyChangeHandler}
                />
                <TextField
                  className="Modal_input"
                  name="city"
                  label="Город"
                  variant="outlined"
                  value={company.city || ""}
                  onChange={companyChangeHandler}
                />
              </div>
              <div className="Modal_row">
                <TextField
                  className="Modal_input"
                  name="email"
                  label="Email"
                  variant="outlined"
                  value={company.email || ""}
                  onChange={companyChangeHandler}
                />
                <TextField
                  className="Modal_input"
                  name="phone"
                  label="Телефон"
                  variant="outlined"
                  value={company.phone || ""}
                  onChange={companyChangeHandler}
                />
              </div>
              <TextField
                multiline
                rows={2}
                rowsMax={4}
                label="Дополнительное описание"
                variant="outlined"
                name="description"
                className="Modal_textArea"
                value={company.description || ""}
                onChange={companyChangeHandler}
              />
              <div className="Modal_button_wrapper">
                <Button
                  variant="contained"
                  className="Modal_button"
                  color="primary"
                  onClick={() => {
                    props.onEditFullCompany(company.id, company, props.history);
                  }}>
                  Сохранить
                </Button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

const mapStateToProps = (state) => {
  return {
    currentCompany: state.currentCompany,
    isModal: state.isModal,
  };
};

const mapDispatchToProps = (dispatch) => {
  return {
    onGetFullCompany: (id) => dispatch(getFullCompany(id)),
    onEditFullCompany: (id, company, history) =>
      dispatch(editFullCompany(id, company, history)),
    onOpenModal: () => dispatch(openModal()),
    onCloseModal: () => dispatch(closeModal()),
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(FullCompany);
