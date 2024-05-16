import { HashRouter as Router, Routes, Route } from 'react-router-dom'
import { Home } from './pages/home.jsx'
import { ThingsToRead } from './pages/thingsToRead.jsx'
import {Interests} from './pages/interests.jsx'
import { Layout } from './Layout.jsx'
import { Navbar } from './components/NavBar.jsx'
import ListGroup from './components/ListGroup.jsx'


function App() {
  return (
    <div className='container'>
      

      <Router>
        <Routes>
          <Route element={<Layout />}>
            <Route path="/" element={<Home />} />
            <Route path="/things_to_read" element={<ThingsToRead />} />
            <Route path="/interests" element={<Interests/>}/>
          </Route>
        </Routes>
      </Router>
      

    </div>
  )
}

export default App
