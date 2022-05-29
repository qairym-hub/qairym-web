import React from 'react'
import { Container, Row, Col } from 'react-bootstrap'

import Poster from './components/Poster'
import Header from './components/Header'
import GoogleButton from './components/GoogleButton'
import Separator from './components/Separator'
import Login from './components/Login'

const LoginPage = () => {

  return (
    <>
      <Container fluid >
        <Row>
          <Col xs lg>
            <section className="w-100 h-100 py-4 px-3">
              <div className="bg-primary w-100 h-100 rounded-extra">
                <Poster />
              </div>
            </section>
          </Col>
          <Col xs lg>
            <section
              style={{ height: '100vh' }}
              className="d-flex align-items-center justify-content-center w-100"
            >
              <div>
                <div className="mb-5">
                  <Header />
                </div>
                <div className="d-flex justify-content-center">
                  <GoogleButton />
                </div>
                <div className="mt-5 mb-5">
                  <Separator />
                </div>
                <div>
                  <Login />
                </div>
              </div>
            </section>
          </Col>
        </Row>
      </Container>
    </>
  )
}

export default LoginPage