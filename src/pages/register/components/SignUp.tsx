import { useRouter } from 'next/router'
import React, { useState } from 'react'
import { Form, FloatingLabel } from 'react-bootstrap'
import * as Icon from 'react-bootstrap-icons'
import { DefaultButton } from '../../../components'
import authController from '../../../services/api/auth.controller'

const SignUp = () => {
  // const [ email, setEmail ] = useState('')
  const [ username, setUsername ] = useState('')
  const [ password, setPassword ] = useState('') 

  const auth = authController
  const router = useRouter()

  const handleSignUp = () => {
    const newUser = {
      username: username,
      password: password,
      location: {
        cityId: 3
      }
    }
    auth.create(newUser, () => {console.log("Зареган")}, ()=>{})
    router.push("/home")
  }

  return (
    <>
      <div
        style={{ width: "350px" }}
        className="border rounded-extra p-4 text-center"
      >
        <Form >
          {/* <Form.Group className="mb-2">
            <FloatingLabel
              controlId="floatingInput"
              label="Электронная почта"
            >
              <Form.Control type="text" placeholder="Электронная почта" className="rounded-extra" value={email} onChange={(e) => setEmail(e.target.value)} />
            </FloatingLabel>
          </Form.Group> */}

          <Form.Group className="mb-2">
            <FloatingLabel
              controlId="floatingInput"
              label="Имя пользователя"
            >
              <Form.Control type="text" placeholder="Имя пользователя" className="rounded-extra" value={username} onChange={(e) => setUsername(e.target.value)} />
            </FloatingLabel>
          </Form.Group>

          <Form.Group className="mb-2">
            <FloatingLabel
              controlId="floatingPassword"
              label="Пароль"
            >
              <Form.Control type="password" placeholder="Пароль" className="rounded-extra" value={password} onChange={(e) => setPassword(e.target.value)} />
            </FloatingLabel>
          </Form.Group>

          <Form.Group className="mb-2">
            <FloatingLabel
              controlId="floatingPassword2"
              label="Повторите пароль"
            >
              <Form.Control type="password" placeholder="Повторите пароль" className="rounded-extra" value={password} onChange={(e) => setPassword(e.target.value)} />
            </FloatingLabel>
          </Form.Group>

          <Form.Group className="mt-3">
            <DefaultButton
              text="Регистрация"
              icon={<Icon.ArrowRightCircleFill size="20" />}
              fluid
              onClick={handleSignUp}
            />
          </Form.Group>
        </Form>
      </div>
    </>
  )
}

export default SignUp