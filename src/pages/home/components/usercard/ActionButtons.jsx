import React from 'react'
import { Col, Container, Row } from 'react-bootstrap'
import { buttons } from './ActionButtonsData'
import { connect } from 'react-redux'

import styles from './UserCard.module.css'

const ActionButtons = (props) => {
  return (
    <>
        {/* <div className="d-flex justify-content-between">
            {buttons.map((button, index) => {
                return (
                    <div
                        key={index}
                        style={{ backgroundColor: "rgb(255, 255, 255, .25)", cursor: "pointer", width: "30%" }} 
                        className="d-flex flex-column align-items-center rounded-extra text-white clickable-alt py-2 px-3"
                    >
                        {button.icon}
                        <span 
                            className="pt-1"
                            style={{ fontSize: "13px" }}
                        >
                            {button.text}
                        </span>
                    </div>
                )
            })}
        </div> */}
        <Container>
            <Row className="d-flex justify-content-between">
                {buttons.map((item, index) => {
                    return (
                        <Col
                            lg={4}
                            key={index}
                            style={{ backgroundColor: "rgb(255, 255, 255, .25)", cursor: "pointer", width: "30%" }} 
                            className={`d-flex flex-column align-items-center rounded-extra text-white py-2 px-3 mt-3 ${styles.clickable} `}
                            onClick={() => item.action(props)}
                        >
                            {item.icon}
                            <span 
                                className={`pt-1 text-roboto-500`}
                                style={{ fontSize: "13px" }}
                            >
                                {item.text}
                            </span>
                        </Col>
                    )
                })}       
            </Row>
        </Container>
    </>
  )
}

const mapState = (state) => {
    return {
      authenticated: state.authReducer.authenticated
    }
  }
  
  const mapDispatch = (dispatch) => {
    return {
      login: (auth) => {
        console.debug(auth)
        return dispatch({
          type: 'SIGNIN_SUCCESS',
          payload: {
            auth
          }
        })
      },
      logout: () => {
          return dispatch({
              type: 'SIGNOUT_SUCCESS'
          })
      }
    }
  }
  
  export default connect(
    mapState,
    mapDispatch
  )(ActionButtons)