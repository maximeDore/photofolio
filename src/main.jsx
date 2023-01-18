import React from "react";
import ReactDOM from "react-dom/client";
import TagManager from "react-gtm-module";

import App from "./App";
import "./App.scss";

const tagManagerArgs = {
	gtmId: "GTM-PCMT8G2",
};

TagManager.initialize(tagManagerArgs);

ReactDOM.createRoot(document.getElementById("root")).render(
	<React.StrictMode>
		<App />
	</React.StrictMode>
);
