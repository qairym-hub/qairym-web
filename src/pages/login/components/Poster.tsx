import React from 'react'

const Poster: React.FunctionComponent = () => {

    return (
        <>
            <div className="d-flex align-items-center w-100 h-100">
                <div className="mx-5">
                    <p
                        style={{ lineHeight: '1', fontSize: '5rem' }}
                        className="text-montserrat-800 text-white"
                    >
                        qairym<br />hub
                    </p>
                    <p className="text-roboto-500 text-white">
                        Стань частью нашего сообщества и<br />помогай нуждающимся!
                    </p>
                </div>
            </div>
        </>
    )
}

export default Poster