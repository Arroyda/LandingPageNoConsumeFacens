document.addEventListener('DOMContentLoaded', function() {
    fetch('/components/header.html')
        .then(response => {
            if (!response.ok) {
                throw new Error(`HTTP error! status: ${response.status}`);
            }
            return response.text();
        })
        .then(html => {
            const headerContainer = document.getElementById('header-container');
            if (headerContainer) {
                headerContainer.innerHTML = html;
                
                // Inicializa qualquer script necessário do header após carregar
                initHeaderScripts();
            } else {
                console.error('Elemento header-container não encontrado no DOM');
            }
        })
        .catch(error => {
            console.error('Falha ao carregar o header:', error);
            // Opcional: Mostrar mensagem de fallback para o usuário
            const headerContainer = document.getElementById('header-container');
            if (headerContainer) {
                headerContainer.innerHTML = '<p>Menu de navegação indisponível</p>';
            }
        });

    function initHeaderScripts() {
        // Adicione aqui qualquer inicialização necessária para scripts do header
        // Por exemplo: menus dropdown, eventos de clique, etc.
    }
});


document.addEventListener('DOMContentLoaded', function() {
    fetch('/components/footer.html')
        .then(response => {
            if (!response.ok) {
                throw new Error(`HTTP error! status: ${response.status}`);
            }
            return response.text();
        })
        .then(html => {
            const footerContainer = document.getElementById('footer-container');
            if (footerContainer) {
                footerContainer.innerHTML = html;
                
                // Inicializa qualquer script necessário do header após carregar
                initHeaderScripts();
            } else {
                console.error('Elemento header-container não encontrado no DOM');
            }
        })
        .catch(error => {
            console.error('Falha ao carregar o header:', error);
            // Opcional: Mostrar mensagem de fallback para o usuário
            const footerContainer = document.getElementById('footer-container');
            if (footerContainer) {
                footerContainer.innerHTML = '<p>Menu de navegação indisponível</p>';
            }
        });

    function initHeaderScripts() {
        // Adicione aqui qualquer inicialização necessária para scripts do header
        // Por exemplo: menus dropdown, eventos de clique, etc.
    }
});