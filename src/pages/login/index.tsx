import React from 'react'
import { Container, Row, Col } from 'react-bootstrap'

import { GoogleButton, Header, Login, Poster, Separator } from './components'

const LoginPage = () => {

  return (
    <>
      <Container fluid >
        <Row>
          <Col xs lg>
            <section className="w-100 h-100 pt-3 pb-3 px-1">
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
                {/* <div>
                  <CreateAccount />
                </div> */}
              </div>
            </section>
          </Col>
        </Row>
      </Container>
    </>
  )
}

export default LoginPage