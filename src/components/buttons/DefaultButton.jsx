import React from 'react'
import { Button, Spinner } from 'react-bootstrap'

const DefaultButton = (
  {
    className,
    fluid,
    text,
    color = 'primary',
    icon,
    loading,
    onClick,
    iconLeft
  }
) => {

  return (
    <>
      <Button
        className={`border rounded-extra ${fluid && "w-100"} ${className}`}
        variant={color}
        onClick={onClick}
        disabled={loading}
        size="lg"

      >
        {
          loading ? (
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
              {iconLeft && icon}
              <span className="text-roboto-500 px-2">
                {text}
              </span>
              {iconLeft ? null : icon}
            </div>
          )
        }
      </Button >
    </>
  )
}

export default DefaultButton