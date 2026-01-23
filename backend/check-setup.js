import dotenv from 'dotenv';
import pg from 'pg';

dotenv.config();

const { Pool } = pg;

console.log('🔍 Verificando configuração do backend...\n');

// Verificar variáveis de ambiente
console.log('1. Verificando variáveis de ambiente...');
const requiredEnvVars = ['DB_HOST', 'DB_PORT', 'DB_USER', 'DB_PASSWORD', 'DB_NAME', 'PORT', 'JWT_SECRET'];
const missingVars = requiredEnvVars.filter(varName => !process.env[varName]);

if (missingVars.length > 0) {
  console.log('❌ Variáveis de ambiente faltando:', missingVars.join(', '));
  console.log('   Edite o arquivo .env e configure todas as variáveis necessárias.\n');
} else {
  console.log('✅ Todas as variáveis de ambiente estão configuradas');
  console.log(`   DB_HOST: ${process.env.DB_HOST}`);
  console.log(`   DB_PORT: ${process.env.DB_PORT}`);
  console.log(`   DB_USER: ${process.env.DB_USER}`);
  console.log(`   DB_NAME: ${process.env.DB_NAME}`);
  console.log(`   PORT: ${process.env.PORT}\n`);
}

// Verificar conexão com banco de dados
console.log('2. Verificando conexão com banco de dados...');
const pool = new Pool({
  host: process.env.DB_HOST,
  port: process.env.DB_PORT,
  user: process.env.DB_USER,
  password: process.env.DB_PASSWORD,
  database: process.env.DB_NAME,
});

try {
  const result = await pool.query('SELECT NOW()');
  console.log('✅ Conexão com banco de dados estabelecida com sucesso');
  console.log(`   Hora do servidor: ${result.rows[0].now}\n`);
} catch (error) {
  console.log('❌ Erro ao conectar com banco de dados:');
  console.log(`   ${error.message}\n`);
  console.log('   Verifique:');
  console.log('   - Se o PostgreSQL está rodando');
  console.log('   - Se as credenciais no .env estão corretas');
  console.log('   - Se o banco de dados "flexxus" foi criado\n');
  process.exit(1);
}

// Verificar se as tabelas existem
console.log('3. Verificando tabelas do banco de dados...');
try {
  const tablesResult = await pool.query(`
    SELECT table_name 
    FROM information_schema.tables 
    WHERE table_schema = 'public' 
    AND table_type = 'BASE TABLE'
  `);
  
  const tables = tablesResult.rows.map(row => row.table_name);
  const requiredTables = ['produtos', 'usuarios'];
  const missingTables = requiredTables.filter(table => !tables.includes(table));
  
  if (missingTables.length > 0) {
    console.log('❌ Tabelas faltando:', missingTables.join(', '));
    console.log('   Execute o script database.sql para criar as tabelas\n');
  } else {
    console.log('✅ Todas as tabelas necessárias existem');
    console.log(`   Tabelas encontradas: ${tables.join(', ')}\n`);
  }
} catch (error) {
  console.log('❌ Erro ao verificar tabelas:', error.message);
}

// Verificar se existe pelo menos um admin
console.log('4. Verificando usuários admin...');
try {
  const usersResult = await pool.query('SELECT COUNT(*) as count FROM usuarios WHERE tipo = $1', ['admin']);
  const adminCount = parseInt(usersResult.rows[0].count);
  
  if (adminCount === 0) {
    console.log('⚠️  Nenhum usuário admin encontrado');
    console.log('   Crie um admin fazendo POST para /auth/register\n');
  } else {
    console.log(`✅ ${adminCount} usuário(s) admin encontrado(s)\n`);
  }
} catch (error) {
  console.log('❌ Erro ao verificar usuários:', error.message);
}

await pool.end();
console.log('✅ Verificação concluída!\n');
