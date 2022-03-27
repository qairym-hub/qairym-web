import React from 'react'
import { Form } from 'react-bootstrap'
import * as Icon from 'react-bootstrap-icons'

import DefaultButton from '../../../components/buttons/DefaultButton'

const Login: React.FunctionComponent = () => {

  return (
    <>
      <div
        style={{ width: "350px" }}
        className="border rounded-extra p-4"
      >
        <Form>
          <Form.Group className="mb-3">
            <Form.Control
              className="rounded-extra"
              type="text"
              placeholder="Имя пользователя"
            />
          </Form.Group>
          <Form.Group className="mb-3">
            <Form.Control
              className="rounded-extra"
              type="password"
              placeholder="Пароль"
            />
          </Form.Group>
          <Form.Group className="mt-5">
            <DefaultButton
              text="Войти"
              icon={<Icon.ArrowRightCircleFill size="20" />}
              fluid
            />
          </Form.Group>
        </Form>
      </div>
    </>
  )
}

export default Login