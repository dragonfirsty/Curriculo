import { legacy_createStore as createStore, combineReducers } from "redux";

import reducerTecnologys from "./modules/tecnologys/reducers";

const reducers = combineReducers({  tecnologys: reducerTecnologys});

const store = createStore(reducers);

export default store;
