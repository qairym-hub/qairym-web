import React from 'react'
import { Button, Spinner } from 'react-bootstrap'

interface ButtonComponentProps {
  className?: string,
  text: string,
  fluid?: boolean,
  color?: string,
  icon?: React.ReactNode,
  loading?: boolean,
  onClick?: any
}

const DefaultButton: React.FunctionComponent<ButtonComponentProps> = (
  {
    className,
    fluid,
    text,
    color = 'primary',
    icon,
    loading,
    onClick
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
        {loading ? (
          <div className="d-flex align-items-center justify-content-center px-3">
            <Spinner
              animation="border"
              size="sm"
              role="status"
            />
            <span className="text-roboto-500 px-2">
              Выполняем вход...
            </span>
          </div>
        ) : (
          <div className="d-flex align-items-center justify-content-center px-3">
            {icon}
            <span className="text-roboto-500 px-2">
              {text}
            </span>
          </div>
        )}
      </Button>
    </>
  )
}

export default DefaultButton