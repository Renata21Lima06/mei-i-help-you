// Accordeion (index)
document.querySelectorAll('.accordion-header').forEach(header => {
    header.addEventListener('click', () => {
        const item = header.parentElement;
        item.classList.toggle('active');
    });
});

// Mostra Senha (login)
const senhaInput = document.getElementById('senha');
const toggleSenha = document.getElementById('toggleSenha');

toggleSenha.addEventListener('click', function () {
    const isSenha = senhaInput.type === 'password';
    senhaInput.type = isSenha ? 'text' : 'password';
    toggleSenha.src = isSenha
        ? '../../assets/icons/eye.svg'
        : '../../assets/icons/eye-off.svg';
});

// Mostra formulário
function showForm(userType) {
    document.getElementById("meiForm").style.display = "none";
    document.getElementById("contadorForm").style.display = "none";

    if (userType === "mei") {
        document.getElementById("meiForm").style.display = "block";
    } else if (userType === "contador") {
        document.getElementById("contadorForm").style.display = "block";
    }
}

// Navbar
const menuToggle = document.getElementById("menuToggle");
const sidebar = document.getElementById("sidebar");
menuToggle.addEventListener("click", () => {
    sidebar.classList.toggle("open");
});


