import db from "./database/database.js";

// Inserir um registro no diário
export const inserirRegistroDiario = (idUsuario, humor, texto, callback) => {
  db.transaction(tx => {
    tx.executeSql(
      `INSERT INTO registrosDiario (idUsuario, humor, texto) VALUES (?, ?, ?);`,
      [idUsuario, humor, texto],
      (_, result) => callback(null, result),
      (_, error) => callback(error)
    );
  });
};

// Listar todos os registros do diário
export const listarRegistrosDiario = (callback) => {
  db.transaction(tx => {
    tx.executeSql(
      `SELECT * FROM registrosDiario;`,
      [],
      (_, { rows }) => callback(null, rows._array),
      (_, error) => callback(error)
    );
  });
};