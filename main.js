import './style.css'

document.querySelector('#app').innerHTML = `
  <div>
   <h1>Hello Netlify</h1>
   <p>An example project for deploying on netlify</p>
  </div>
`

setupCounter(document.querySelector('#counter'))
