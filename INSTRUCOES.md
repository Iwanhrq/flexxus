# Sistema de Produtos Flexxus

Sistema completo de gerenciamento de produtos com área pública e administrativa.

## 🚀 Tecnologias Utilizadas

### Backend
- Node.js
- Express
- PostgreSQL
- JWT (autenticação)
- Bcrypt (hash de senhas)

### Frontend
- React 19
- TypeScript
- React Router DOM
- CSS3

## 📋 Pré-requisitos

- Node.js (versão 16 ou superior)
- PostgreSQL (versão 12 ou superior)
- npm ou yarn

## 🔧 Instalação e Configuração

### 1. Configurar o Banco de Dados PostgreSQL

#### Instalar PostgreSQL
- Baixe e instale o PostgreSQL em: https://www.postgresql.org/download/

#### Criar o banco de dados
Abra o terminal do PostgreSQL (psql) e execute:

```bash
# Conectar ao PostgreSQL
psql -U postgres

# Executar o script SQL fornecido
\i backend/database.sql
```

Ou execute manualmente os comandos do arquivo `backend/database.sql`.

### 2. Configurar o Backend

```bash
# Entrar na pasta do backend
cd backend

# Instalar dependências
npm install

# Criar arquivo .env (copiar do exemplo)
copy env.example .env

# Editar o arquivo .env com suas configurações
# DB_HOST=localhost
# DB_PORT=5432
# DB_USER=postgres
# DB_PASSWORD=sua_senha
# DB_NAME=flexxus
# PORT=3000
# JWT_SECRET=sua_chave_secreta_segura
```

### 3. Configurar o Frontend

```bash
# Voltar para a raiz do projeto
cd ..

# Instalar dependências do frontend
npm install
```

## ▶️ Executar o Projeto

### Iniciar o Backend

```bash
# Na pasta backend
cd backend
npm run dev
```

O servidor backend estará rodando em `http://localhost:3000`

### Iniciar o Frontend

```bash
# Na raiz do projeto (em outro terminal)
npm run dev
```

O frontend estará rodando em `http://localhost:5173`

## 👤 Criar Usuário Administrador

Após iniciar o backend, você precisa criar um usuário admin para acessar o painel administrativo.

### Opção 1: Via API (usando Postman, Insomnia ou curl)

```bash
POST http://localhost:3000/auth/register
Content-Type: application/json

{
  "email": "admin@flexxus.com",
  "password": "admin123"
}
```

### Opção 2: Via SQL direto no PostgreSQL

```sql
-- Conectar ao banco flexxus
\c flexxus

-- Inserir admin (senha: admin123)
INSERT INTO usuarios (email, senha, tipo) 
VALUES (
  'admin@flexxus.com', 
  '$2b$10$YourHashedPasswordHere',
  'admin'
);
```

**Nota:** Para gerar o hash da senha, você pode usar um site como https://bcrypt-generator.com/ com 10 rounds.

## 📱 Como Usar

### Área Pública (Produtos)

1. Acesse `http://localhost:5173/produtos`
2. Visualize todos os produtos ativos organizados por categoria:
   - Categorias
   - Embalagens
   - Materiais
   - Tecnologia

### Área Administrativa

1. Acesse `http://localhost:5173/login`
2. Faça login com as credenciais do admin
3. Você será redirecionado para `http://localhost:5173/admin/produtos`
4. No painel administrativo você pode:
   - ✅ Visualizar todos os produtos (ativos e inativos)
   - ➕ Criar novos produtos
   - ✏️ Editar produtos existentes
   - 🗑️ Desativar produtos (remoção lógica)
   - ♻️ Reativar produtos desativados

## 🗄️ Estrutura do Banco de Dados

### Tabela: produtos

| Campo       | Tipo         | Descrição                                          |
|-------------|--------------|---------------------------------------------------|
| id          | SERIAL       | ID único do produto (chave primária)              |
| nome        | VARCHAR(255) | Nome do produto                                   |
| descricao   | TEXT         | Descrição detalhada                               |
| preco       | DECIMAL      | Preço do produto                                  |
| imagem      | VARCHAR(500) | URL da imagem                                     |
| categoria   | VARCHAR(50)  | Categoria (categorias, embalagens, materiais, tecnologia) |
| ativo       | BOOLEAN      | Status do produto (true = ativo, false = inativo) |
| criado_em   | TIMESTAMP    | Data de criação                                   |

### Tabela: usuarios

| Campo       | Tipo         | Descrição                    |
|-------------|--------------|------------------------------|
| id          | SERIAL       | ID único do usuário          |
| email       | VARCHAR(255) | Email do admin               |
| senha       | VARCHAR(255) | Senha criptografada (bcrypt) |
| tipo        | VARCHAR(20)  | Tipo de usuário (admin)      |
| criado_em   | TIMESTAMP    | Data de criação              |

## 🔌 API Endpoints

### Autenticação

```
POST   /auth/login         - Login de usuário admin
POST   /auth/register      - Registrar novo admin
GET    /auth/me            - Verificar token (requer autenticação)
```

### Produtos (Público)

```
GET    /produtos           - Listar apenas produtos ativos
GET    /produtos/:id       - Buscar produto por ID
```

### Produtos (Admin - requer autenticação)

```
GET    /produtos/admin/todos     - Listar todos os produtos
POST   /produtos                 - Criar novo produto
PUT    /produtos/:id             - Atualizar produto
PUT    /produtos/:id/desativar   - Desativar produto
PUT    /produtos/:id/ativar      - Reativar produto
```

## 🔒 Autenticação

Todas as rotas administrativas exigem autenticação via JWT.

Para acessar rotas protegidas, inclua o token no header:

```
Authorization: Bearer seu_token_jwt_aqui
```

## 📁 Estrutura de Pastas

```
flexxus/
├── backend/                    # Backend Node.js
│   ├── config/                # Configurações
│   │   └── database.js        # Configuração do PostgreSQL
│   ├── controllers/           # Controladores (lógica de negócio)
│   │   ├── authController.js  # Autenticação
│   │   └── produtosController.js  # Produtos
│   ├── middleware/            # Middlewares
│   │   └── auth.js            # Middleware de autenticação
│   ├── routes/                # Rotas da API
│   │   ├── auth.js            # Rotas de autenticação
│   │   └── produtos.js        # Rotas de produtos
│   ├── uploads/               # Arquivos enviados
│   ├── database.sql           # Script SQL
│   ├── server.js              # Servidor Express
│   ├── package.json           # Dependências do backend
│   └── env.example            # Exemplo de variáveis de ambiente
├── src/                       # Frontend React
│   ├── components/            # Componentes reutilizáveis
│   ├── contexts/              # Context API
│   │   ├── AuthContext.tsx    # Contexto de autenticação
│   │   └── ThemeContext.tsx   # Contexto de tema
│   ├── pages/                 # Páginas
│   │   ├── AdminProdutos.tsx  # Painel administrativo
│   │   ├── AdminProdutos.css  # Estilos do admin
│   │   ├── Login.tsx          # Página de login
│   │   ├── Login.css          # Estilos do login
│   │   ├── Produtos.tsx       # Página pública de produtos
│   │   └── Produtos.css       # Estilos dos produtos
│   ├── App.tsx                # Componente principal
│   └── main.tsx               # Entry point
├── package.json               # Dependências do frontend
└── README.md                  # Esta documentação
```

## 🛡️ Segurança

- ✅ Senhas criptografadas com bcrypt
- ✅ Autenticação via JWT
- ✅ Validação de dados no backend
- ✅ CORS configurado
- ✅ Proteção contra SQL Injection (usando prepared statements)
- ✅ Remoção lógica de produtos (nunca deletar fisicamente)

## 🐛 Troubleshooting

### Erro de conexão com o banco de dados

- Verifique se o PostgreSQL está rodando
- Confirme as credenciais no arquivo `.env`
- Teste a conexão: `psql -U postgres -d flexxus`

### Erro CORS no frontend

- Certifique-se de que o backend está rodando
- Verifique se a URL da API está correta no frontend

### Token inválido ou expirado

- Faça logout e login novamente
- Verifique se o JWT_SECRET está configurado corretamente

## 📝 Licença

Este projeto foi desenvolvido para fins educacionais.

## 👥 Autor

Desenvolvido para o projeto Flexxus
