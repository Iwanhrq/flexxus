import { useState } from 'react';
import './ContactPage.css';

function ContactPage() {
  const [formData, setFormData] = useState({
    nome: '',
    email: '',
    assunto: '',
    mensagem: ''
  });

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target;
    setFormData(prev => ({
      ...prev,
      [name]: value
    }));
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    // Aqui você pode adicionar a lógica de envio do formulário no futuro
    console.log('Formulário enviado:', formData);
    alert('Mensagem enviada com sucesso! (Funcionalidade de backend será implementada)');
    // Resetar formulário
    setFormData({
      nome: '',
      email: '',
      assunto: '',
      mensagem: ''
    });
  };

  return (
    <section id="contato" className="contact-page">
      <div className="contact-container">
        <div className="contact-header">
          <h1 className="contact-title">Entre em Contato</h1>
          <p className="contact-subtitle">
            Estamos prontos para atender você. Envie sua mensagem ou entre em contato através dos nossos canais.
          </p>
        </div>

        <div className="contact-content">
          {/* Informações de Contato */}
          <div className="contact-info">
            <h2 className="contact-info-title">Informações de Contato</h2>
            
            <div className="contact-info-item">
              <div className="contact-icon-wrapper">
                <svg className="contact-icon" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                  <path d="M21 10c0 7-9 13-9 13s-9-6-9-13a9 9 0 0 1 18 0z"/>
                  <circle cx="12" cy="10" r="3"/>
                </svg>
              </div>
              <div className="contact-info-content">
                <p>Rua Exemplo, 123 - Centro<br />Monte Mor - SP, 13190-000</p>
              </div>
            </div>

            <div className="contact-info-item">
              <div className="contact-icon-wrapper">
                <svg className="contact-icon" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                  <path d="M4 4h16c1.1 0 2 .9 2 2v12c0 1.1-.9 2-2 2H4c-1.1 0-2-.9-2-2V6c0-1.1.9-2 2-2z"/>
                  <polyline points="22,6 12,13 2,6"/>
                </svg>
              </div>
              <div className="contact-info-content">
                <a href="mailto:contato@flexxus.com.br">contato@flexxus.com.br</a>
              </div>
            </div>

            <div className="contact-info-item">
              <div className="contact-icon-wrapper">
                <svg className="contact-icon" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                  <path d="M22 16.92v3a2 2 0 0 1-2.18 2 19.79 19.79 0 0 1-8.63-3.07 19.5 19.5 0 0 1-6-6 19.79 19.79 0 0 1-3.07-8.67A2 2 0 0 1 4.11 2h3a2 2 0 0 1 2 1.72 12.84 12.84 0 0 0 .7 2.81 2 2 0 0 1-.45 2.11L8.09 9.91a16 16 0 0 0 6 6l1.27-1.27a2 2 0 0 1 2.11-.45 12.84 12.84 0 0 0 2.81.7A2 2 0 0 1 22 16.92z"/>
                </svg>
              </div>
              <div className="contact-info-content">
                <a href="tel:+5519123456789">(19) 1234-5678</a>
              </div>
            </div>

            {/* Mapa */}
            <div className="contact-map">
              <h2 className="contact-map-title">Nossa Localização</h2>
              <div className="map-container">
                <iframe
                  src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3673.998652579651!2d-47.29723432380533!3d-22.950276739428546!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x94c8a53db80622a3%3A0x982d9fe25ed0a9a5!2sFlexxus%20Ind%C3%BAstria%20e%20Com%C3%A9rcio%20de%20Adesivos%20Ltda%20Epp!5e0!3m2!1spt-BR!2sbr!4v1769127520427!5m2!1spt-BR!2sbr"
                  width="100%"
                  height="400"
                  style={{ border: 0 }}
                  allowFullScreen
                  loading="lazy"
                  referrerPolicy="no-referrer-when-downgrade"
                  title="Localização da Flexxus"
                ></iframe>
              </div>
            </div>
          </div>

          {/* Formulário de Contato */}
          <div className="contact-form-wrapper">
            <h2 className="contact-form-title">Envie sua Mensagem</h2>
            <form className="contact-form" onSubmit={handleSubmit}>
              <div className="form-group">
                <label htmlFor="nome">Nome *</label>
                <input
                  type="text"
                  id="nome"
                  name="nome"
                  value={formData.nome}
                  onChange={handleChange}
                  required
                  placeholder="Seu nome completo"
                />
              </div>

              <div className="form-group">
                <label htmlFor="email">Email *</label>
                <input
                  type="email"
                  id="email"
                  name="email"
                  value={formData.email}
                  onChange={handleChange}
                  required
                  placeholder="seu@email.com"
                />
              </div>

              <div className="form-group">
                <label htmlFor="assunto">Assunto *</label>
                <input
                  type="text"
                  id="assunto"
                  name="assunto"
                  value={formData.assunto}
                  onChange={handleChange}
                  required
                  placeholder="Assunto da mensagem"
                />
              </div>

              <div className="form-group">
                <label htmlFor="mensagem">Mensagem *</label>
                <textarea
                  id="mensagem"
                  name="mensagem"
                  value={formData.mensagem}
                  onChange={handleChange}
                  required
                  rows={6}
                  placeholder="Escreva sua mensagem aqui..."
                />
              </div>

              <button type="submit" className="contact-submit-button">
                Enviar Mensagem
              </button>
            </form>
          </div>
        </div>
      </div>
    </section>
  );
}

export default ContactPage;
