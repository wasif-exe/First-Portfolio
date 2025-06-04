const canvas = document.getElementById("particleCanvas");
const ctx = canvas.getContext("2d");

let particles = [];
const particleCount = 150;
const maxVelocity = 0.5;

function resizeCanvas() {
    canvas.width = window.innerWidth;
    canvas.height = window.innerHeight;
    createParticles(); // Regenerate particles on resize
}
window.addEventListener("resize", resizeCanvas);
resizeCanvas();

function createParticles() {
    particles = [];
    for (let i = 0; i < particleCount; i++) {
        particles.push({
            x: Math.random() * canvas.width,
            y: Math.random() * canvas.height,
            size: Math.random() * 3 + 1,
            velocityX: (Math.random() - 0.5) * maxVelocity,
            velocityY: (Math.random() - 0.5) * maxVelocity,
        });
    }
}

function drawParticles() {
    ctx.clearRect(0, 0, canvas.width, canvas.height);
    particles.forEach(p => {
        ctx.fillStyle = "white";
        ctx.beginPath();
        ctx.arc(p.x, p.y, p.size, 0, Math.PI * 2);
        ctx.fill();
        p.x += p.velocityX;
        p.y += p.velocityY;
        if (p.x < 0 || p.x > canvas.width) p.velocityX *= -1;
        if (p.y < 0 || p.y > canvas.height) p.velocityY *= -1;
    });
    requestAnimationFrame(drawParticles);
}

createParticles();
drawParticles();
