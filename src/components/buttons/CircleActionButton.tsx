import React from 'react'

interface CircleActionButtonProps {
    className?: string,
    text: string,
    color?: string,
    icon?: React.ReactNode,
    onClick?: any
}

const CircleActionButton: React.FunctionComponent<CircleActionButtonProps> = (
    {
        className,
        text,
        color = 'primary',
        icon,
        onClick
    }
) => {
    return (
        <>

        </>
    )
}

export default CircleActionButton