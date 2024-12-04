// Efeito de animação no fundo com o movimento do mouse
document.body.addEventListener('mousemove', (e) => {
    const x = e.clientX / window.innerWidth;
    const y = e.clientY / window.innerHeight;
    const z = e.clientY / window.innerHeight;

    document.body.style.background = `linear-gradient(135deg, 
        rgba(51, 204, 255, ${1 - x}), 5
        rgba(255, 153, 51, ${1 - y}), 
        rgba(51, 204, 255, ${1 - z}), 
        rgba(255, 102, 102, ${x + y + z}))`;
});
