import React from 'react'
import { Form, FloatingLabel } from 'react-bootstrap'
import * as Icon from 'react-bootstrap-icons'

import { DefaultButton } from '../../../components'


const SignUp = () => {
  return (
    <>
      <div
        style={{ width: "350px" }}
        className="border rounded-extra p-4 text-center"
      >
        <Form >
          <Form.Group className="mb-2">
            <FloatingLabel
              controlId="floatingInput"
              label="Электронная почта"
            >
              <Form.Control type="text" placeholder="Электронная почта" className="rounded-extra"/>
            </FloatingLabel>
          </Form.Group>

          <Form.Group className="mb-2">
            <FloatingLabel
              controlId="floatingInput"
              label="Имя пользователя"
            >
              <Form.Control type="text" placeholder="Имя пользователя" className="rounded-extra"/>
            </FloatingLabel>
          </Form.Group>

          <Form.Group className="mb-2">
            <FloatingLabel
              controlId="floatingPassword"
              label="Пароль"
            >
              <Form.Control type="password" placeholder="Пароль" className="rounded-extra"/>
            </FloatingLabel>
          </Form.Group>

          <Form.Group className="mb-2">
            <FloatingLabel
              controlId="floatingPassword"
              label="Повторите пароль"
            >
              <Form.Control type="password" placeholder="Повторите пароль" className="rounded-extra"/>
            </FloatingLabel>
          </Form.Group>

          <Form.Group className="mt-3">
            <DefaultButton
              text="Регистрация"
              icon={<Icon.ArrowRightCircleFill size="20" />}
              fluid
            />
          </Form.Group>
        </Form>
      </div>
    </>
  )
}

export default SignUp