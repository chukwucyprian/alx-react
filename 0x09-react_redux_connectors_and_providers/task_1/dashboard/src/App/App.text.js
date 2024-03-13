import { shallow } from "enzyme";
import React from "react";
import { Provider } from "react-redux";
import { configureStore } from "@reduxjs/toolkit";
import uiReducer from "../reducers/uiReducer"; // Make sure this import is correct

import App, { mapStateToProps } from "./App";

describe("<App />", () => {
  let store;
  beforeEach(() => {
    store = configureStore({
      reducer: uiReducer,
    });
  });

  it("mapStateToProps returns the right object from user Login", () => {
    let state = {
      isUserLoggedIn: true,
    };

    const result = mapStateToProps(state);

    expect(result).toEqual({ isLoggedIn: true });
  });

  it("mapStateToProps returns the right object from display Drawer", () => {
    let state = {
      isNotificationDrawerVisible: true,
    };

    const result = mapStateToProps(state);

    expect(result).toEqual({ displayDrawer: true });
  });

  // Test the connected component with shallow rendering
  it("renders without crashing", () => {
    const wrapper = shallow(
      <Provider store={store}>
        <App />
      </Provider>
    );
    expect(wrapper.exists()).toBe(true);
  });
});
