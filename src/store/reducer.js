import { combineReducers } from "redux";

import customizationReducer from "./reducers/customizationReducer";
import appStateReducer from "./reducers/generalReducer";
import managerStateReducer from "./reducers/managerReducer";

const reducer = combineReducers({
  customization: customizationReducer,
  appState: appStateReducer,
  managerState: managerStateReducer
});

export default reducer;
