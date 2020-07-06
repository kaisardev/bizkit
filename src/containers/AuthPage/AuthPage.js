import React, { Component } from "react";
import { connect } from "react-redux";
import "./AuthPage.css";

import { TextField } from "@material-ui/core";
import Button from "@material-ui/core/Button";
import { loginUser } from "../../store/actions";

class AuthPage extends Component {
  state = {
    email: "",
    password: "",
  };

  inputChangeHandler(e) {
    this.setState({ [e.target.name]: e.target.value });
  }

  async makeAuth(user) {
    await this.props.onLoginUser(user);
    if (this.props.isAuthenticated) {
      this.props.history.push("/main");
    }
  }

  render() {
    return (
      <div className="AuthPage">
        <div className="AuthPage__auth-wrapper">
          <h2 className="AuthPage_title">Авторизация</h2>
          <TextField
            id="outlined-basic"
            label="Email"
            variant="outlined"
            name="email"
            onChange={(e) => {
              this.inputChangeHandler(e);
            }}
            className="AuthPage_input"
          />
          <TextField
            id="outlined-password-input"
            label="Пароль"
            type="password"
            variant="outlined"
            name="password"
            onChange={(e) => {
              this.inputChangeHandler(e);
            }}
            className="AuthPage_input"
          />
          {this.props.error ? (
            <h4 className="AuthPage_warning">Incorrect login or password</h4>
          ) : null}
          <div className="AuthPage__button-wrapper">
            <Button
              variant="contained"
              color="primary"
              onClick={() => {
                this.makeAuth(this.state);
              }}>
              Войти
            </Button>
          </div>
        </div>
      </div>
    );
  }
}

const mapStateToProps = (state) => {
  return {
    isAuthenticated: state.isAuthenticated,
    error: state.error,
  };
};

const mapDispatchToProps = (dispatch) => {
  return {
    onLoginUser: (user) => dispatch(loginUser(user)),
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(AuthPage);
