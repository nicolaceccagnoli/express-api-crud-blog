// Importo Path per creare percorsi ai file
const path = require('path');

// Importo File System
const fs = require("fs");

// Importo slugify
const slugify = require('slugify');

// Creo una funzione per creare lo slug dei post
const createSlug = (name) => {
    slugify(name, {lower: true, strict: true});
}

// Creo una funzione per l'eliminazione del file da public
const deletePublicFile = (fileName) => {
    const filePath = path.join(__dirname, '../public', fileName);
    fs.unlinkSync(filePath);
}

// Creo una funzione per aggiornare i Posts
const updatePosts = (newPosts) => {
    const filePath = path.join(__dirname, '../db/posts.json');
    // Scrivo i nuovi post e converto l'oggetto in una stringa JSON
    fs.writeFileSync(filePath, JSON.stringify(newPosts));
    // Aggiorno i posts con i nuovi Posts
    posts = newPosts;
}

// Esporto i moduli
module.exports = {
    path,
    createSlug,
    deletePublicFile,
    updatePosts
}