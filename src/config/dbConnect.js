const mongoose = require("mongoose") 

mongoose.connect("mongodb+srv://jaovidal:123@desafio.m1r5j.mongodb.net/Desafio")

let db = mongoose.connection;

module.exports = db;