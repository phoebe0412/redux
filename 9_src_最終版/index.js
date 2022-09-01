import React from "react";
import ReactDOM from "react-dom/client"
import App from "./App"
import store from "./redux/store"
import {Provider} from 'react-redux'

const root = ReactDOM.createRoot(document.getElementById("root"))
root.render(
	<React.StrictMode>
		{/* 此處需要用Provider包裹App, 目的是讓App所有的後代容器組件都能接收到store */}
		<Provider store={store}>
			<App />
		</Provider>
	</React.StrictMode>
)

