# 📌 To-Do List API  

## 📝 Sobre o Projeto  

O **To-Do List API** é uma aplicação backend desenvolvida com **Node.js** e **Express** para gerenciar tarefas. Os dados são armazenados de forma persistente no **MongoDB Atlas**, permitindo operações **CRUD** (Criar, Ler, Atualizar e Deletar) de maneira eficiente.  

## 🚀 Tecnologias Utilizadas  

- **Node.js** 🟩  
- **Express.js** ⚡  
- **MongoDB Atlas** 🍃 (banco de dados na nuvem)  
- **Mongoose** 📄 (ODM para MongoDB)  
- **Dotenv** 🔑 (variáveis de ambiente)  
- **Cors** 🌍 (para permitir requisições externas)

## ⚙️ Configuração do Projeto  

### 🔧 Pré-requisitos  

Antes de iniciar, certifique-se de ter o **Node.js** instalado.  

### 🛠️ Passo a Passo  

1. **Clone o repositório**  

   ```bash
   git clone https://github.com/seu-usuario/to-do-list-node.git

   cd to-do-list-api
   ```
2. Instale as dependências
    ```bash
   npm instal
   ```
3. Configure as variáveis de ambiente
    - Crie um arquivo .env na raiz do projeto e adicione:
    ```env
        MONGO_URI='mongodb+srv://seu_usuario:senha@seu-cluster.mongodb.net/todo-db?retryWrites=true&w=majority'
    ```
4. Inicie o servidor
    ```bash
        npm run dev
    ```
5. A API estará disponível em: http://localhost:3000