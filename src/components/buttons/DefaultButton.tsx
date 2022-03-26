import React from 'react'
import { Button } from 'react-bootstrap'

interface ButtonComponentProps {
  text: string,
  color?: string,
  icon?: React.ReactNode,
  loading?: boolean,
  onClick?: any
}

const DefaultButton = ({ text, color = 'primary', icon, loading, onClick }: ButtonComponentProps) => {

  return (
    <>
      <Button
        className="d-flex align-items-center border rounded-extra"
        variant={color}
        onClick={onClick}
        disabled={loading}
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
    </>
  )
}

export default DefaultButton