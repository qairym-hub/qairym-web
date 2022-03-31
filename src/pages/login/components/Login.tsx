import { AxiosError } from 'axios'
import React, { useState } from 'react'
import { Form, FloatingLabel } from 'react-bootstrap'
import * as Icon from 'react-bootstrap-icons'
import { connect, DefaultRootState, RootStateOrAny } from 'react-redux'
import { Action, Dispatch } from 'redux'


import { DefaultButton } from '../../../components'
import userController from '../../../services/api/user.controller'
import AuthResponse from '../../../services/models/AuthResponse'

const Login: React.FunctionComponent = (props: any) => {
  const [username, setUsername] = useState<String>('')
  const [password, setPassword] = useState<String>('')
  const [user, setUser] = useState<Object>({})

  const [error, setError] = useState<String | undefined>(undefined)
  const [loading, setLoading] = useState<boolean | undefined>(false)

  const handleUsernameChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setUsername(e.target.value)
  }

  const handlePasswordChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setPassword(e.target.value)
  }

  const handleClick = () => {
    setLoading(true)

    userController.login(
      username, password,
      (data: AuthResponse, error: AxiosError) => {
        if (error)
          return setError(error.message)

        setUser(data)
        return setLoading(false)
      }
    )

  }

  return (
    <>
      <div
        style={{ width: "350px" }}
        className="border rounded-extra p-4"
      >
        <Form >
          <Form.Group className="mb-3">
            <FloatingLabel
              controlId="floatingInput"
              label="Имя пользователя"
              onChange={handleUsernameChange}
            >
              <Form.Control type="text" placeholder="Имя пользователя" className="rounded-extra" />
            </FloatingLabel>
          </Form.Group>

          <Form.Group className="mb-3">
            <FloatingLabel
              controlId="floatingPassword"
              label="Пароль"
              onChange={handlePasswordChange}
            >
              <Form.Control type="password" placeholder="Пароль" className="rounded-extra" />
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
    login: () => { }
  }
}

export default connect(
  mapState,
  mapDispatch
)(Login)