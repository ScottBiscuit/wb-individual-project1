import React from 'react';
import ReactDOM from 'react-dom/client';
import App from './App.jsx';
import './index.css';
import { Route, RouterProvider, createBrowserRouter, createRoutesFromElements } from 'react-router-dom'
import MainNav from './components/MainNav.jsx';
import PartyTabs from './components/PartyTabs.jsx';
import SessionNotes from './components/SessionNotes.jsx';
import Home from './components/Home.jsx';
import 'bootstrap/dist/css/bootstrap.css';
import axios from 'axios';

const router = createBrowserRouter(
  createRoutesFromElements(
    <Route path='/' element={<App />}>
      <Route index element={<Home />} />
      <Route path='/party' element={<PartyTabs />} loader={async () => {
        const res = await axios.get('/api/party')
        return {character: res.data}
      } }/>
      <Route path='/session_notes' element={<SessionNotes />} />
    </Route>
  )
)

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <RouterProvider router={router} />
  </React.StrictMode>,
)
