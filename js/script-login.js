document.addEventListener("DOMContentLoaded", function () {
        const form = document.querySelector(".form");

        form.addEventListener("submit", function (event) {
            event.preventDefault(); // Impede envio padrão

            const nome = form.querySelector('input[placeholder="Seu nome"]').value.trim();
            const email = form.querySelector('input[placeholder="Seu e-mail"]').value.trim();
            const senha = form.querySelector('input[placeholder="Sua senha"]').value.trim();

            if (nome && email && senha) {
                console.log(`Login bem-sucedido: ${nome} - ${email}`);
                window.location.href = "index.html"; // Redireciona
            } else {
                alert("Por favor, preencha todos os campos.");
            }
        });
    });