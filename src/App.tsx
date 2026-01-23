import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Header from './components/Header'
import Footer from './components/Footer'
import Home from './pages/Home'
import ContactPage from './components/ContactPage'
import WhatsAppButton from './components/WhatsAppButton'
import Produtos from './pages/Produtos'
import Login from './pages/Login'
import AdminProdutos from './pages/AdminProdutos'
import { AuthProvider } from './contexts/AuthContext'
import './App.css'

function App() {
  return (
    <AuthProvider>
      <Router>
        <Header />
        <main>
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/contato" element={<ContactPage />} />
            <Route path="/institucional" element={<div style={{padding: '4rem 2rem', textAlign: 'center'}}><h1>Institucional</h1><p>Página em construção</p></div>} />
            <Route path="/segmentos" element={<div style={{padding: '4rem 2rem', textAlign: 'center'}}><h1>Segmentos</h1><p>Página em construção</p></div>} />
            <Route path="/produtos" element={<Produtos />} />
            <Route path="/login" element={<Login />} />
            <Route path="/admin/produtos" element={<AdminProdutos />} />
          </Routes>
        </main>
        <Footer />
        <WhatsAppButton />
      </Router>
    </AuthProvider>
  )
}

export default App
