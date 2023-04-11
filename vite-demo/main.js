import './style.css'
import buttonStyles from './button.module.css'
import javascriptLogo from './javascript.svg'
import viteLogo from '/vite.svg'
import { setupCounter } from './counter.js'
import img from './gopher-golang.png'
import imageStyles from './image.module.css'
import {user} from './data.json'
import suma from './suma.ts'


console.log(`La suma de 2+3 es: ${suma(2,3)}`);
const MODULES = import.meta.glob('./modules/*.js')
console.log(MODULES);

for (const PATH in MODULES) {
  MODULES[PATH]().then((module) => {
    module.load()
  })
}
document.querySelector('#app').innerHTML = `
  <div>
    <a href="https://vitejs.dev" target="_blank">
      <img src="${viteLogo}" class="logo" alt="Vite logo" />
    </a>
    <a href="https://developer.mozilla.org/en-US/docs/Web/JavaScript" target="_blank">
      <img src="${javascriptLogo}" class="logo vanilla" alt="JavaScript logo" />
    </a>
    <h1>Hello Platzi</h1>
    <div class="card">
      <button id="counter" type="button"></button>
    </div>
    <p class="read-the-docs">
      Click on the Vite logo to learn more
    </p>
    <img id="img" />
    <pre>${JSON.stringify(user)}</pre>
  </div>
`;

setupCounter(document.querySelector('#counter'))
document.getElementById('counter').className = buttonStyles.btn;
const IMAGEN = document.getElementById('img')
IMAGEN.src = img;
IMAGEN.className = imageStyles.img;