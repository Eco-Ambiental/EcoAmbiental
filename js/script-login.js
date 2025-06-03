function login(event) {
    event.preventDefault();
    const nome = document.getElementById('nome').value;
    const email = document.getElementById('email').value;
    const senha = document.getElementById('senha').value;

    console.log("Dados do login:", { nome, email, senhaLength: senha.length });

    if (nome && email && senha.length >= 6) {
        alert("Bem-vindo ao Eco Ambiental, " + nome + "!");
        window.location.href = "index.html"; 
    } else {
        alert("Preencha todos os campos corretamente!");
    }
}