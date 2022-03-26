import Link from 'next/link'
import React from 'react'
import { Button } from 'react-bootstrap'

interface ButtonComponentProps {
    text: string,
    color?: string,
    icon?: React.ReactNode,
    to: string
}

const RedirectButton = ({ text, color = 'primary', icon, to }: ButtonComponentProps) => {
    return (
        <>
            <Link href={to}>
                <Button
                    className="d-flex align-items-center border rounded-extra"
                    variant={color}
                >
                    <span className="d-flex px-5">
                        {icon && (
                            <div className="d-flex align-items-center">
                                {icon}
                            </div>
                        )}
                        <span className="text-roboto-500 px-2">
                            {text}
                        </span>
                    </span>
                </Button>
            </Link>
        </>
    )
}

export default RedirectButton