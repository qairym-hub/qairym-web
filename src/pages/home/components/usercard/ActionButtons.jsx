import React from "react";
import { buttons } from "./ActionButtonsData";
import { connect } from "react-redux";
import styles from "./UserCard.module.css";

const ActionButtons = (props) => {
  return (
    <>
      <div className="d-flex flex-wrap justify-content-between">
        {buttons.map((item, index) => {
          return (
            <div
              lg={4}
              key={index}
              style={{
                backgroundColor: "rgb(255, 255, 255, .25)",
                cursor: "pointer",
                width: "32%",
              }}
              className={`${styles.clickable} d-flex flex-column align-items-center rounded-extra text-white py-2 px-4 mt-3`}
              onClick={() => item.action(props)}
            >
              {item.icon}
              <span
                className={`pt-1 text-roboto-500`}
                style={{ fontSize: "13px" }}
              >
                {item.text}
              </span>
            </div>
          );
        })}
      </div>
    </>
  );
};

const mapState = (state) => {
  return {
    authenticated: state.authReducer.authenticated,
    show: state.componentReducer.show,
  };
};

const mapDispatch = (dispatch) => {
  return {
    login: (auth) => {
      console.debug(auth);
      return dispatch({
        type: "SIGNIN_SUCCESS",
        payload: {
          auth,
        },
      });
    },
    logout: () => {
      return dispatch({
        type: "SIGNOUT_SUCCESS",
      });
    },
    toggleModal: (show) => {
      return dispatch({
        type: "TOGGLE_MODAL",
        payload: {
          show,
        },
      });
    },
  };
};

export default connect(mapState, mapDispatch)(ActionButtons);
