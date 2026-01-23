import express from 'express';
import cors from 'cors';
import dotenv from 'dotenv';
import produtosRoutes from './routes/produtos.js';
import authRoutes from './routes/auth.js';

// Carregar variáveis de ambiente
dotenv.config();

// Criar aplicação Express
const app = express();
const PORT = process.env.PORT || 3000;

// Middlewares
app.use(cors()); // Permitir requisições de diferentes origens
app.use(express.json()); // Parser de JSON
app.use(express.urlencoded({ extended: true })); // Parser de URL encoded
app.use('/uploads', express.static('uploads')); // Servir arquivos estáticos (imagens)

// Middleware de log de requisições
app.use((req, res, next) => {
  console.log(`${new Date().toISOString()} - ${req.method} ${req.path}`);
  next();
});

// Rotas
app.get('/', (req, res) => {
  res.json({
    success: true,
    message: 'API Flexxus - Sistema de Produtos',
    version: '1.0.0',
    endpoints: {
      auth: '/auth',
      produtos: '/produtos'
    }
  });
});

app.use('/auth', authRoutes); // Rotas de autenticação
app.use('/produtos', produtosRoutes); // Rotas de produtos

// Middleware de erro 404
app.use((req, res) => {
  res.status(404).json({
    success: false,
    message: 'Rota não encontrada'
  });
});

// Middleware de tratamento de erros
app.use((err, req, res, next) => {
  console.error('Erro:', err);
  res.status(500).json({
    success: false,
    message: 'Erro interno do servidor',
    error: process.env.NODE_ENV === 'development' ? err.message : undefined
  });
});

// Iniciar servidor
app.listen(PORT, () => {
  console.log(`🚀 Servidor rodando na porta ${PORT}`);
  console.log(`📡 http://localhost:${PORT}`);
  console.log(`📝 Ambiente: ${process.env.NODE_ENV || 'development'}`);
});
