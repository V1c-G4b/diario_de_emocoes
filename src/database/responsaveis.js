import db from "./database";

// Inserir um responsável
export const inserirUsuarioResponsavel = (idUsuario, senha, callback) => {
  db.transaction(tx => {
    tx.executeSql(
      `INSERT INTO usuariosResponsavel (idUsuario, senha) VALUES (?, ?);`,
      [idUsuario, senha],
      (_, result) => callback(null, result),
      (_, error) => callback(error)
    );
  });
};

// Listar todos os responsáveis
export const listarUsuariosResponsaveis = (callback) => {
  db.transaction(tx => {
    tx.executeSql(
      `SELECT * FROM usuariosResponsavel;`,
      [],
      (_, { rows }) => callback(null, rows._array),
      (_, error) => callback(error)
    );
  });
};