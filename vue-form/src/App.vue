<script setup>
import HelloWorld from './components/HelloWorld.vue'
</script>

<template>
  <div>
    <a href="https://vite.dev" target="_blank">
      <img src="/vite.svg" class="logo" alt="Vite logo" />
    </a>
    <a href="https://vuejs.org/" target="_blank">
      <img src="./assets/vue.svg" class="logo vue" alt="Vue logo" />
    </a>
  </div>
  <HelloWorld msg="Vite + Vue" />
</template>

<style scoped>



/* Estilo que já tínhamos para a borda */
.form-wrapper-vue {
  border: 2px solid #42b883; /* Cor do Vue */
  /* ... outros estilos ... */
}

/* --- ADIÇÕES PARA DEIXAR ÚNICO --- */

.form-wrapper-vue h3 {
  color: #42b883; /* Cor do Vue no título */
}

.form-wrapper-vue button:hover {
  box-shadow: 0 4px 15px rgba(66, 184, 131, 0.3); /* Sombra esverdeada */
}

/* O resto do CSS padrão deve estar aqui */

h3 {
  font-family: var(--font-title);
  text-align: center;
  margin-top: 0;
  margin-bottom: 2rem;
  font-size: 1.5rem;
}

form {
  width: 100%;
  max-width: 400px;
  margin: auto;
  display: flex;
  flex-direction: column;
  gap: 1.25rem;
}

.form-group {
  display: flex;
  flex-direction: column;
}

label {
  margin-bottom: 0.5rem;
  font-size: 0.9rem;
  color: var(--text-primary);
  font-weight: bold;
}

input {
  font-family: var(--font-text);
  font-size: 1rem;
  padding: 12px 15px;
  background-color: #0b0c10; /* Usando o fundo principal para contraste */
  border: 1px solid var(--color-secondary);
  border-radius: 8px;
  color: var(--text-primary);
  transition: border-color 0.2s, box-shadow 0.2s;
}

input:focus {
  outline: none;
  border-color: var(--color-accent);
  box-shadow: 0 0 0 3px rgba(102, 252, 241, 0.2);
}

button {
  font-family: var(--font-title);
  font-size: 1.1rem;
  font-weight: bold;
  padding: 15px;
  background-color: var(--color-accent);
  color: var(--bg-dark); /* Cor de texto escura para contrastar com o botão ciano */
  border: none;
  border-radius: 8px;
  cursor: pointer;
  transition: transform 0.2s, box-shadow 0.2s;
  margin-top: 1rem;
}

button:hover {
  transform: translateY(-2px);
  box-shadow: 0 4px 15px rgba(102, 252, 241, 0.25);
}
</style>
