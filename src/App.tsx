import './App.css'
import { Menu } from './components/Menu'
import { HomePage } from './components/HomePage'
import { DriftPage } from './components/DriftPage'
import { TimeAttackPage } from './components/TimeAttackPage'
import { ForzaPage } from './components/ForzaPage'
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom'

function App() {
  return (
    <Router>
      <div>
        <Menu />
        <div className="page">
          <Routes>
            <Route path="/" element={<HomePage />} />
            <Route path="/drift" element={<DriftPage />} />
            <Route path="/timeattack" element={<TimeAttackPage />} />
            <Route path="/forza" element={<ForzaPage />} />
          </Routes>
        </div>
      </div>
    </Router>
  )
}

export default App
