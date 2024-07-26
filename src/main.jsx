import React from 'react';
import ReactDOM from 'react-dom/client';
import App from './App.jsx';
import './index.css';
import { Route, RouterProvider, createBrowserRouter, createRoutesFromElements } from 'react-router-dom'
import MainNav from './components/MainNav.jsx';
import PartyTabs from './pages/PartyTabs.jsx';
import SessionNotes from './pages/SessionNotes.jsx';
import LoginPage from './pages/LoginPage.jsx';
import Home from './pages/Home.jsx';
import 'bootstrap/dist/css/bootstrap.css';
import axios from 'axios';

const router = createBrowserRouter(
  createRoutesFromElements(
    <Route path='/' element={<App />}>
      <Route index element={<Home />} />
      <Route path='login' element={<LoginPage />} />
      <Route path='party' element={<PartyTabs />} loader={async () => {
        const res = await axios.get('/api/party')
        return {party: res.data}
      } }/>
      <Route path='sessionNotes' element={<SessionNotes />} loader={async () => {
        const res = await axios.get('/api/sessionNotes')
        return {sessionNotes: res.data}
      }}
      />
    </Route>
  )
)

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <RouterProvider router={router} />
  </React.StrictMode>,
)
