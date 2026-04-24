import ejs from 'ejs';
import path from 'path';
import { fileURLToPath } from 'url';
import express from 'express';
import fs from 'fs';

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

const app = express();
const PORT = 3000;

app.use(express.static(path.join(__dirname, 'public')));
app.set('view engine', 'ejs');
app.set('views', path.join(__dirname, 'views'));

app.get('/', (req, res) => {
    res.render('index.ejs');
});

app.get('/menu', (req, res) => {
    const menuData = JSON.parse(fs.readFileSync(path.join(__dirname, 'data/menu.json'), 'utf8'));
    res.render('menu.ejs', { menu: menuData });
});

app.get('/visit', (req, res) => {
    res.render('visit.ejs');
});

app.listen(PORT, () => {
    console.log(`Server is running on http://localhost:${PORT}`);
});