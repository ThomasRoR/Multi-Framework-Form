document.addEventListener('DOMContentLoaded', () => {
    const selector = document.getElementById('framework-select');
    const container = document.getElementById('form-container');

    const loadedFrameworks = new Set();

    function loadSingleScript(src, type = 'text/javascript') {
        return new Promise((resolve, reject) => {
            const script = document.createElement('script');
            script.src = src;
            script.type = type;
            script.onload = resolve;
            script.onerror = reject;
            document.body.appendChild(script);
        });
    }

    async function loadFramework(framework) {
        if (!framework) { container.innerHTML = ''; return; }
        if (loadedFrameworks.has(framework)) { renderComponent(framework); return; }

        try {
            switch (framework) {
                case 'react':
                case 'vue':
                    await loadSingleScript(`public/${framework}/index.js`);
                    break;
                case 'angular':
                        await loadSingleScript('public/angular/browser/main.js', 'module');
                        break;
                }
            loadedFrameworks.add(framework);
            renderComponent(framework);
        } catch (error) {
            console.error(`Failed to load ${framework} component`, error);
            container.innerHTML = `<p>Erro ao carregar o componente ${framework}. Abra o console (F12).</p>`;
        }
    }

    function renderComponent(framework) {
        container.innerHTML = '';
        const componentTags = {
            react: 'react-form-widget',
            vue: 'vue-form-widget',
            angular: 'angular-form-widget'
        };
        if (componentTags[framework]) {
            const webComponent = document.createElement(componentTags[framework]);
            container.appendChild(webComponent);
        }
    }

    selector.addEventListener('change', (event) => {
        loadFramework(event.target.value);
    });
});