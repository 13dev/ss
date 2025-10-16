// Interactive Mesh Background
class MeshBackground {
    constructor() {
        this.canvas = document.getElementById('mesh-canvas');
        this.ctx = this.canvas.getContext('2d');
        this.mouse = { x: 0, y: 0 };
        this.nodes = [];
        this.connections = [];

        this.init();
        this.createNodes();
        this.animate();
        this.addEventListeners();
    }

    init() {
        this.resize();
        window.addEventListener('resize', () => this.resize());
    }

    resize() {
        this.canvas.width = window.innerWidth;
        this.canvas.height = window.innerHeight;
    }

    createNodes() {
        const nodeCount = Math.floor((this.canvas.width * this.canvas.height) / 15000);
        this.nodes = [];

        for (let i = 0; i < nodeCount; i++) {
            this.nodes.push({
                x: Math.random() * this.canvas.width,
                y: Math.random() * this.canvas.height,
                vx: (Math.random() - 0.5) * 0.5,
                vy: (Math.random() - 0.5) * 0.5,
                size: Math.random() * 2 + 1,
                opacity: Math.random() * 0.5 + 0.2
            });
        }
    }

    updateNodes() {
        this.nodes.forEach(node => {
            // Move nodes
            node.x += node.vx;
            node.y += node.vy;

            // Bounce off edges
            if (node.x < 0 || node.x > this.canvas.width) node.vx *= -1;
            if (node.y < 0 || node.y > this.canvas.height) node.vy *= -1;

            // Mouse interaction
            const dx = this.mouse.x - node.x;
            const dy = this.mouse.y - node.y;
            const distance = Math.sqrt(dx * dx + dy * dy);

            if (distance < 150) {
                const force = (150 - distance) / 150;
                node.x -= dx * force * 0.01;
                node.y -= dy * force * 0.01;
                node.opacity = Math.min(1, node.opacity + force * 0.02);
            } else {
                node.opacity = Math.max(0.2, node.opacity - 0.01);
            }
        });
    }

    findConnections() {
        this.connections = [];
        const maxDistance = 120;

        for (let i = 0; i < this.nodes.length; i++) {
            for (let j = i + 1; j < this.nodes.length; j++) {
                const dx = this.nodes[i].x - this.nodes[j].x;
                const dy = this.nodes[i].y - this.nodes[j].y;
                const distance = Math.sqrt(dx * dx + dy * dy);

                if (distance < maxDistance) {
                    this.connections.push({
                        a: this.nodes[i],
                        b: this.nodes[j],
                        opacity: (maxDistance - distance) / maxDistance
                    });
                }
            }
        }
    }

    draw() {
        this.ctx.clearRect(0, 0, this.canvas.width, this.canvas.height);

        // Draw connections
        this.connections.forEach(connection => {
            const gradient = this.ctx.createLinearGradient(
                connection.a.x, connection.a.y,
                connection.b.x, connection.b.y
            );

            const alpha = connection.opacity * 0.3;
            gradient.addColorStop(0, `rgba(255, 0, 55, ${alpha})`);
            gradient.addColorStop(0.5, `rgba(255, 26, 74, ${alpha * 0.8})`);
            gradient.addColorStop(1, `rgba(255, 51, 102, ${alpha})`);

            this.ctx.strokeStyle = gradient;
            this.ctx.lineWidth = 0.5;
            this.ctx.beginPath();
            this.ctx.moveTo(connection.a.x, connection.a.y);
            this.ctx.lineTo(connection.b.x, connection.b.y);
            this.ctx.stroke();
        });

        // Draw nodes
        this.nodes.forEach(node => {
            const gradient = this.ctx.createRadialGradient(
                node.x, node.y, 0,
                node.x, node.y, node.size * 2
            );

            gradient.addColorStop(0, `rgba(255, 0, 55, ${node.opacity})`);
            gradient.addColorStop(0.5, `rgba(255, 26, 74, ${node.opacity * 0.7})`);
            gradient.addColorStop(1, `rgba(255, 51, 102, 0)`);

            this.ctx.fillStyle = gradient;
            this.ctx.beginPath();
            this.ctx.arc(node.x, node.y, node.size, 0, Math.PI * 2);
            this.ctx.fill();
        });
    }

    animate() {
        this.updateNodes();
        this.findConnections();
        this.draw();
        requestAnimationFrame(() => this.animate());
    }

    addEventListeners() {
        document.addEventListener('mousemove', (e) => {
            this.mouse.x = e.clientX;
            this.mouse.y = e.clientY;
        });

        document.addEventListener('touchmove', (e) => {
            if (e.touches.length > 0) {
                this.mouse.x = e.touches[0].clientX;
                this.mouse.y = e.touches[0].clientY;
            }
        });
    }
}

// Glitch Text Effect
function addGlitchEffect() {
    const profileName = document.querySelector('.profile-name');
    if (!profileName) return;

    let glitchInterval;

    profileName.addEventListener('mouseenter', () => {
        clearInterval(glitchInterval);
        let glitchCount = 0;

        glitchInterval = setInterval(() => {
            if (glitchCount < 5) {
                const randomChars = '!@#$%^&*()_+-=[]{}|;:,.<>?';
                const originalText = 'SILENT SOULS';
                let glitchedText = '';

                for (let i = 0; i < originalText.length; i++) {
                    if (Math.random() < 0.1 && originalText[i] !== ' ') {
                        glitchedText += randomChars[Math.floor(Math.random() * randomChars.length)];
                    } else {
                        glitchedText += originalText[i];
                    }
                }

                profileName.textContent = glitchedText;
                glitchCount++;
            } else {
                profileName.textContent = 'SILENT SOULS';
                clearInterval(glitchInterval);
            }
        }, 50);
    });
}

// Link Hover Effects
function addLinkEffects() {
    const linkItems = document.querySelectorAll('.link-item');

    linkItems.forEach(link => {
        link.addEventListener('mouseenter', () => {
            // Add subtle screen shake
            link.style.animation = 'none';
            link.offsetHeight; // Trigger reflow
            link.style.animation = 'linkHover 0.3s ease-out';
        });

        link.addEventListener('mouseleave', () => {
            link.style.animation = '';
        });
    });

    // Add CSS for link hover animation
    const style = document.createElement('style');
    style.textContent = `
        @keyframes linkHover {
            0% { transform: translateY(0) scale(1); }
            50% { transform: translateY(-3px) scale(1.02); }
            100% { transform: translateY(-2px) scale(1.01); }
        }
    `;
    document.head.appendChild(style);
}

// Avatar Pulse Effect
function addAvatarEffects() {
    const avatar = document.querySelector('.profile-avatar');
    if (!avatar) return;

    setInterval(() => {
        if (!avatar.matches(':hover')) {
            avatar.style.animation = 'none';
            avatar.offsetHeight; // Trigger reflow
            avatar.style.animation = 'avatarPulse 2s ease-in-out';
        }
    }, 3000);

    // Add CSS for avatar pulse
    const style = document.createElement('style');
    style.textContent = `
        @keyframes avatarPulse {
            0%, 100% { transform: scale(1); }
            50% { transform: scale(1.05); }
        }
    `;
    document.head.appendChild(style);
}

// Cyber Loading Effect
function addLoadingEffect() {
    const container = document.querySelector('.linktree-container');
    if (!container) return;

    container.style.opacity = '0';
    container.style.transform = 'translateY(20px)';
    container.style.transition = 'opacity 0.8s ease, transform 0.8s ease';

    setTimeout(() => {
        container.style.opacity = '1';
        container.style.transform = 'translateY(0)';
    }, 100);

    // Stagger link animations
    const links = document.querySelectorAll('.link-item');
    links.forEach((link, index) => {
        link.style.opacity = '0';
        link.style.transform = 'translateX(-20px)';
        link.style.transition = 'opacity 0.5s ease, transform 0.5s ease';

        setTimeout(() => {
            link.style.opacity = '1';
            link.style.transform = 'translateX(0)';
        }, 200 + (index * 100));
    });
}

// Matrix Rain Effect (subtle)
function addMatrixRain() {
    const canvas = document.createElement('canvas');
    canvas.style.position = 'fixed';
    canvas.style.top = '0';
    canvas.style.left = '0';
    canvas.style.width = '100%';
    canvas.style.height = '100%';
    canvas.style.zIndex = '-2';
    canvas.style.opacity = '0.05';
    canvas.style.pointerEvents = 'none';

    document.body.appendChild(canvas);

    const ctx = canvas.getContext('2d');
    canvas.width = window.innerWidth;
    canvas.height = window.innerHeight;

    const chars = '01';
    const fontSize = 14;
    const columns = canvas.width / fontSize;
    const drops = [];

    for (let i = 0; i < columns; i++) {
        drops[i] = 1;
    }

    function drawMatrix() {
        ctx.fillStyle = 'rgba(0, 0, 0, 0.05)';
        ctx.fillRect(0, 0, canvas.width, canvas.height);

        ctx.fillStyle = '#ff0037';
        ctx.font = fontSize + 'px Space Mono';

        for (let i = 0; i < drops.length; i++) {
            const text = chars[Math.floor(Math.random() * chars.length)];
            ctx.fillText(text, i * fontSize, drops[i] * fontSize);

            if (drops[i] * fontSize > canvas.height && Math.random() > 0.975) {
                drops[i] = 0;
            }
            drops[i]++;
        }
    }

    setInterval(drawMatrix, 100);
}

// Initialize everything
document.addEventListener('DOMContentLoaded', () => {
    // Initialize mesh background
    new MeshBackground();

    // Add effects
    addGlitchEffect();
    addLinkEffects();
    addAvatarEffects();
    addLoadingEffect();
    addMatrixRain();

    // Add smooth scroll for any anchor links
    document.querySelectorAll('a[href^="#"]').forEach(anchor => {
        anchor.addEventListener('click', function (e) {
            e.preventDefault();
            const target = document.querySelector(this.getAttribute('href'));
            if (target) {
                target.scrollIntoView({
                    behavior: 'smooth',
                    block: 'start'
                });
            }
        });
    });
});

// Performance optimization
let ticking = false;

function updateOnScroll() {
    // Add any scroll-based effects here
    ticking = false;
}

document.addEventListener('scroll', () => {
    if (!ticking) {
        requestAnimationFrame(updateOnScroll);
        ticking = true;
    }
});