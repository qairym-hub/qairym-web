import React from 'react'
import { Alert } from 'react-bootstrap'
import { TextRight } from 'react-bootstrap-icons'

interface AlertMessageComponentProps {
    variant: string,
    header?: string,
    text: string
}

const AlertMessage: React.FunctionComponent<AlertMessageComponentProps> = (
    {
        variant,
        header,
        text
    }

) => {

    return (
        <>
            <Alert
                className="rounded-extra"
                variant={variant}
            >
                {header && (
                    <Alert.Heading>
                        {header}
                    </Alert.Heading>
                )}
                <span>
                    {text}
                </span>
            </Alert>
        </>
    )
}

export default AlertMessage