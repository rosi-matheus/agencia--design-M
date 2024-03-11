import React, {useState} from 'react';
import './App.css'
import Footer from "./componentes/Footer";
import Header from "./componentes/Header";
import SecaoBanner from "./componentes/SecaoBanner";
import SecaoExperienciaTrabalho from "./componentes/SecaoExperienciaTrabalho";

function App() {
  const [darkMode, setDarkMode] = useState(false)

  const alteraTema = () => {
      setDarkMode(!darkMode)
  }

  return (
    <div className="App">
      <Header alterarTema = {alteraTema} tema = {darkMode}/>
      <SecaoBanner tema = {darkMode}/>
      <SecaoExperienciaTrabalho tema = {darkMode}/>
      <Footer tema = {darkMode}/>
    </div>
  );
}

export default App;
