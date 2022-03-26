import React from 'react'
import { Container, Row, Col } from 'react-bootstrap'
import Header from './components/Header'

import Login from './components/Login'

const LoginPage: React.FunctionComponent = () => {
  return (
    <>
      <Container fluid>
        <Row>
          <Col xs lg>
            <div className="w-100 h-100 p-3">
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
                <div>
                  <Header />
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