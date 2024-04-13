import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App.jsx";
import { store } from "./store";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import "./index.css";
import MainLayouts from "./Components/MainLayouts.jsx";
import { Provider } from "react-redux";
import User from "./Components/User.jsx";
import EditUser from "./Components/EditUser.jsx";
import AddNewUser from "./Components/AddNewUser.jsx";
const router = createBrowserRouter([
  {
    path: "/",
    element: (
      <MainLayouts>
        <App />
      </MainLayouts>
    ),
    children: [{}],
  },
  {
    path: "users/:userId",
    element: (
      <MainLayouts>
        <User />
      </MainLayouts>
    ),
  },
  {
    path:"/add",
    element:(
      <MainLayouts>
        <AddNewUser/>
      </MainLayouts>
    )
  },
  {
    path:"/edit/users/:userId",
    element:(
      <MainLayouts><EditUser/></MainLayouts>
    )
  }
]);
ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <Provider store={store}>
      <RouterProvider router={router}>
        <App />
      </RouterProvider>
    </Provider>
  </React.StrictMode>
);
