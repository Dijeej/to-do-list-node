import mongoose from "mongoose";

const connectToDB = () => {
    mongoose.connect(
        "mongodb+srv://diegod1199:8NdpDARYNfzt5cDg@todolist.niw7n.mongodb.net/?retryWrites=true&w=majority&appName=todolist",
        {
            useNewUrlParser: true,
            useUnifiedTopology: true
        }
    )
    .then(() => {console.log("Servidor conectado em: http://localhost:3000/"); console.log("MongoDB Atlas conectado.")})
    .catch((erro) => console.log(erro));
};

// Exportando a função como ES Module
export { connectToDB };