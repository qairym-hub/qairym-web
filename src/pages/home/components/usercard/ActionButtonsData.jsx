import * as Icon from 'react-bootstrap-icons'

const icon_size = 25

export const buttons = [
    {
        icon: <Icon.SendFill size={icon_size} />,
        text: "create"
    },
    {
        icon: <Icon.CollectionFill size={icon_size} />,
        text: "search"
    },  
    {
        icon: <Icon.Stack size={icon_size} />,
        text: "history"
    },
    {
        icon: <Icon.TerminalFill size={icon_size} />,
        text: "item #4"
    },
    {
        icon: <Icon.GearFill size={icon_size} />,
        text: "settings"
    },
    {
        icon: <Icon.XCircleFill size={icon_size} />,
        text: "Exit",
        action: (props) => {
            return props.logout()
        }
    },
]