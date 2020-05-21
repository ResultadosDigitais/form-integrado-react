import React, { Component } from 'react';
import { Link } from 'react-router-dom'

class Navbar extends Component {
  render() {
    return (
      <div className="navbar">
        <a className="brand">RDMS</a>

        <Link to="/integrated-form">Formulário integrado</Link>
        <Link to="/monitoring-code-form">Formulário via código de monitoramento</Link>
      </div>
    );
  }
}

export default Navbar;
