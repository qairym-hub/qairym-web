import React from 'react'
import UserCard from './components/UserCard'

const HomePage: React.FunctionComponent = () => {
    return (
        <>
            <div className="d-flex justify-content-center mt-5">
                <div>
                    <UserCard
                        username='talgatulyzh'
                    />
                </div>
            </div>
        </>
    )
}

export default HomePage