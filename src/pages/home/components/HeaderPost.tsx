import React from 'react'

interface HeaderPostProps {
    title: string,
}

const HeaderPost: React.FunctionComponent<HeaderPostProps> = (
    {
        title,
    }
) => {
    return (
        <>
            <div className="mb-3 p-2">
                <div className="bg-primary text-white rounded-extra p-3">
                    <span
                        style={{ lineHeight: "0" }}
                        className="text-roboto-500 fs-5"
                    >
                        {title}
                    </span>
                </div>
            </div>
        </>
    )
}

export default HeaderPost