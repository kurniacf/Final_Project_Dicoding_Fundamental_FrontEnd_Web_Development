import 'regenerator-runtime';
import './components/footer.js';
import './components/nav-bar.js';
import './components/header.js';
import background from './img/bg-utama.jpg';
import './styles/style.css';
import '../node_modules/bootstrap/dist/css/bootstrap.min.css';
import main from './script/main.js';

document.addEventListener("DOMContentLoaded", main);
document.querySelector('#imageFigure').src = background;