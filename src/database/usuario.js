import { db, collection, addDoc, getDocs, query, where } from "./firebaseConnection";

// Função para cadastrar usuário
export const cadastrarUsuario = async (userName, password, name, old) => {
  try {
    await addDoc(collection(db, "usuarios"), {
      userName,
      password,
      name,
      old
    });
    console.log(`Usuário ${name} cadastrado com sucesso!`);
  } catch (error) {
    console.error("Erro ao cadastrar usuário:", error);
  }
};

// Função para validar login
export const validarLogin = async (userName, password) => {
  try {
    const q = query(collection(db, "usuarios"), where("userName", "==", userName), where("password", "==", password));
    const querySnapshot = await getDocs(q);

    if (!querySnapshot.empty) {
      console.log("Login válido!");
      return true;
    } else {
      console.log("Usuário ou senha inválidos!");
      return false;
    }
  } catch (error) {
    console.error("Erro ao validar login:", error);
    return false;
  }
};

// Função para listar todos os usuários cadastrados
export const listarUsuarios = async () => {
  try {
    const querySnapshot = await getDocs(collection(db, "usuarios"));
    const usuarios = [];

    querySnapshot.forEach((doc) => {
      usuarios.push({ id: doc.id, ...doc.data() });
    });

    return usuarios;
  } catch (error) {
    console.error("Erro ao listar usuários:", error);
    return [];
  }
};
// Adiciona os usuários apenas se ainda não existirem
const adicionarUsuariosPadrao = async () => {
  await cadastrarUsuario("Lucca", "12345", "Lucca", 5);
  await cadastrarUsuario("Sophia", "123456", "Sophia", 7);
};

adicionarUsuariosPadrao();