import { useState } from 'react'
import heroImg from './assets/hero.png'
import reactLogo from './assets/react.svg'
import viteLogo from './assets/vite.svg'
import './App.css'

function Estudiante(props: {nombre: string}) {
  return(
    <p> Bienvenido = '{nombre}'</p>
  );
}

function Promedio(){
  
}

function Saludo() {
  return(
    <p>Bienvenido al curso de React</p>
  );
}


function App() {
 const alu = "Luis";
 return (
  <div>
    <h1>Semana 11</h1>
    <h1>{alu}</h1>
    <Saludo />
    <p> Estudiante nombre = 'Pedro'</p>
    <p> Estudiante nombre = 'Luis'</p>
    <p> Estudiante nombre = 'Maria'</p>
    </div>
  );
}
export default App;