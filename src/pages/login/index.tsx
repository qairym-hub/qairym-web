import React from 'react'
import { Container, Row, Col } from 'react-bootstrap'
import GoogleButton from './components/GoogleButton'
import Header from './components/Header'

import Login from './components/Login'

const LoginPage: React.FunctionComponent = () => {

  return (
    <>
      <Container fluid>
        <Row>
          <Col xs lg>
            <div className="w-100 h-100 pt-3 pb-3 px-1">
              <div className="bg-primary w-100 h-100 rounded-extra">

              </div>
            </div>
          </Col>
          <Col xs lg>
            <div
              style={{ width: '100%', height: '710px' }}
              className="d-flex align-items-center justify-content-center"
            >
              <div>
                <div className="">
                  <Header />
                </div>
                <div className="d-flex justify-content-center my-5">
                  <GoogleButton />
                </div>
                <div className="mb-5">
                  <div
                    style={{ height: "20px", borderBottom: "1px solid lightgray" }}
                    className="w-100 text-center"
                  >
                    <span
                      style={{}}
                      className=""
                    >
                      я хз как это место сделать
                    </span>
                  </div>
                </div>
                <div>
                  <Login />
                </div>
              </div>
            </div>
          </Col>
        </Row>
      </Container>
    </>
  )
}

export default LoginPage