document.querySelector('form').addEventListener('submit', async function(event) {
    event.preventDefault(); // Evita o recarregamento da página

    // Coleta os dados do formulário
    const data = {
        name: document.getElementById('name').value,
        email: document.getElementById('email').value,
        company: document.getElementById('nameE').value,
        message: document.getElementById('message').value
    };

    try {
        const response = await fetch('https://68239e1965ba0580339759a2.mockapi.io/formulario', { // substitua pela URL real
            method: 'POST',
            headers: {
                'Content-Type': 'application/json'
            },
            body: JSON.stringify(data)
        });

        if (response.ok) {
            alert('Formulário enviado com sucesso!');
            document.querySelector('form').reset(); // limpa o formulário
        } else {
            alert('Erro ao enviar o formulário. Tente novamente.');
        }
    } catch (error) {
        console.error('Erro:', error);
        alert('Erro de conexão com o servidor.');
    }
});