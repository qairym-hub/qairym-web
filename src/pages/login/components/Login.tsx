import React, { useState } from 'react'
import { Form, FloatingLabel } from 'react-bootstrap'
import * as Icon from 'react-bootstrap-icons'


import { DefaultButton } from '../../../components'

const Login: React.FunctionComponent = () => {

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
            >
              <Form.Control type="text" placeholder="Имя пользователя" className="rounded-extra"/>
            </FloatingLabel>
          </Form.Group>

          <Form.Group className="mb-3">
            <FloatingLabel
              controlId="floatingPassword"
              label="Пароль"
            >
              <Form.Control type="password" placeholder="Пароль" className="rounded-extra"/>
            </FloatingLabel>
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