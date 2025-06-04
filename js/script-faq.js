document.addEventListener('DOMContentLoaded', () => {
    const faqQuestions = document.querySelectorAll('.faq-question');

    faqQuestions.forEach(question => {
        question.addEventListener('click', () => {
            // Verifica se a questão atual está expandida
            const isExpanded = question.getAttribute('aria-expanded') === 'true';

            // Fecha todas as outras questões
            faqQuestions.forEach(q => {
                if (q !== question) {
                    q.setAttribute('aria-expanded', 'false');
                }
            });

            // Alterna o estado da questão atual
            question.setAttribute('aria-expanded', !isExpanded);
        });
    });
});