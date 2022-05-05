import React from 'react'
import { FloatingLabel, Form } from 'react-bootstrap'
import * as Icon from 'react-bootstrap-icons'
import items from './SidebarData'

const SideBar = () => {
  return (
    <>
        <div className="border rounded-extra background-white px-2 py-2">
            {items.map((item) => {
                return (
                    <div
                        style={{ cursor: "pointer" }} 
                        className="d-flex p-3 clickable rounded-extra"
                    >
                        <div 
                            style={{ flex: "20%" }}
                            className="d-flex align-items-center justify-content-center"
                        >
                            {item.icon}
                        </div>
                        <div style={{ flex: "80%" }}>
                            <span className="text-roboto-500">
                                {item.text}
                            </span>
                        </div>
                    </div>
                )
            })}
        </div>
        <div className="border rounded-extra background-white px-2 py-2 my-3">
            <div
                style={{ cursor: "pointer" }} 
                className="d-flex p-3 clickable rounded-extra"
            >
                <div 
                    style={{ flex: "20%" }}
                    className="d-flex align-items-center justify-content-center"
                >
                    <Icon.EmojiDizzyFill size="20" />
                </div>
                <div style={{ flex: "80%" }}>
                    <span className="text-roboto-500">
                        Выйти
                    </span>
                </div>
            </div>
        </div>
    </>
  )
}

export default SideBar