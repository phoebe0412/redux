import React from "react";
import ReactDOM from "react-dom/client"
import App from "./App"
import store from "./redux/store"

const root = ReactDOM.createRoot(document.getElementById("root"))
root.render(
	<React.StrictMode>
		<App />
	</React.StrictMode>
)

// 監測redux中狀態的改變, 如redux的狀態發生了改變, 那麼重新渲染App組件
store.subscribe(()=>{
	root.render(
		<React.StrictMode>
			<App />
		</React.StrictMode>
	)
})