import React, { useState } from 'react';
import './Form.css';

function Form() {
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');

  const handleSubmit = (event) => {
    event.preventDefault(); 
    if (!name || !email) {
      alert('Por favor, preencha todos os campos.');
      return;
    }
    alert(`Formulário React Enviado!\nNome: ${name}\nEmail: ${email}`);
    setName('');
    setEmail('');
  };

  return (
    <div className="form-wrapper-react">
      <h3>Formulário Construído em React</h3>
      <form onSubmit={handleSubmit}>
        <div className="form-group">
          <label htmlFor="name">Nome:</label>
          <input
            type="text"
            id="name"
            value={name}
            onChange={(e) => setName(e.target.value)}
            placeholder="Seu nome"
          />
        </div>
        <div className="form-group">
          <label htmlFor="email">Email:</label>
          <input
            type="email"
            id="email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            placeholder="seu@email.com"
          />
        </div>
        <button type="submit">Enviar</button>
      </form>
    </div>
  );
}

export default Form;