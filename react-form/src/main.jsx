import React from 'react';
import ReactDOM from 'react-dom/client';
import r2wc from 'react-to-webcomponent';
import Form from './Form.jsx';
import './index.css';

const ReactForm = r2wc(Form, React, ReactDOM);

customElements.define('react-form-widget', ReactForm);