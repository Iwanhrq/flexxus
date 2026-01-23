import express from 'express';
import { login, registrarAdmin, verificarToken } from '../controllers/authController.js';
import { autenticarUsuario } from '../middleware/auth.js';

const router = express.Router();

// Rotas de autenticação
router.post('/login', login); // Login
router.post('/register', registrarAdmin); // Registrar admin (apenas para setup inicial)
router.get('/me', autenticarUsuario, verificarToken); // Verificar token

export default router;
