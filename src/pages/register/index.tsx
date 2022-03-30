import React from 'react'
import { Container } from 'react-bootstrap'
import { SignUp, AccountExist } from './components'

const SignUpPage: React.FunctionComponent = () => {
  return (
    <>
      <Container fluid>
        <AccountExist/>
        <Container>
          <SignUp/>
        </Container>
      </Container>
    </>
  )
}

export default SignUpPage