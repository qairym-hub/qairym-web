import { AxiosError } from 'axios'
import Router from 'next/router'
import React, { useState } from 'react'
import { Form, FloatingLabel } from 'react-bootstrap'
import * as Icon from 'react-bootstrap-icons'
import { connect, RootStateOrAny } from 'react-redux'
import { Action, Dispatch } from 'redux'

import { AlertMessage, DefaultButton } from '../../../components'
import userController from '../../../services/api/user.controller'
import { AuthResponse } from '../../../services/models/AuthResponse'
import CreateAccount from './CreateAccount'

const Login: React.FunctionComponent = (props: any) => {
  const [username, setUsername] = useState<string>('')
  const [password, setPassword] = useState<string>('')

  const [error, setError] = useState<string | undefined>(undefined)
  const [loading, setLoading] = useState<boolean | undefined>(false)

  const handleUsernameChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setError('')
    setUsername(e.target.value)
  }

  const handlePasswordChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setError('')
    setPassword(e.target.value)
  }

  const handleClick = () => {
    setError('')
    setLoading(true)

    userController.login(
      username, password,
      (data: AuthResponse, error: AxiosError) => {
        setTimeout(() => {
          if (error) {
            setError(error.message)
            return setLoading(false)
          }

          props.login(data);
          return setLoading(false)
        }, 1000)
      }
    )
  }

  return (
    <>
      {props.authenticated && Router.push("/")}

      <div
        style={{ width: "350px" }}
        className="border rounded-extra p-4"
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
        <div>
          <CreateAccount />
        </div>
      </div>
    </>
  )
}

const mapState = (state: RootStateOrAny) => {
  return {
    authenticated: state.authReducer.token.authenticated
  }
}

const mapDispatch = (dispatch: Dispatch<Action>) => {
  return {
    login: (auth: AuthResponse) => {
      return dispatch({
        type: 'SIGIN_SUCCESS',
        payload: {
          auth
        }
      })
    }
  }
}

export default connect(
  mapState,
  mapDispatch
)(Login)