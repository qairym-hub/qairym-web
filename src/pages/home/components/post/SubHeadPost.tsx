import React from 'react'
import moment from 'moment'
import "moment/locale/ru"

interface SubHeadPostProps {
    username: string,
    date: string,
}

const SubHeadPost: React.FunctionComponent<SubHeadPostProps> = (
    {
        username,
        date
    }
) => {
    
    const getRelativeDate = (date: string) => {
        moment()
        return moment(date, "YYYY-MM-DD").fromNow()
    }
    return (
        <>
            <div className="p-4">
                    <div className="d-flex align-items-center">
                        <span
                            style={{ fontSize: "20px" }}
                            className="text-roboto-500"
                        >
                            {username}
                        </span>
                        <span
                            style={{ fontSize: "12px" }}
                            className="text-muted mx-1"
                        >
                            • {getRelativeDate(date)}
                        </span>
                    </div>
                    <div className="d-flex align-items-start">
                        <span
                            style={{ fontSize: "12px" }}
                            className="text-muted"
                        >
                            гум. помощь
                        </span>
                        <span
                            style={{ fontSize: "12px" }}
                            className="text-roboto-500 text-muted mx-1"
                        >
                            /
                        </span>
                        <span
                            style={{ fontSize: "12px" }}
                            className="text-muted"
                        >
                            сборы
                        </span>
                    </div>
                </div>
        </>
    )
}

export default SubHeadPost