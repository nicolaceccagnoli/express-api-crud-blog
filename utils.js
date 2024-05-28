// Importo Path per creare percorsi ai file
const path = require('path');

// Importo i posts
let posts = require('./db/posts.json');

// Importo File System
const fs = require("fs");

// Importo slugify
const slugify = require('slugify');

// Creo una funzione per creare lo slug dei post
// const createSlug = (name) => {
//     slugify(name, {lower: true, strict: true});
// }

const createSlug = (name) => {
    // Definisco uno slug di base
    const slugBase = name.replaceAll(' ', '-').toLowerCase().replaceAll('/', '');
    const slugs = posts.map(p => p.slug);
    // Inizializzo un contatore
    let counter = 1;
    let slug = slugBase;
    // fintanto che lo slug è incluso negli slugs
    while(slugs.includes(slug)) {
        slug = `${slugBase}-${counter}`;
        counter++;
    }
    return slug;
}

// Creo una funzione per l'eliminazione del file da public
const deletePublicFile = (fileName) => {
    const filePath = path.join(__dirname, '../public', fileName);
    fs.unlinkSync(filePath);
}

// Creo una funzione per aggiornare i Posts
const updatePosts = (newPosts) => {
    const filePath = path.join(__dirname, './db/posts.json');
    // Scrivo i nuovi post e converto l'oggetto in una stringa JSON
    fs.writeFileSync(filePath, JSON.stringify(newPosts));
}

// Esporto i moduli
module.exports = {
    path,
    createSlug,
    deletePublicFile,
    updatePosts
}