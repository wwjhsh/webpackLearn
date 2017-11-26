import 'babel-polyfill';
import cats from './app/cats';
import dog from '../pic/dog.jpg'
import '../css/style.css'
import './app/c'
// import $ from 'jquery';
var dogImg = new Image();
dogImg.src=dog;
// dogImg.appendTo('body');
document.body.appendChild(dogImg)
$('<h1>Cats</h1>').appendTo('body');
const ul = $('<ul></ul>').appendTo('body');
for (const cat of cats) {
    $('<li></li>').text(cat).appendTo(ul);
}