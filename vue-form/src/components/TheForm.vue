<template>
  <div class="form-wrapper-vue" ref="rootElement">
    <h3>Formulário Construído em Vue</h3>
    <form @submit.prevent="handleSubmit">
      <div class="form-group">
        <label for="name">Nome:</label>
        <input type="text" id="name" v-model="name" placeholder="Seu nome" />
      </div>
      <div class="form-group">
        <label for="email">Email:</label>
        <input type="email" id="email" v-model="email" placeholder="seu@email.com" />
      </div>
      <button type="submit">Enviar</button>
    </form>
  </div>
</template>

<script setup>
import { ref, onMounted } from 'vue';
import styles from './TheForm.css?inline';

const name = ref('');
const email = ref('');
const rootElement = ref(null);

const handleSubmit = () => {
  if (!name.value || !email.value) {
    alert('Por favor, preencha todos os campos.');
    return;
  }
  alert(`Formulário Vue Enviado!\nNome: ${name.value}\nEmail: ${email.value}`);
  name.value = '';
  email.value = '';
};

onMounted(() => {
  if (rootElement.value) {
    const shadowRoot = rootElement.value.getRootNode();
    if (shadowRoot) {
      const styleTag = document.createElement('style');
      styleTag.textContent = styles;
      shadowRoot.appendChild(styleTag);
      console.log('Estilo do Vue injetado manualmente no Shadow DOM.');
    }
  }
});
</script>