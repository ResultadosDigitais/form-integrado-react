import React, { useState, useEffect } from 'react';
import './App.css';

const MonitoringCodeFormHooks = () => {
  const [name, setName] = useState('')
  const [email, setEmail] = useState('')

  useEffect(() => {
    const script = document.createElement("script");
    script.src = "https://d335luupugsy2.cloudfront.net/js/loader-scripts/7d1897c6-e72c-4c2d-b15a-36916776e5e7-loader.js";
    script.async = true;
    document.body.appendChild(script);
  }, [])

  const handleSubmit = (e) => {
    //TODO 
    //Evite a utilização de preventDefault()
  }

  return (
    <div className="App">
      <header className="App-header">
        <p>Integração de formulário RDSM<br />Via código de monitoramento (Sintaxe de Hooks)</p>

        <form onSubmit={handleSubmit}>
          <p>
            <label>
              Nome:&nbsp;
                <input
                onChange={event => setName(event.target.value)}
                value={name}
                type="text"
                name="name" />
            </label>
          </p>
          <p>
            <label>
              Email:&nbsp;&nbsp;
                <input
                onChange={event => setEmail(event.target.value)}
                value={email}
                id="email"
                name="email"
                type="email" />
            </label>
          </p>
          <input type="submit" value="Enviar" />
        </form>
      </header>
    </div>
  );
}

export default MonitoringCodeFormHooks;
