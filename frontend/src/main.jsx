import React from 'react'
import ReactDOM from 'react-dom/client'
import {
  createBrowserRouter,
  createRoutesFromElements,
  Route,
  RouterProvider
} from 'react-router-dom'
import "bootstrap/dist/css/bootstrap.min.css";
import './assets/styles/index.css';
import './assets/styles/bootstrap.custom.css';
import App from './App.jsx'
import './index.css'
import HomeScreen from './screens/HomeScreen';

const router=createBrowserRouter(
  createRoutesFromElements(
      <Route path="/" element={<App />}>
      <Route path="/"  element={<HomeScreen />} />
      </Route>
  )
)

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <RouterProvider router={router} />
  </React.StrictMode>,
)
