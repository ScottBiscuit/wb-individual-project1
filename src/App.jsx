import MainNav from "./components/MainNav.jsx";
import { Outlet } from "react-router-dom";


export default function App() {
  return (
    <>
      <MainNav 
        brand="RPG Campaign Tracker"
        // rightLinks={[
        //   { url: '#', text: 'Session Notes' },
        //   { url: '#', text: 'Party Info' },
        //   { url: '#', text: 'Generators'},
        //   { url: '#', text: 'Login' },
        // ]}
      />
      <Outlet />
    </>
  )
}


