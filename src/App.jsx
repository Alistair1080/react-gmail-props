import { useState } from 'react'
import initialEmails from './data/emails'
import './styles/App.css'
import Header from './components/Header'
import LeftMenu from './components/LeftMenu'
import Emails from './components/Emails'



function App() {
  const [emails, setEmails] = useState(initialEmails)

  let filteredEmails = emails

  return (
    <div className="app">
      <Header></Header>
      <LeftMenu emails={emails} filteredEmails={filteredEmails}></LeftMenu>
      <Emails filteredEmails={filteredEmails} setEmails={setEmails}></Emails>
    </div>
  )
}

export default App
