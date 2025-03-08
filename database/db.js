import dotenv from "dotenv";
import mongoose from "mongoose";

dotenv.config();

const connectToDB = () => {
    // const mongoUri = process.env.MONGO_URI;
    const mongoUri = 'mongodb+srv://diegod1199:8NdpDARYNfzt5cDg@todolist.niw7n.mongodb.net/?retryWrites=true&w=majority&appName=todolist';
    if (!mongoUri) {
        console.error("Erro: MONGO_URI não está definida ou está vazia!");
        return;
    }
    console.log(mongoUri)
    mongoose.connect(mongoUri, {
            useNewUrlParser: true,
            useUnifiedTopology: true
        }
    )
    .then(() => console.log("MongoDB Atlas conectado."))
    .catch((erro) => console.log(erro));
};

export { connectToDB };