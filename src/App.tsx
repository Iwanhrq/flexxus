import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Header from './components/Header'
import Footer from './components/Footer'
import Home from './pages/Home'
import ContactPage from './components/ContactPage'
import WhatsAppButton from './components/WhatsAppButton'
import Produtos from './pages/Produtos'
import Segmentos from './pages/Segmentos'
import './App.css'

function App() {
  return (
    <Router>
      <Header />
      <main>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/contato" element={<ContactPage />} />
          <Route path="/institucional" element={<div style={{padding: '4rem 2rem', textAlign: 'center'}}><h1>Institucional</h1><p>Página em construção</p></div>} />
          <Route path="/segmentos" element={<Segmentos />} />
          <Route path="/produtos" element={<Produtos />} />
        </Routes>
      </main>
      <Footer />
      <WhatsAppButton />
    </Router>
  )
}

export default App
