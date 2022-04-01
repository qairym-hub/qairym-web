import React from 'react'
import { Navbar, Container } from 'react-bootstrap'
import { RedirectButton } from '../../../components'

const AccountExist: React.FunctionComponent = () => {
    return (
        <>
            <Navbar>
                <Container>
                    <Navbar.Toggle />
                    <Navbar.Collapse className="justify-content-end">
                    <Navbar.Text>
                        Уже есть аккаунт? <RedirectButton className='ms-2' color='white' text='Войти' to='/login'/>
                    </Navbar.Text>
                    </Navbar.Collapse>
                </Container>
            </Navbar>
        </>
    )
}

export default AccountExist