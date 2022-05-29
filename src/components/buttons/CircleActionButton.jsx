import React from 'react'
import { Button } from 'react-bootstrap'

const CircleActionButton = (
    {
        className,
        text,
        color = 'gray',
        icon,
        onClick
    }
) => {
    return (
        <>
            <Button
                className={`round-button-circle text-center align-items-center justify-content-center ${className}`}
                onClick={onClick}
                variant={color}
            >
                {icon}
                <span className="text-roboto-500">
                    {text}
                </span>
            </Button>
        </>
    )
}

export default CircleActionButton