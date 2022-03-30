import Link from 'next/link'
import React from 'react'

import { DefaultButton } from '../../../components'

const CreateAccount: React.FunctionComponent = () => {

  return (
    <>
        <div
        style={{ width: "350px" }}
        className="border rounded-extra p-4"
        >
            <span
                style={{}}
                className=""
            >
                Нет аккаунта?
            </span>
            <Link
                href={{}}
            >
                Создать аккаунт
            </Link>
        </div>
    </>
  )
}

export default CreateAccount