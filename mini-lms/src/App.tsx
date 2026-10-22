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

function Promedio({nota1,nota2,nota3}: {nota1:number;nota2:number}){
  const prom = (nota1+nota2+nota3)/3;
    return (
      <p> El promedio es: {prom.toFixed(2)}</p>
    );
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
    <Promedio nota1={14} nota2={12} nota3={10}/>
    </div>
  );
}
export default App;