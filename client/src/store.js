import { createStore, applyMiddleware } from "redux";
import { composeWithDevTools } from "redux-devtools-extension";
import thunk from "redux-thunk";
import rootReducer from "./reducers";

const logMiddleware = () => next => action => {
    console.log(action.type);
    return next(action);
};

const stringMiddleware = () => next => action => {
    if (typeof action === "string")
        return next({
            type: action
        });

    return next(action);
};

const middleware = [thunk, stringMiddleware,logMiddleware];

const store = createStore(
    rootReducer,
    composeWithDevTools(applyMiddleware(...middleware))
);

export default store;