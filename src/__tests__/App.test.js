import React from "react";
import { render, screen } from "@testing-library/react";
import App from "../components/App";
import { Provider } from "react-redux";
import { BrowserRouter } from "react-router-dom";
import { PersistGate } from 'redux-persist/integration/react';
import {store,persistor} from "../utils/store";


describe("App", () => {
  it("On load should render podcast list", () => {
    render(
        <BrowserRouter>
      <Provider store={store}>
      <PersistGate loading={null} persistor={persistor}>
        <App />
        </PersistGate>
      </Provider>
    </BrowserRouter>
    );

    expect(screen.findAllByText('Jumper')).toBeInTheDocument();
  });

 
});