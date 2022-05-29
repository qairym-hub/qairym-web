import * as Icon from "react-bootstrap-icons";

const icon_size = 25;

export const buttons = [
  {
    icon: <Icon.PlusLg size={icon_size} />,
    text: "create",
    action: (props) => {
      return props.toggleModal(props.show);
    },
  },
  {
    icon: <Icon.Search size={icon_size} />,
    text: "search",
  },
  {
    icon: <Icon.Stack size={icon_size} />,
    text: "posts",
  },
  {
    icon: <Icon.HeartFill size={icon_size} />,
    text: "favourites",
  },
  {
    icon: <Icon.GearFill size={icon_size} />,
    text: "settings",
  },
  {
    icon: <Icon.XCircleFill size={icon_size} />,
    text: "Exit",
    action: (props) => {
      return props.logout();
    },
  },
];
