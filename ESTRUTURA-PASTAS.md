# 📁 Estrutura de Pastas - Sistema de Produtos Flexxus

```
flexxus/
│
├── 📂 backend/                          # Servidor Node.js
│   ├── 📂 config/                       # Configurações
│   │   └── database.js                  # Conexão PostgreSQL
│   │
│   ├── 📂 controllers/                  # Controladores (Lógica de Negócio)
│   │   ├── authController.js            # Login, registro, verificação
│   │   └── produtosController.js        # CRUD de produtos
│   │
│   ├── 📂 middleware/                   # Middlewares
│   │   └── auth.js                      # Autenticação JWT e verificação admin
│   │
│   ├── 📂 routes/                       # Rotas da API
│   │   ├── auth.js                      # Rotas de autenticação
│   │   └── produtos.js                  # Rotas de produtos
│   │
│   ├── 📂 uploads/                      # Arquivos enviados (imagens)
│   │   └── .gitkeep                     # Manter pasta no git
│   │
│   ├── .gitignore                       # Ignorar node_modules, .env, etc
│   ├── database.sql                     # Script SQL (tabelas, índices, exemplos)
│   ├── env.example                      # Exemplo de variáveis de ambiente
│   ├── package.json                     # Dependências do backend
│   └── server.js                        # Servidor Express principal
│
├── 📂 public/                           # Arquivos públicos (favicon, etc)
│
├── 📂 src/                              # Código-fonte React
│   ├── 📂 assets/                       # Imagens, ícones, etc
│   │   └── logo-flexxus.png             # Logo do projeto
│   │
│   ├── 📂 components/                   # Componentes reutilizáveis
│   │   ├── ContactPage.tsx              # Página de contato
│   │   ├── Footer.tsx                   # Rodapé
│   │   ├── Header.tsx                   # Cabeçalho
│   │   └── WhatsAppButton.tsx           # Botão WhatsApp
│   │
│   ├── 📂 contexts/                     # Context API
│   │   ├── AuthContext.tsx              # Contexto de autenticação (login, logout)
│   │   └── ThemeContext.tsx             # Contexto de tema
│   │
│   ├── 📂 pages/                        # Páginas da aplicação
│   │   ├── AdminProdutos.tsx            # Painel administrativo de produtos
│   │   ├── AdminProdutos.css            # Estilos do painel admin
│   │   ├── Home.tsx                     # Página inicial
│   │   ├── Login.tsx                    # Página de login
│   │   ├── Login.css                    # Estilos do login
│   │   ├── Produtos.tsx                 # Página pública de produtos
│   │   └── Produtos.css                 # Estilos da página de produtos
│   │
│   ├── App.css                          # Estilos globais do App
│   ├── App.tsx                          # Componente principal (rotas)
│   ├── index.css                        # Estilos globais
│   └── main.tsx                         # Entry point do React
│
├── 📄 .gitignore                        # Arquivos ignorados pelo git
├── 📄 CHECKLIST.md                      # ✅ Checklist de verificação
├── 📄 EXEMPLOS-API.md                   # 🧪 Exemplos de requisições
├── 📄 INICIO-RAPIDO.md                  # ⚡ Guia de início rápido
├── 📄 INSTRUCOES.md                     # 📚 Documentação completa
├── 📄 RESUMO-SISTEMA.md                 # 📦 Resumo do que foi criado
├── 📄 eslint.config.js                  # Configuração ESLint
├── 📄 index.html                        # HTML principal
├── 📄 package.json                      # Dependências do frontend
├── 📄 package-lock.json                 # Lock das dependências
├── 📄 README.md                         # README original do projeto
├── 📄 tsconfig.json                     # Configuração TypeScript
├── 📄 tsconfig.app.json                 # Config TS para app
├── 📄 tsconfig.node.json                # Config TS para Node
└── 📄 vite.config.ts                    # Configuração Vite
```

---

## 📋 Descrição Detalhada

### 🔧 Backend (Node.js + Express)

#### `/backend/config/`
Configurações centralizadas do sistema.
- `database.js`: Pool de conexões PostgreSQL com variáveis de ambiente

#### `/backend/controllers/`
Lógica de negócio separada das rotas.
- `authController.js`: Login, registro de admin, verificação de token
- `produtosController.js`: CRUD completo de produtos (criar, listar, atualizar, desativar, reativar)

#### `/backend/middleware/`
Funções intermediárias que processam requisições.
- `auth.js`: Verificação de JWT e permissão de admin

#### `/backend/routes/`
Definição de rotas da API.
- `auth.js`: POST /login, POST /register, GET /me
- `produtos.js`: GET, POST, PUT (público e admin)

#### `/backend/uploads/`
Pasta para armazenar imagens enviadas pelos usuários.

---

### 🎨 Frontend (React + TypeScript)

#### `/src/assets/`
Recursos estáticos (imagens, fontes, ícones).

#### `/src/components/`
Componentes reutilizáveis da interface.
- `Header.tsx`: Cabeçalho com navegação
- `Footer.tsx`: Rodapé
- `ContactPage.tsx`: Formulário de contato
- `WhatsAppButton.tsx`: Botão flutuante do WhatsApp

#### `/src/contexts/`
Gerenciamento de estado global com Context API.
- `AuthContext.tsx`: Estado de autenticação (usuário, token, login, logout)
- `ThemeContext.tsx`: Tema claro/escuro

#### `/src/pages/`
Páginas principais da aplicação.

**Páginas Públicas:**
- `Home.tsx`: Página inicial
- `Produtos.tsx`: Listagem pública de produtos por categoria

**Páginas Administrativas:**
- `Login.tsx`: Formulário de login
- `AdminProdutos.tsx`: Painel completo de gerenciamento (CRUD)

---

## 🗂️ Arquivos de Configuração

### Backend
- `package.json`: Dependências (express, pg, bcrypt, jwt, cors, dotenv, multer)
- `.env`: Variáveis de ambiente (DB, JWT_SECRET, PORT)
- `database.sql`: Script de criação do banco

### Frontend
- `package.json`: Dependências (react, react-router-dom, typescript)
- `vite.config.ts`: Configuração do Vite
- `tsconfig.json`: Configuração TypeScript
- `eslint.config.js`: Regras de linting

---

## 📝 Arquivos de Documentação

- `INSTRUCOES.md`: Guia completo de instalação e configuração
- `INICIO-RAPIDO.md`: Passos rápidos para executar
- `RESUMO-SISTEMA.md`: Visão geral do que foi criado
- `EXEMPLOS-API.md`: Exemplos de requisições HTTP
- `CHECKLIST.md`: Lista de verificação passo a passo
- `ESTRUTURA-PASTAS.md`: Este arquivo (estrutura visual)

---

## 🎯 Fluxo de Dados

```
┌─────────────────┐
│   PostgreSQL    │ ← Banco de dados
└────────┬────────┘
         │
         ↓
┌─────────────────┐
│ Backend (API)   │ ← Node.js + Express
│  Port: 3000     │
└────────┬────────┘
         │
         ↓ (HTTP/JSON)
         │
┌─────────────────┐
│ Frontend (UI)   │ ← React + TypeScript
│  Port: 5173     │
└─────────────────┘
```

---

## 🔐 Fluxo de Autenticação

```
1. Usuário faz login
   ↓
2. Backend valida credenciais
   ↓
3. Backend gera JWT
   ↓
4. Frontend armazena token (localStorage)
   ↓
5. Frontend envia token em requisições protegidas
   ↓
6. Backend valida token via middleware
   ↓
7. Backend permite/nega acesso
```

---

## 📦 Fluxo de Produtos

### Página Pública (/produtos)
```
1. Usuário acessa /produtos
   ↓
2. React chama GET /produtos
   ↓
3. Backend retorna apenas produtos ativos
   ↓
4. Frontend organiza por categoria
   ↓
5. Renderiza cards de produtos
```

### Painel Admin (/admin/produtos)
```
1. Admin faz login
   ↓
2. Acessa /admin/produtos
   ↓
3. React verifica autenticação
   ↓
4. Chama GET /produtos/admin/todos (com token)
   ↓
5. Backend valida token + permissão
   ↓
6. Retorna TODOS produtos (ativos + inativos)
   ↓
7. Admin pode criar/editar/desativar/reativar
```

---

## 💾 Banco de Dados

### Tabelas

```
produtos
├── id (PK)
├── nome
├── descricao
├── preco
├── imagem
├── categoria
├── ativo
└── criado_em

usuarios
├── id (PK)
├── email (unique)
├── senha (hash)
├── tipo
└── criado_em
```

---

## 🎨 Arquitetura (MVC Pattern)

```
┌──────────────────────────────────────────┐
│              FRONTEND (View)             │
│  React Components → Pages → Contexts    │
└──────────────────┬───────────────────────┘
                   │ HTTP/JSON
                   ↓
┌──────────────────────────────────────────┐
│            BACKEND (Controller)          │
│  Routes → Middleware → Controllers       │
└──────────────────┬───────────────────────┘
                   │ SQL
                   ↓
┌──────────────────────────────────────────┐
│             DATABASE (Model)             │
│        PostgreSQL (produtos, usuarios)   │
└──────────────────────────────────────────┘
```

---

**📌 Nota:** Esta estrutura segue as melhores práticas de:
- ✅ Separação de responsabilidades
- ✅ Modularização
- ✅ Escalabilidade
- ✅ Manutenibilidade
- ✅ Segurança
