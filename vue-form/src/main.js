
import { createApp, defineCustomElement } from 'vue';
import TheForm from './components/TheForm.vue';


const VueFormElement = defineCustomElement(TheForm);

customElements.define('vue-form-widget', VueFormElement);