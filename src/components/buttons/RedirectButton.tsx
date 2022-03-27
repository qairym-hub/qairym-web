import Link from 'next/link'
import React from 'react'
import { Button } from 'react-bootstrap'

interface ButtonComponentProps {
    className?: string,
    text: string,
    fluid: boolean,
    color?: string,
    icon?: React.ReactNode,
    to: string
}

const RedirectButton: React.FunctionComponent<ButtonComponentProps> = (
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
            <Link href={to}>
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
            </Link>
        </>
    )
}

export default RedirectButton