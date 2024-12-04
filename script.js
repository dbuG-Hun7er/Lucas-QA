// Captura o elemento da água
const waterElement = document.querySelector('.water');

// Adiciona um ouvinte de evento de movimento do mouse
waterElement.addEventListener('mousemove', (e) => {
    // Obtém a posição do mouse em relação à janela
    const x = e.clientX / window.innerWidth;
    const y = e.clientY / window.innerHeight;

    // Move a água com base na posição do mouse
    waterElement.style.backgroundPosition = `${x * 100}% ${y * 100}%`;
});
