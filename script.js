// Funcao para criar baloes dinamicos
function createBalloon() {
    const balloon = document.createElement('div');
    balloon.className = 'balloon';
    balloon.innerHTML = '<i class="fas fa-heart"></i>';
    
    // Cores aleatorias romanticas
    const colors = ['#ff69b4', '#ff1493', '#ff6b9d', '#ffc1cc', '#ffb6c1'];
    balloon.style.color = colors[Math.floor(Math.random() * colors.length)];
    
    // Posicao inicial aleatoria
    balloon.style.left = Math.random() * 100 + '%';
    balloon.style.fontSize = (1.5 + Math.random() * 1) + 'rem';
    
    // Adicionar animacao unica
    balloon.style.animation = `floatUp ${5 + Math.random() * 3}s ease-in-out`;
    
    // Adicionar ao container
    document.querySelector('.balloons-container').appendChild(balloon);
    
    // Remover apos a animacao
    setTimeout(() => {
        if (balloon.parentNode) {
            balloon.parentNode.removeChild(balloon);
        }
    }, 8000);
}

// Funcao para criar coracoes flutuantes extras
function createFloatingHeart() {
    const heart = document.createElement('div');
    heart.innerHTML = '<i class="fas fa-heart"></i>';
    heart.style.position = 'fixed';
    heart.style.fontSize = (1 + Math.random() * 1.5) + 'rem';
    heart.style.left = Math.random() * 100 + '%';
    heart.style.top = '100%';
    heart.style.pointerEvents = 'none';
    heart.style.zIndex = '1';
    heart.style.animation = `heartRise ${3 + Math.random() * 2}s ease-out forwards`;
    
    document.body.appendChild(heart);
    
    // Remover apos a animacao
    setTimeout(() => {
        if (heart.parentNode) {
            heart.parentNode.removeChild(heart);
        }
    }, 5000);
}

// Adicionar animacao CSS para coracoes que sobem
const style = document.createElement('style');
style.textContent = `
    @keyframes heartRise {
        0% {
            transform: translateY(0) rotate(0deg);
            opacity: 0;
        }
        10% {
            opacity: 1;
        }
        90% {
            opacity: 1;
        }
        100% {
            transform: translateY(-100vh) rotate(360deg);
            opacity: 0;
        }
    }
`;
document.head.appendChild(style);

// Funcao para adicionar efeito de brilho na foto
function addSparkleEffect() {
    const photoFrame = document.querySelector('.photo-frame');
    const sparkle = document.createElement('div');
    sparkle.innerHTML = '<i class="fas fa-sparkles"></i>';
    sparkle.style.position = 'absolute';
    sparkle.style.fontSize = '1.5rem';
    sparkle.style.pointerEvents = 'none';
    sparkle.style.left = Math.random() * 80 + 10 + '%';
    sparkle.style.top = Math.random() * 80 + 10 + '%';
    sparkle.style.animation = 'sparkle 1.5s ease-out forwards';
    
    photoFrame.appendChild(sparkle);
    
    setTimeout(() => {
        if (sparkle.parentNode) {
            sparkle.parentNode.removeChild(sparkle);
        }
    }, 1500);
}

// Funcao para fazer o titulo "pulsar" com mais intensidade ao clicar
function enhanceTitlePulse() {
    const title = document.querySelector('.title');
    title.addEventListener('click', function() {
        this.style.animation = 'none';
        setTimeout(() => {
            this.style.animation = 'titlePulse 0.5s ease-in-out 3';
        }, 10);
        
        // Criar coracoes extras ao clicar no titulo
        for (let i = 0; i < 5; i++) {
            setTimeout(() => createFloatingHeart(), i * 200);
        }
    });
}


// Funcao de inicializacao
function init() {
    // Criar baloes a cada intervalo
    setInterval(createBalloon, 1500);
    
    // Criar coracoes flutuantes extras
    setInterval(createFloatingHeart, 3000);
    
    // Adicionar brilhos na foto ocasionalmente
    setInterval(addSparkleEffect, 2000);
    
    // Melhorar interacao do titulo
    enhanceTitlePulse();
    
    // Adicionar efeito de clique na foto
    const photo = document.getElementById('girlfriend-photo');
    photo.addEventListener('click', function() {
        // Criar explosao de coracoes ao clicar na foto
        for (let i = 0; i < 8; i++) {
            setTimeout(() => createFloatingHeart(), i * 100);
        }
        
        // Adicionar brilhos extras
        for (let i = 0; i < 3; i++) {
            setTimeout(() => addSparkleEffect(), i * 300);
        }
    });
}

// Aguardar o carregamento da pagina
document.addEventListener('DOMContentLoaded', init);

// Funcao para substituir a foto facilmente
function changePhoto(imageUrl) {
    const photo = document.getElementById('girlfriend-photo');
    photo.src = imageUrl;
}

// Funcao para personalizar a mensagem
function changeMessage(newMessage) {
    const messageElement = document.getElementById('romantic-text');
    messageElement.innerHTML = newMessage;
}

// Exemplos de uso:
// changePhoto('caminho/para/sua/foto.jpg');
// changeMessage('Sua mensagem personalizada aqui!');