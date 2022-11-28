import { useReducer } from "react";
import { loginReducer, loginReducerInitialState } from "../reducers";

export function useLoginReducer() {
    const [state, dispatch] = useReducer(loginReducer, loginReducerInitialState);
    return [state, dispatch];
}
