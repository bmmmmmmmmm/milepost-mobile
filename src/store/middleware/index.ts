const middleware = (dispatch: any, state: any) => (action: any) =>
  typeof action === "function" ? action(dispatch,state) : dispatch(action);
export default middleware;
