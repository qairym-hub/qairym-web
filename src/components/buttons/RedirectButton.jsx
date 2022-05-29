import React from 'react'
import { Button } from 'react-bootstrap'

const RedirectButton = (
    {
        className,
        text,
        fluid,
        color = 'primary',
        icon,
        to
    }
) => {

    return (
        <>
                <Button
                    className={`border rounded-extra ${fluid && "w-100"} ${className}`}
                    variant={color}
                >
                    <div className="d-flex align-items-center justify-content-center px-3">
                        {icon}
                        <span className="text-roboto-500 px-2">
                            {text}
                        </span>
                    </div>
                </Button>
        </>
    )
}

export default RedirectButton