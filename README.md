# 🎨 Projeto Multi-Framework Form

⚡ Uma aplicação single-page que carrega dinamicamente componentes de formulário construídos em **React, Vue e Angular**, todos convivendo em harmonia através de Web Components.

![React](https://img.shields.io/badge/React-20232A?style=for-the-badge&logo=react&logoColor=61DAFB)
![Vue.js](https://img.shields.io/badge/Vue.js-35495E?style=for-the-badge&logo=vuedotjs&logoColor=4FC08D)
![Angular](https://img.shields.io/badge/Angular-DD0031?style=for-the-badge&logo=angular&logoColor=white)
![Vite](https://img.shields.io/badge/Vite-646CFF?style=for-the-badge&logo=vite&logoColor=white)
![TypeScript](https://img.shields.io/badge/TypeScript-007ACC?style=for-the-badge&logo=typescript&logoColor=white)

---

### 🎬 Demonstração

![Demo da Aplicação](https://cdn.discordapp.com/attachments/1014714594599653459/1385859113095008256/frameForm.gif?ex=68579960&is=685647e0&hm=d4f310a892aa9bd52fe43f7db1fbae8e1de71fc428489a7cb241ff9e2aa6d0d7&)

---

## 🚀 Sobre o Projeto

Este projeto nasceu de um desafio: é possível ter uma única aplicação onde o usuário pode escolher dinamicamente qual tecnologia front-end renderiza um componente? A resposta é sim.

Esta aplicação é uma prova de conceito de uma arquitetura baseada em **Micro-Frontends** e **Web Components**. Ela consiste em:
* Uma **aplicação contêiner** (ou "casca") responsável pela navegação principal.
* Três **Web Components** independentes, cada um construído com um framework diferente (React, Vue e Angular).
* Um sistema de carregamento dinâmico de scripts que ativa o componente selecionado pelo usuário.

---

## 🛠️ Tecnologias Utilizadas

* ⚛️ **React 18** (via Vite)
* 🖖 **Vue.js 3** (via Vite)
* 🅰️ **Angular 17+** (via Angular CLI)
* 📦 **Web Components** para encapsulamento e interoperabilidade.
* 📜 **HTML5, CSS3, JavaScript (ESM)**
* 🖥️ **npx serve** para o servidor de desenvolvimento local.

---

## ✨ Funcionalidades

* **Seleção Dinâmica de Framework:** Um menu dropdown permite ao usuário alternar em tempo real entre os formulários de React, Vue e Angular.
* **Componentização Extrema:** Cada formulário é um Web Component completamente isolado.
* **Estilização Coesa e Única:** A aplicação possui um tema visual consistente, mas cada componente tem um toque de estilo com a cor de sua respectiva marca.
* **Builds Otimizados:** Configurações de build customizadas para cada framework, garantindo que todos os artefatos sejam gerados em uma estrutura de pastas unificada e pública.

---

## 📂 Estrutura de Pastas

O projeto foi reestruturado para máxima simplicidade e robustez, eliminando problemas com caminhos relativos.

```
/
|-- /public/              <-- Todos os arquivos de build finais
|   |-- /react/
|   |-- /vue/
|   |-- /angular/
|
|-- index.html            <-- A "casca" principal da aplicação
|-- main.js               <-- A lógica do contêiner
|-- style.css             <-- Os estilos globais
|
|-- /react-form/          (Código-fonte do componente React)
|-- /vue-form/            (Código-fonte do componente Vue)
|-- /angular-form/        (Código-fonte do componente Angular)
|
|-- README.md             (Você está aqui!)
...
```

---

## 🏁 Como Rodar o Projeto

Siga os passos abaixo para executar o projeto localmente.

### Pré-requisitos
* [Node.js](https://nodejs.org/en/) (versão LTS recomendada)
* `npm` (geralmente vem com o Node.js)
* Angular CLI instalado globalmente: `npm install -g @angular/cli`

### Passos

1.  **Clone o repositório:**
    ```bash
    git clone [https://github.com/ThomasRoR/Multi-Framework-Form](https://github.com/ThomasRoR/Multi-Framework-Form)
    cd seu-repositorio
    ```

2.  **Instale as dependências de cada projeto:**
    ```bash
    # Instalar para React
    cd react-form && npm install && cd ..

    # Instalar para Vue
    cd vue-form && npm install && cd ..

    # Instalar para Angular
    cd angular-form && npm install && cd ..
    ```

3.  **Construa (Build) todos os componentes:**
    Este passo compila o código-fonte e coloca os arquivos finais na pasta `/public`.
    ```bash
    # Build do React
    cd react-form && npm run build && cd ..

    # Build do Vue
    cd vue-form && npm run build && cd ..

    # Build do Angular
    cd angular-form && ng build --configuration production && cd ..
    ```

4.  **Inicie o servidor local:**
    Na pasta raiz do projeto, execute:
    ```bash
    npx serve .
    ```

5.  **Abra no navegador:**
    Acesse [http://localhost:3000](http://localhost:3000) (ou a porta que o `serve` indicar).

---

## 🧠 Desafios e Aprendizados

Esta não foi uma jornada simples! Vários desafios interessantes de desenvolvimento moderno foram encontrados e resolvidos, demonstrando uma grande capacidade de depuração e resolução de problemas:

* **Colisão de Variáveis Globais:** Builds minificados do React e Vue estavam declarando variáveis com o mesmo nome, causando erros. A solução foi configurar os builds do Vite para o formato `'iife'`, que isola cada componente em seu próprio escopo.
* **Injeção de Estilo no Shadow DOM:** O CSS do Vue não era aplicado devido ao encapsulamento do Shadow DOM. A solução final e mais robusta foi importar o CSS como um texto (`?inline`) e injetá-lo manualmente com JavaScript na raiz do Shadow DOM do componente.
* **Configuração de Build e Caminhos:** A maior parte da depuração envolveu garantir que os `outputPath` e `outDir` de cada ferramenta de build (Vite e Angular CLI) estivessem corretos e que o servidor estático conseguisse resolver os caminhos dos arquivos sem erros 404.
* **Submódulos do Git:** Descobrimos e corrigimos o problema onde o Angular, ao ser criado, se tornou um submódulo do Git em vez de uma pasta comum.

---

## 👤 Autor

**[Thomas Oliveira]**

* GitHub: [ThomasRoR](https://github.com/ThomasRoR)
* LinkedIn: [Thomas Oliveira](https://www.linkedin.com/in/thomasror/)

---

## 📜 Licença

Distribuído sob a licença MIT. Veja `LICENSE` para mais informações.


