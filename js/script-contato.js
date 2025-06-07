document.addEventListener('DOMContentLoaded', () => {
    const form = document.getElementById('contactForm');
    const campos = {
        nome: {
            regex: /^[A-Za-zÀ-ÖØ-öø-ÿ\s]{3,}$/,
            mensagem: 'O nome deve ter pelo menos 3 caracteres e conter apenas letras'
        },
        email: {
            regex: /^[^\s@]+@[^\s@]+\.[^\s@]+$/,
            mensagem: 'Digite um e-mail válido'
        },
        telefone: {
            regex: /^\(\d{2}\)\s\d{4,5}-\d{4}$/,
            mensagem: 'Digite um telefone válido no formato (XX) XXXXX-XXXX'
        }
    };

    // Função para salvar dados no LocalStorage
    function saveFormData() {
        const formData = {
            nome: document.getElementById('nome').value,
            email: document.getElementById('email').value,
            telefone: document.getElementById('telefone').value,
            assunto: document.getElementById('assunto').value,
            mensagem: document.getElementById('mensagem').value
        };
        localStorage.setItem('contactFormData', JSON.stringify(formData));
    }

    // Função para carregar dados do LocalStorage
    function loadFormData() {
        const savedData = localStorage.getItem('contactFormData');
        if (savedData) {
            const formData = JSON.parse(savedData);
            document.getElementById('nome').value = formData.nome || '';
            document.getElementById('email').value = formData.email || '';
            document.getElementById('telefone').value = formData.telefone || '';
            document.getElementById('assunto').value = formData.assunto || '';
            document.getElementById('mensagem').value = formData.mensagem || '';
        }
    }

    // Carregar dados salvos quando a página for carregada
    loadFormData();

    // Salvar dados quando houver mudanças nos campos
    form.querySelectorAll('input, select, textarea').forEach(element => {
        element.addEventListener('change', saveFormData);
    });

    // Formatar telefone automaticamente
    const telefoneInput = document.getElementById('telefone');
    telefoneInput.addEventListener('input', (e) => {
        let valor = e.target.value.replace(/\D/g, '');
        if (valor.length <= 11) {
            valor = valor.replace(/^(\d{2})(\d)/g, '($1) $2');
            valor = valor.replace(/(\d)(\d{4})$/, '$1-$2');
            e.target.value = valor;
            saveFormData(); // Salvar após formatação
        }
    });

    // Validar campo individual
    function validarCampo(campo, valor) {
        const errorElement = document.getElementById(`${campo}Error`);
        
        if (campo === 'assunto') {
            if (!valor) {
                errorElement.textContent = 'Selecione um assunto';
                return false;
            }
            errorElement.textContent = '';
            return true;
        }

        if (campo === 'mensagem') {
            if (valor.trim().length < 10) {
                errorElement.textContent = 'A mensagem deve ter pelo menos 10 caracteres';
                return false;
            }
            errorElement.textContent = '';
            return true;
        }

        if (campo === 'telefone' && !valor) {
            errorElement.textContent = '';
            return true; // Telefone é opcional
        }

        if (campos[campo]) {
            const { regex, mensagem } = campos[campo];
            const valido = regex.test(valor);
            errorElement.textContent = valido ? '' : mensagem;
            return valido;
        }

        return true;
    }

    // Validar todos os campos obrigatórios
    function validarFormulario() {
        const nome = document.getElementById('nome').value;
        const email = document.getElementById('email').value;
        const telefone = document.getElementById('telefone').value;
        const assunto = document.getElementById('assunto').value;
        const mensagem = document.getElementById('mensagem').value;

        const validacoes = [
            validarCampo('nome', nome),
            validarCampo('email', email),
            validarCampo('telefone', telefone),
            validarCampo('assunto', assunto),
            validarCampo('mensagem', mensagem)
        ];

        return validacoes.every(v => v);
    }

    // Adicionar validação em tempo real
    form.querySelectorAll('input, select, textarea').forEach(element => {
        element.addEventListener('blur', (e) => {
            validarCampo(e.target.id, e.target.value);
        });
    });

    // Manipular envio do formulário
    form.addEventListener('submit', (e) => {
        e.preventDefault();

        if (validarFormulario()) {
            const formData = {
                nome: document.getElementById('nome').value,
                email: document.getElementById('email').value,
                telefone: document.getElementById('telefone').value,
                assunto: document.getElementById('assunto').value,
                mensagem: document.getElementById('mensagem').value
            };

            console.log('Dados do formulário:', formData);
            
            // Limpar formulário e LocalStorage após envio
            localStorage.removeItem('contactFormData');
            form.reset();
            alert('Mensagem enviada com sucesso!');
        }
    });
}); 