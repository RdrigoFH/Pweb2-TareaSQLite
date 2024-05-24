const express = require('express');
const sqlite3 = require('sqlite3').verbose();
const path = require('path');
const app = express();
const port = 3000;

const db = new sqlite3.Database('imdb.db');

app.use(express.json());
app.use(express.static(path.join(__dirname, 'public')));