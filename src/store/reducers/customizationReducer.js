import config from "../../Pages/ManagerView/config";

const actionTypes = {
  SET_MENU: "@customization/SET_MENU",
  MENU_TOGGLE: "@customization/MENU_TOGGLE",
  SET_FONT_FAMILY: "@customization/SET_FONT_FAMILY",
  MENU_OPEN: "@customization/MENU_OPEN",
  SET_BORDER_RADIUS: "@customization/SET_BORDER_RADIUS"
};

export const initialState = {
  isOpen: [], // for active default menu
  fontFamily: config.fontFamily,
  borderRadius: config.borderRadius,
  opened: true
};

// eslint-disable-next-line default-param-last
const customizationReducer = (state = initialState, action) => {
  let id;
  switch (action.type) {
    case actionTypes.MENU_OPEN:
      id = action.id;
      return {
        ...state,
        isOpen: [id]
      };
    case actionTypes.SET_MENU:
      return {
        ...state,
        opened: action.opened
      };
    case actionTypes.SET_FONT_FAMILY:
      return {
        ...state,
        fontFamily: action.fontFamily
      };
    case actionTypes.SET_BORDER_RADIUS:
      return {
        ...state,
        borderRadius: action.borderRadius
      };
    default:
      return state;
  }
};

export default customizationReducer;
