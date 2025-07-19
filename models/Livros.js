import mongoose from "mongoose";

const livroSchema = new mongoose.Schema({
    id: {type: mongoose.Schema.Types.ObjectId},
    nome: {type: String, required: true},
    editora: {type: String},
    preco: {Number},
    paginas: {Number}
}, {versionKey: false});

const livro = mongoose.model("livros",livroSchema);
export default livro;