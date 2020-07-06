import React, { Component } from "react";
import { connect } from "react-redux";
import "./Main.css";

import Sidebar from "../../components/Sidebar/Sidebar";
import {
  deleteCompany,
  fetchCompanies,
  openModal,
  closeModal,
  checkAuth,
} from "../../store/actions";
import MainTable from "../../components/MainTable/MainTable";

import Header from "../../components/Header/Header";
import Modal from "../../components/Modal/Modal";

class Main extends Component {
  componentDidMount() {
    this.props.onCheckAuth(this.props.history);
  }

  render() {
    return (
      <div className="Main">
        <Modal show={this.props.isModal} closeModal={this.props.onCloseModal} />
        <Sidebar />
        <div className="Main_content">
          <Header headerTitle="Клиенты" showModal={this.props.onOpenModal} />
          <div className="Table_wrapper">
            <MainTable
              companies={this.props.companies}
              delete={this.props.onDeleteCompany}
            />
          </div>
        </div>
      </div>
    );
  }
}

const mapStateToProps = (state) => {
  return {
    isModal: state.isModal,
    companies: state.companies,
    isAuthenticated: state.isAuthenticated,
  };
};

const mapDispatchToProps = (dispatch) => {
  return {
    onFetchCompanies: () => dispatch(fetchCompanies()),
    onDeleteCompany: (id) => dispatch(deleteCompany(id)),
    onOpenModal: () => dispatch(openModal()),
    onCloseModal: () => dispatch(closeModal()),
    onCheckAuth: (history) => dispatch(checkAuth(history)),
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(Main);
