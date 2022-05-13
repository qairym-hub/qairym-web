import React from 'react'
import { Container } from 'react-bootstrap'
import { SignUp, AccountExist, Header, GoogleButton } from './components'

const SignUpPage: React.FunctionComponent = () => {
  return (
    <>
      <Container fluid>
        <AccountExist/>
        <Container className='d-flex align-items-center justify-content-center'>
          <div>
            <div>
              <Header/>
            </div>
            <div className="d-flex justify-content-center w-100">
              <GoogleButton/>
            </div>
            <div
              style={{ textAlign: "center", borderBottom: "1px solid lightgray", lineHeight: "0.1em", margin: "10px 0 10px" }}
              className="w-100 text-center mt-5 mb-5"
            >
              <span
                style={{ background:"#fff", padding: "0 10px", color: "black" }}
                className=""
              >
                или используйте эл. почту
              </span>
            </div>
            <div>
              <SignUp/>
            </div>
          </div>
        </Container>
      </Container>
    </>
  )
}

export default SignUpPage