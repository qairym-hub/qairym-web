import React from 'react'

import * as Icon from 'react-bootstrap-icons'

import DefaultButton from '../../../components/buttons/DefaultButton'

const GoogleButton: React.FunctionComponent = () => {
    return (
        <>
            <DefaultButton
                fluid
                text="Использовать Google"
                color="white"
                iconPlace
                icon={<img src="./google.svg" alt="google"
                />}
            />
        </>
    )
}

export default GoogleButton