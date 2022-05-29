import { AxiosError } from 'axios'
import React, { useState } from 'react'
import { Form, FloatingLabel } from 'react-bootstrap'
import * as Icon from 'react-bootstrap-icons'

import AlertMessage from '../../../components/alerts/AlertMessage'
import DefaultButton from '../../../components/buttons/DefaultButton'
import userController from '../../../services/api/auth.controller.js'

const Login = (props) => {
  const [username, setUsername] = useState('')
  const [password, setPassword] = useState('')

  const [error, setError] = useState(undefined)
  const [loading, setLoading] = useState(false)

  const handleUsernameChange = (e) => {
    setError('')
    setUsername(e.target.value)
  }

  const handlePasswordChange = (e) => {
    setError('')
    setPassword(e.target.value)
  }
  
  const handleClick = () => {
    setError('')
    setLoading(true)

    userController.login(
      username, password,
      (data, error) => {
        setTimeout(() => {
          if (error) {
            //setError(error.message)
            console.log(error.message)
            
            return setLoading(false)
          }

          
          return setLoading(false)
        }, 1000)
      }
    )
  }

  return (
    <>
      <div
        style={{ width: "350px" }}
        className="border rounded-extra background-white p-4"
      >
        <Form>
          {error && (
            <AlertMessage
              text={error}
              variant="danger"
            />
          )}
          <Form.Group className="mb-3">
            <FloatingLabel
              controlId="floatingInput"
              label="Имя пользователя"
              onChange={handleUsernameChange}
            >
              <Form.Control
                type="text"
                placeholder="Имя пользователя"
                className="rounded-extra"
              />
            </FloatingLabel>
          </Form.Group>

          <Form.Group className="mb-3">
            <FloatingLabel
              controlId="floatingPassword"
              label="Пароль"
              onChange={handlePasswordChange}
            >
              <Form.Control
                type="password"
                placeholder="Пароль"
                className="rounded-extra"
              />
            </FloatingLabel>
          </Form.Group>

          <Form.Group className="mt-5">
            <DefaultButton
              text="Войти"
              icon={<Icon.ArrowRightCircleFill size="20" />}
              fluid
              loading={loading}
              onClick={handleClick}
            />
          </Form.Group>
        </Form>
        {/* <div>
          <CreateAccount />
        </div> */}
      </div>
    </>
  )
}

const mapState = (state) => {
  return {
    authenticated: state.authReducer.token.authenticated
  }
}

const mapDispatch = (dispatch) => {
  return {
    login: (auth) => {
      return dispatch({
        type: 'SIGNIN_SUCCESS',
        payload: {
          auth
        }
      })
    }
  }
}

export default Login