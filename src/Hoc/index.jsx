import React from "react";
import Erro from "../components/Erro";

function HOC(WrappedComponent) {
  function wrapper(props) {
    if (typeof props.rickandmortyData === "object") {
      return <WrappedComponent {...props} />;
    } else {
      return <Erro />;
    }
  }
  return wrapper;
}

export default HOC;
