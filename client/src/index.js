import React from "react";
import ReactDOM from "react-dom";
import App from "./App";
import * as serviceWorker from "./serviceWorker";

ReactDOM.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>,
  document.getElementById("root")
);

serviceWorker.unregister();
// By default, the create-react-app setup includes this line to make sure no service workers are running unless you explicitly decide to register one.
// If you want to enable the service worker for offline capabilities and faster load times, you should replace serviceWorker.unregister() with serviceWorker.register(). This change will register the service worker