import { createApplication } from '@angular/platform-browser';
import { createCustomElement } from '@angular/elements';
import { ApplicationRef } from '@angular/core';

import { FormComponent } from './app/form/form.component';
import { appConfig } from './app/app.config';

(async () => {
  console.log('ESTOU USANDO O ARQUIVO main.ts CORRETO - BUILD NOVO');
  try {
    const app: ApplicationRef = await createApplication(appConfig);

    const formElement = createCustomElement(FormComponent, { injector: app.injector });
    customElements.define('angular-form-widget', formElement);

  } catch (err) {
    console.error(err);
  }
})();