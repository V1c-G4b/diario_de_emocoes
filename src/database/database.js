import * as SQLite from 'expo-sqlite';

const db = SQLite.openDatabase('meudiario.db');

export const criarTabela = () => {
  db.transaction(tx => {
    // Criar tabela de usuários
    tx.executeSql(
      `CREATE TABLE IF NOT EXISTS usuarios (
        id INTEGER PRIMARY KEY AUTOINCREMENT,
        userName TEXT NOT NULL UNIQUE,
        password TEXT NOT NULL,
        name TEXT NOT NULL,
        old INTEGER
      );`,
      [],
      () => console.log('Tabela usuarios criada'),
      (_, error) => console.log("Erro ao criar usuarios:", error)
    );

    // Criar tabela de responsáveis
    tx.executeSql(
      `CREATE TABLE IF NOT EXISTS usuariosResponsavel (
        id INTEGER PRIMARY KEY AUTOINCREMENT,
        idUsuario INTEGER NOT NULL,
        senha TEXT NOT NULL,
        FOREIGN KEY (idUsuario) REFERENCES usuarios(id) ON DELETE CASCADE
      );`,
      [],
      () => console.log('Tabela usuariosResponsavel criada'),
      (_, error) => console.log("Erro ao criar usuariosResponsavel:", error)
    );

    // Criar tabela de registros do diário
    tx.executeSql(
      `CREATE TABLE IF NOT EXISTS registrosDiario (
        id INTEGER PRIMARY KEY AUTOINCREMENT,
        idUsuario INTEGER NOT NULL,
        humor INTEGER,
        texto TEXT NOT NULL,
        FOREIGN KEY (idUsuario) REFERENCES usuarios(id) ON DELETE CASCADE
      );`,
      [],
      () => console.log('Tabela registrosDiario criada'),
      (_, error) => console.log("Erro ao criar registrosDiario:", error)
    );
  });
};

// Função para inserir os usuários padrão (Lucca e Sophia)
const inserirUsuariosPadrao = () => {
  const usuarios = [
    { userName: "Lucca", password: "1234", name: "Lucca", old: 5 },
    { userName: "Sophia", password: "123456", name: "Sophia", old: 7 }
  ];

  usuarios.forEach(usuario => {
    db.transaction(tx => {
      // Usando INSERT OR IGNORE para evitar inserções duplicadas
      tx.executeSql(
        `INSERT OR IGNORE INTO usuarios (userName, password, name, old) 
         VALUES (?, ?, ?, ?);`,
        [usuario.userName, usuario.password, usuario.name, usuario.old],
        (_, result) => {
          if (result.rowsAffected > 0) {
            console.log(`Usuário ${usuario.name} inserido com sucesso!`);
          } else {
            console.log(`Usuário ${usuario.name} já existe no banco.`);
          }
        },
        (_, error) => console.log(`Erro ao inserir usuário ${usuario.name}:`, error)
      );
    });
  });
};

export default db;