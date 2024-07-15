import MainNav from "./components/MainNav.jsx";
import SessionNotes from "./components/SessionNotes.jsx";
import PartyTabs from "./components/PartyTabs.jsx"


export default function App() {
  return (
    <>
      <MainNav 
        brand="RPG Campaign Tracker"
        rightLinks={[
          { url: '#', text: 'Session Notes' },
          { url: '#', text: 'Party Info' },
          { url: '#', text: 'Generators'},
          { url: '#', text: 'Login' },
        ]}
      />
      <SessionNotes />
      <PartyTabs />
    </>
  )
}

