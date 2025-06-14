const letters = 'ABCDEFGHIJKLMNOPQRSTUVWXYZ'.split('');
        const alphabetContainer = document.getElementById('alphabet');
        const cardsContainer = document.getElementById('cards');
    
        const data = {
            A: [
                { title: 'Alvará', desc: 'Documento necessário para funcionamento legal de alguns negócios.' },
                { title: 'Análise de Risco', desc: 'Avaliação de possíveis perigos no ambiente de trabalho.' },
            ],
            B: [
                { title: 'Balanço Patrimonial', desc: 'Demonstração contábil com ativos e passivos.' },
                { title: 'Benefício Fiscal', desc: 'Incentivo concedido pelo governo para reduzir tributos.' },
            ]
        };
    
function renderAlphabet() {
    letters.forEach(letter => {
        const span = document.createElement('span');
            span.textContent = letter;
            span.onclick = () => selectLetter(letter, span);
            alphabetContainer.appendChild(span);
        });
    }
    
    function selectLetter(letter, element) {
        // Marca ativo
        document.querySelectorAll('.alphabet span').forEach(el => el.classList.remove('active'));
        element.classList.add('active');
    
        // Renderiza cards
        const items = data[letter] || [];
        cardsContainer.innerHTML = '';
    
        if (items.length === 0) {
            cardsContainer.innerHTML = `<p>Nenhum item cadastrado para "${letter}".</p>`;
            return;
        }
    
        items.forEach(item => {
            const card = document.createElement('div');
            card.className = 'card';
            card.innerHTML = `<h3>${item.title}</h3><p>${item.desc}</p>`;
            cardsContainer.appendChild(card);
        });
    }
    
// Inicialização
renderAlphabet();
selectLetter('A', document.querySelector('.alphabet span')); 