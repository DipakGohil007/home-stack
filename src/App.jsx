import "./App.scss";
import React, { useEffect } from "react";
import AOS from "aos";
import AppRoute from "./Config/AppRoute";

const App = () => {
  useEffect(() => {
    AOS.init({
      duration: 1000,
    });
  }, []);

  return <AppRoute />;
};

export default App;
