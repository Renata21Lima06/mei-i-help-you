document.querySelectorAll('.accordion-header').forEach(header => {
    header.addEventListener('click', () => {
        const item = header.parentElement;
        item.classList.toggle('active');
    });
});

const senhaInput = document.getElementById('senha');
const toggleSenha = document.getElementById('toggleSenha');

toggleSenha.addEventListener('click', function () {
    const isSenha = senhaInput.type === 'password';
    senhaInput.type = isSenha ? 'text' : 'password';
    toggleSenha.src = isSenha
        ? '../../assets/icons/eye.svg'
        : '../../assets/icons/eye-off.svg';
});