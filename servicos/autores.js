import autores from "../models/Autores.js";

async function getTodosAutores() {
    const listaAutores = await autores.find({});
    return listaAutores;
}

async function getAutorPorId(id) {
    const listaAutores = await autores.findById(id);
    return listaAutores;
}

async function insereAutor(autorNovo) {
    await livros.create(autorNovo);
}

async function modificaAutor(modificacoes, id) {
    await livros.findByIdAndUpdate(id, modificacoes);
}

async function removeAutor(id) {
    await livros.findByIdAndDelete(id);
}


export {
    getTodosAutores,
    getAutorPorId,
    insereAutor,
    modificaAutor,
    removeAutor
}