import React from 'react'
import { Container } from 'react-bootstrap'
import { SignUp } from './components'

const SignUpPage: React.FunctionComponent = () => {
  return (
    <>
      <Container fluid>
        <SignUp></SignUp>
      </Container>
    </>
  )
}

export default SignUpPage