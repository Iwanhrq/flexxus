import dotenv from 'dotenv';
import pg from 'pg';
import bcrypt from 'bcrypt';
import readline from 'readline';

dotenv.config();

const { Pool } = pg;

const pool = new Pool({
  host: process.env.DB_HOST,
  port: process.env.DB_PORT,
  user: process.env.DB_USER,
  password: process.env.DB_PASSWORD,
  database: process.env.DB_NAME,
});

const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout
});

function question(query) {
  return new Promise(resolve => rl.question(query, resolve));
}

async function createAdmin() {
  try {
    console.log('🔐 Criar Usuário Admin\n');

    const email = await question('Email do admin: ');
    const password = await question('Senha do admin: ');

    if (!email || !password) {
      console.log('❌ Email e senha são obrigatórios!');
      rl.close();
      process.exit(1);
    }

    // Verificar se já existe
    const checkResult = await pool.query(
      'SELECT * FROM usuarios WHERE email = $1',
      [email]
    );

    if (checkResult.rows.length > 0) {
      console.log('❌ Usuário com este email já existe!');
      rl.close();
      await pool.end();
      process.exit(1);
    }

    // Hash da senha
    const senhaHash = await bcrypt.hash(password, 10);

    // Criar admin
    const result = await pool.query(
      'INSERT INTO usuarios (email, senha, tipo) VALUES ($1, $2, $3) RETURNING id, email, tipo',
      [email, senhaHash, 'admin']
    );

    console.log('\n✅ Admin criado com sucesso!');
    console.log(`   ID: ${result.rows[0].id}`);
    console.log(`   Email: ${result.rows[0].email}`);
    console.log(`   Tipo: ${result.rows[0].tipo}\n`);

  } catch (error) {
    console.error('❌ Erro ao criar admin:', error.message);
  } finally {
    rl.close();
    await pool.end();
  }
}

createAdmin();
