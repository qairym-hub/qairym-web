import React from 'react'
import { Button } from 'react-bootstrap'

interface CircleActionButtonProps {
    className?: string,
    text?: string,
    color?: string,
    icon?: React.ReactNode,
    onClick?: any
}

const CircleActionButton: React.FunctionComponent<CircleActionButtonProps> = (
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
                <span className="text-roboto-500 px-2">
                    {text}
                </span>
            </Button>
        </>
    )
}

export default CircleActionButton