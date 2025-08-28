// Configuração e inicialização do EmailJS
(function() {
    // Inicializa o EmailJS com seu Public Key
    emailjs.init("YOUR_PUBLIC_KEY"); // Substitua pelo seu Public Key do EmailJS
    
    // Aguarda o carregamento completo do DOM
    document.addEventListener('DOMContentLoaded', function() {
        const contactForm = document.getElementById('formContato');
        
        if (contactForm) {
            contactForm.addEventListener('submit', function(e) {
                e.preventDefault();
                
                // Coleta os dados do formulário
                const formData = {
                    nome: document.getElementById('nome').value,
                    email: document.getElementById('email').value,
                    telefone: document.getElementById('telefone').value,
                    assunto: document.getElementById('assunto').value,
                    mensagem: document.getElementById('mensagem').value
                };
                
                // Envia o email usando EmailJS
                emailjs.send('service_your_service_id', 'template_your_template_id', formData)
                    .then(function(response) {
                        console.log('SUCCESS!', response.status, response.text);
                        alert('Mensagem enviada com sucesso! Entraremos em contato em breve.');
                        contactForm.reset();
                    }, function(error) {
                        console.log('FAILED...', error);
                        alert('Falha ao enviar a mensagem. Tente novamente mais tarde ou entre em contato por telefone.');
                    });
            });
        }
    });
})();
