import {combineReducers, createStore} from "redux";
import appReducer from "./reducer.ts";


let rootReducer = combineReducers({
	appReducer
})

type RootReducerType = typeof rootReducer;
export type AppStateType = ReturnType<RootReducerType>

export type InferActionsTypes<T> = T extends { [keys: string]: (...args: any[]) => infer U } ? U : never

const store = createStore(rootReducer)


export default store