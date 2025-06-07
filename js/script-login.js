// Função para salvar dados no LocalStorage
function saveFormData(formData) {
    localStorage.setItem('loginFormData', JSON.stringify(formData));
}

// Função para recuperar dados do LocalStorage
function loadFormData() {
    const savedData = localStorage.getItem('loginFormData');
    if (savedData) {
        const formData = JSON.parse(savedData);
        document.getElementById('nome').value = formData.nome || '';
        document.getElementById('email').value = formData.email || '';
    }
}

// Carregar dados quando a página for carregada
document.addEventListener('DOMContentLoaded', loadFormData);

function login(event) {
    event.preventDefault();
    const nome = document.getElementById('nome').value;
    const email = document.getElementById('email').value;
    const senha = document.getElementById('senha').value;

    // Salvar dados do formulário (exceto senha por segurança)
    saveFormData({ nome, email });

    console.log("Dados do login:", { nome, email, senhaLength: senha.length });

    if (nome && email && senha.length >= 6) {
        alert("Bem-vindo ao Eco Ambiental, " + nome + "!");
        window.location.href = "index.html"; 
    } else {
        alert("Preencha todos os campos corretamente!");
    }
}