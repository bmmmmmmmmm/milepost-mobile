import React, { useContext, useReducer, createContext } from "react";
import allReducers, {initState} from './reducers'
import middleware from "./middleware";

const myStore = createContext(
  {} as {
    state: any;
    dispatch: any;
  }
);

export const useMyStore = () => useContext(myStore);

const Provider = ({ children }: { children: React.ReactNode }) => {
  const [state, oriDispatch] = useReducer(allReducers, initState);
  // eslint-disable-next-line react-hooks/exhaustive-deps
  // const dispatch = middleware(oriDispatch, state)
  // console.log(dispatch);
  const dispatch = middleware(oriDispatch, state)
  return(
    <myStore.Provider value={{ state, dispatch }}>
      {children}
    </myStore.Provider>
  )
};

export default Provider;