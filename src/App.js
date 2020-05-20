import React, { Component } from 'react';
import './App.css';

class App extends Component {
  componentDidMount() {
    if (window.RDStationForms) {
      // Essa linha cria o elemento do formulário e faz o append do conteúdo na div abaixo.
      // Substitua os parâmetros com os dados do seu formulário.
      new window.RDStationForms('my-form-aeiou6de172d1e9c5b6', 'UA-36276574-1').createForm();
    }
  }

  render() {
    return (
      <div className="App">
        <header className="App-header">
          <p>Formulário integrado RDSM<br />Dentro de um React App</p>

          {/* Esta div é necessária para receber o conteúdo do formulário. Substitua os parâmetros com os dados do seu formulário. */}
          <div role="main" id="my-form-aeiou6de172d1e9c5b6"></div>
        </header>
      </div>
    );
  }
}

export default App;
