import * as React from 'react';
import { StrictMode } from "react";
import { createRoot } from "react-dom/client";

import { Provider } from "react-redux";
import { store } from "./redux";

import App from "./App";

import './sdks/sentry'
// import './sdks/datadog'
// import './sdks/logrocket'

const rootElement = document.getElementById("root");
const root = createRoot(rootElement!);

root.render(
  <StrictMode>
    <Provider store={store}>
      <App />
    </Provider>
  </StrictMode>
);
