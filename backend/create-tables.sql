-- Script para criar as tabelas no banco de dados flexxus
-- Execute este script se o banco de dados já existe

-- Conectar ao banco de dados (execute antes: \c flexxus;)

-- Criação da tabela de produtos
CREATE TABLE IF NOT EXISTS produtos (
    id SERIAL PRIMARY KEY,
    nome VARCHAR(255) NOT NULL,
    descricao TEXT NOT NULL,
    preco DECIMAL(10, 2) NOT NULL,
    imagem VARCHAR(500),
    categoria VARCHAR(50) NOT NULL CHECK (categoria IN ('categorias', 'embalagens', 'materiais', 'tecnologia')),
    ativo BOOLEAN DEFAULT TRUE,
    criado_em TIMESTAMP DEFAULT CURRENT_TIMESTAMP
);

-- Criação da tabela de usuários admin
CREATE TABLE IF NOT EXISTS usuarios (
    id SERIAL PRIMARY KEY,
    email VARCHAR(255) UNIQUE NOT NULL,
    senha VARCHAR(255) NOT NULL,
    tipo VARCHAR(20) DEFAULT 'admin',
    criado_em TIMESTAMP DEFAULT CURRENT_TIMESTAMP
);

-- Inserir alguns produtos de exemplo (apenas se não existirem)
INSERT INTO produtos (nome, descricao, preco, imagem, categoria, ativo) 
SELECT * FROM (VALUES
    ('Categoria Premium', 'Solução completa para categorização de produtos', 1500.00, 'https://via.placeholder.com/300x200?text=Categoria', 'categorias', true),
    ('Sistema de Categorias', 'Sistema avançado de organização', 2000.00, 'https://via.placeholder.com/300x200?text=Sistema', 'categorias', true),
    ('Embalagem Sustentável', 'Embalagem 100% reciclável', 50.00, 'https://via.placeholder.com/300x200?text=Embalagem', 'embalagens', true),
    ('Caixa Premium', 'Caixas personalizadas de alta qualidade', 80.00, 'https://via.placeholder.com/300x200?text=Caixa', 'embalagens', true),
    ('Material Biodegradável', 'Material ecológico para embalagens', 120.00, 'https://via.placeholder.com/300x200?text=Material', 'materiais', true),
    ('Plástico Reciclado', 'Plástico 100% reciclado', 90.00, 'https://via.placeholder.com/300x200?text=Plastico', 'materiais', true),
    ('Software de Gestão', 'Sistema completo de gestão de produtos', 3500.00, 'https://via.placeholder.com/300x200?text=Software', 'tecnologia', true),
    ('IoT Sensor', 'Sensor inteligente para monitoramento', 800.00, 'https://via.placeholder.com/300x200?text=IoT', 'tecnologia', true)
) AS v(nome, descricao, preco, imagem, categoria, ativo)
WHERE NOT EXISTS (SELECT 1 FROM produtos WHERE produtos.nome = v.nome);

-- Índices para otimização
CREATE INDEX IF NOT EXISTS idx_produtos_categoria ON produtos(categoria);
CREATE INDEX IF NOT EXISTS idx_produtos_ativo ON produtos(ativo);
CREATE INDEX IF NOT EXISTS idx_produtos_categoria_ativo ON produtos(categoria, ativo);
