import { BrowserRouter as Router, Routes, Route } from 'react-router-dom'
import Layout from './components/Layout'
import Home from './pages/Home'
import About from './pages/About'
import Orders from './pages/Orders'
import Reservations from './pages/Reservations'
import './App.css'

function App() {
  return (
    <Router>
      <Layout>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/about" element={<About />} />
          <Route path="/orders" element={<Orders />} />
          <Route path="/reservations" element={<Reservations />} />
        </Routes>
      </Layout>
    </Router>
  )
}

export default App
