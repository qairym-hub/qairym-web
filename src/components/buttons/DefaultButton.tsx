import React from 'react'
import { Button } from 'react-bootstrap'

interface ButtonComponentProps {
  className?: string,
  text: string,
  fluid?: boolean,
  color?: string,
  icon?: React.ReactNode,
  loading?: boolean,
  onClick?: any,
  iconPlace?: boolean,
}

const DefaultButton: React.FunctionComponent<ButtonComponentProps> = (
  {
    className,
    fluid,
    text,
    color = 'primary',
    icon,
    loading,
    onClick,
    iconPlace
  }
) => {

  return (
    <>
      <Button
        className={`border rounded-extra ${fluid && "w-100"} ${className}`}
        variant={color}
        onClick={onClick}
        disabled={loading}

      >
        <div className="d-flex align-items-center justify-content-center px-3">
          {iconPlace ? icon : null }
          <span className="text-roboto-500 px-2">
            {text}
          </span>
          {iconPlace ? null : icon}

        </div>
      </Button>
    </>
  )
}

export default DefaultButton