import React from 'react'

import * as Icon from 'react-bootstrap-icons'

import DefaultButton from '../../../components/buttons/DefaultButton'

const GoogleButton: React.FunctionComponent = () => {
    return (
        <>
            <DefaultButton
                text="Войти с помощью Google"
                color="none"
                icon={<img src="./google.svg" alt="google" />}
            />
        </>
    )
}

export default GoogleButton