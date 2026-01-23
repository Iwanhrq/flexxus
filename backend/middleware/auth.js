import jwt from 'jsonwebtoken';

// Middleware para verificar se o usuário está autenticado
export const autenticarUsuario = async (req, res, next) => {
  try {
    // Pegar token do header Authorization
    const authHeader = req.headers.authorization;

    if (!authHeader) {
      return res.status(401).json({
        success: false,
        message: 'Token não fornecido'
      });
    }

    // Token vem no formato: Bearer <token>
    const token = authHeader.split(' ')[1];

    if (!token) {
      return res.status(401).json({
        success: false,
        message: 'Token inválido'
      });
    }

    // Verificar e decodificar token
    const decoded = jwt.verify(token, process.env.JWT_SECRET);

    // Adicionar dados do usuário na requisição
    req.usuario = decoded;

    next();
  } catch (error) {
    console.error('Erro na autenticação:', error);
    
    if (error.name === 'JsonWebTokenError') {
      return res.status(401).json({
        success: false,
        message: 'Token inválido'
      });
    }

    if (error.name === 'TokenExpiredError') {
      return res.status(401).json({
        success: false,
        message: 'Token expirado'
      });
    }

    return res.status(500).json({
      success: false,
      message: 'Erro ao verificar autenticação'
    });
  }
};

// Middleware para verificar se o usuário é admin
export const verificarAdmin = (req, res, next) => {
  try {
    // O middleware autenticarUsuario deve ser executado antes
    if (!req.usuario) {
      return res.status(401).json({
        success: false,
        message: 'Usuário não autenticado'
      });
    }

    // Verificar se o tipo do usuário é admin
    if (req.usuario.tipo !== 'admin') {
      return res.status(403).json({
        success: false,
        message: 'Acesso negado. Apenas administradores podem acessar este recurso.'
      });
    }

    next();
  } catch (error) {
    console.error('Erro ao verificar permissão de admin:', error);
    return res.status(500).json({
      success: false,
      message: 'Erro ao verificar permissões'
    });
  }
};
