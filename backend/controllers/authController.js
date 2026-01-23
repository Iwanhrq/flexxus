import pool from '../config/database.js';
import bcrypt from 'bcrypt';
import jwt from 'jsonwebtoken';

// POST /auth/login - Login de usuário admin
export const login = async (req, res) => {
  try {
    const { email, password } = req.body;

    // Validação
    if (!email || !password) {
      return res.status(400).json({
        success: false,
        message: 'Email e senha são obrigatórios'
      });
    }

    // Buscar usuário no banco
    const result = await pool.query(
      'SELECT * FROM usuarios WHERE email = $1',
      [email]
    );

    if (result.rows.length === 0) {
      return res.status(401).json({
        success: false,
        message: 'Credenciais inválidas'
      });
    }

    const usuario = result.rows[0];

    // Verificar senha
    const senhaValida = await bcrypt.compare(password, usuario.senha);

    if (!senhaValida) {
      return res.status(401).json({
        success: false,
        message: 'Credenciais inválidas'
      });
    }

    // Gerar token JWT
    const token = jwt.sign(
      { id: usuario.id, email: usuario.email, tipo: usuario.tipo },
      process.env.JWT_SECRET,
      { expiresIn: '24h' }
    );

    res.json({
      success: true,
      message: 'Login realizado com sucesso',
      token,
      usuario: {
        id: usuario.id,
        email: usuario.email,
        tipo: usuario.tipo
      }
    });
  } catch (error) {
    console.error('Erro ao fazer login:', error);
    res.status(500).json({
      success: false,
      message: 'Erro ao fazer login'
    });
  }
};

// POST /auth/register - Registrar novo admin (apenas para setup inicial)
export const registrarAdmin = async (req, res) => {
  try {
    const { email, password } = req.body;

    // Validação
    if (!email || !password) {
      return res.status(400).json({
        success: false,
        message: 'Email e senha são obrigatórios'
      });
    }

    // Verificar se já existe admin
    const adminExiste = await pool.query(
      'SELECT * FROM usuarios WHERE email = $1',
      [email]
    );

    if (adminExiste.rows.length > 0) {
      return res.status(400).json({
        success: false,
        message: 'Usuário já existe'
      });
    }

    // Hash da senha
    const senhaHash = await bcrypt.hash(password, 10);

    // Criar admin
    const result = await pool.query(
      'INSERT INTO usuarios (email, senha, tipo) VALUES ($1, $2, $3) RETURNING id, email, tipo',
      [email, senhaHash, 'admin']
    );

    res.status(201).json({
      success: true,
      message: 'Admin registrado com sucesso',
      usuario: result.rows[0]
    });
  } catch (error) {
    console.error('Erro ao registrar admin:', error);
    res.status(500).json({
      success: false,
      message: 'Erro ao registrar admin'
    });
  }
};

// GET /auth/me - Verificar token e retornar dados do usuário
export const verificarToken = async (req, res) => {
  try {
    // O middleware de autenticação já validou o token e adicionou os dados em req.usuario
    res.json({
      success: true,
      usuario: req.usuario
    });
  } catch (error) {
    console.error('Erro ao verificar token:', error);
    res.status(500).json({
      success: false,
      message: 'Erro ao verificar token'
    });
  }
};
