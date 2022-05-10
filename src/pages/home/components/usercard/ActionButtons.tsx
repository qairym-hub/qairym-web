import React from 'react'
import { Col, Container, Row } from 'react-bootstrap'
import * as Icon from 'react-bootstrap-icons'
import buttons from './ActionButtonsData'

import styles from './UserCard.module.css'

const ActionButtons = () => {
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

export default ActionButtons