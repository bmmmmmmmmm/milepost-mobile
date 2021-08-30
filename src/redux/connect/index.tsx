import React, { Component, useEffect, useState } from "react";
import { useMyStore } from "../store";

// 声明connect函数所传入参数的类型，这里指State,Dispatch都是函数
interface Props {
  mapStateToProps?: (state: any) => any;
  mapDispatchToProps?: (dispatch: void) => any;
}

function connect(props: Props) {
  const wrap = (WrappedComponent: React.FunctionComponent) => {
    const ConnectComponent = (comprops: any) => {
      const { state, dispatch } = useMyStore();
      let stateProps = props.mapStateToProps
        ? props.mapStateToProps(state)
        : {};
      let dispatchProps = props.mapDispatchToProps
        ? props.mapDispatchToProps(dispatch)
        : {};
      let allProps = { ...comprops };

      const updateProps = () => {
        stateProps = props.mapStateToProps ? props.mapStateToProps(state) : {};
        dispatchProps = props.mapDispatchToProps
          ? props.mapDispatchToProps(dispatch)
          : {};
        allProps = { ...allProps, ...stateProps, ...dispatchProps };
        console.log("updateProps");
      };

      // subscribe(()=>updateProps);
      updateProps();
      

      return <WrappedComponent {...allProps} />;
    };
    return ConnectComponent;
  };
  return wrap;
}

export default connect;
