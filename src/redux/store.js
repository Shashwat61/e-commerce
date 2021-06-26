import { applyMiddleware, combineReducers, createStore } from "redux";
import { composeWithDevTools } from "redux-devtools-extension";
import thunk from "redux-thunk";
import { productReducer } from "./reducers/products.reducer";

const rootReducer=combineReducers({
    product:productReducer,
})

const store=createStore(rootReducer,{},composeWithDevTools(applyMiddleware(thunk)))

export default store