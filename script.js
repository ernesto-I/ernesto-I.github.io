document.addEventListener('DOMContentLoaded', function() {
  
  createParticles();
  
  observeElements();
  
  addSmoothScroll();
  
  addGlitchEffect();
  
  initCardParticles();
  
  initDiscordCopy();
});

function createParticles() {
  const particlesContainer = document.getElementById('particles');
  const particleCount = 50;
  
  for (let i = 0; i < particleCount; i++) {
    const particle = document.createElement('div');
    particle.className = 'particle';
    
    const size = Math.random() * 4 + 2;
    const x = Math.random() * 100;
    const y = Math.random() * 100;
    const duration = Math.random() * 20 + 10;
    const delay = Math.random() * 5;
    
    particle.style.cssText = `
      position: absolute;
      width: ${size}px;
      height: ${size}px;
      background: rgba(99, 102, 241, ${Math.random() * 0.5 + 0.3});
      border-radius: 50%;
      left: ${x}%;
      top: ${y}%;
      animation: float-particle ${duration}s ${delay}s infinite ease-in-out;
      box-shadow: 0 0 ${size * 3}px rgba(99, 102, 241, 0.5);
    `;
    
    particlesContainer.appendChild(particle);
  }
  
  const style = document.createElement('style');
  style.textContent = `
    @keyframes float-particle {
      0%, 100% {
        transform: translate(0, 0) scale(1);
        opacity: 0.3;
      }
      25% {
        transform: translate(20px, -30px) scale(1.2);
        opacity: 0.8;
      }
      50% {
        transform: translate(-20px, -60px) scale(0.8);
        opacity: 0.5;
      }
      75% {
        transform: translate(30px, -30px) scale(1.1);
        opacity: 0.7;
      }
    }
  `;
  document.head.appendChild(style);
}


function initCardParticles() {
  const cards = document.querySelectorAll('.server-card');
  
  cards.forEach(card => {
    const canvas = card.querySelector('.card-particles');
    if (!canvas) return;
    
    const rect = card.getBoundingClientRect();
    canvas.width = rect.width;
    canvas.height = rect.height;
    
    const ctx = canvas.getContext('2d');
    const particles = [];
    let isHovering = false;
    
    card.addEventListener('mouseenter', () => {
      isHovering = true;
      const rect = card.getBoundingClientRect();
      canvas.width = rect.width;
      canvas.height = rect.height;
    });
    
    card.addEventListener('mouseleave', () => {
      isHovering = false;
    });
    
    function animate() {
      if (isHovering) {
        ctx.clearRect(0, 0, canvas.width, canvas.height);
        
        if (Math.random() > 0.6) {
          const edge = Math.floor(Math.random() * 4);
          let x, y, vx, vy;
          
          if (edge === 0) { x = Math.random() * canvas.width; y = 0; vx = (Math.random() - 0.5) * 1; vy = Math.random() * 2 + 1; }
          else if (edge === 1) { x = canvas.width; y = Math.random() * canvas.height; vx = -Math.random() * 2 - 1; vy = (Math.random() - 0.5) * 1; }
          else if (edge === 2) { x = Math.random() * canvas.width; y = canvas.height; vx = (Math.random() - 0.5) * 1; vy = -Math.random() * 2 - 1; }
          else { x = 0; y = Math.random() * canvas.height; vx = Math.random() * 2 + 1; vy = (Math.random() - 0.5) * 1; }
          
          particles.push({
            x: x,
            y: y,
            vx: vx,
            vy: vy,
            size: Math.random() * 6 + 3,
            opacity: 1,
            life: 1
          });
        }
        
        particles.forEach((p, index) => {
          p.x += p.vx;
          p.y += p.vy;
          p.vx *= 0.98;
          p.vy *= 0.98;
          p.life -= 0.02;
          p.opacity = p.life;
          p.size -= 0.08;
          
          if (p.life <= 0 || p.size <= 0) {
            particles.splice(index, 1);
          } else {
            const gradient = ctx.createRadialGradient(p.x, p.y, 0, p.x, p.y, p.size);
            gradient.addColorStop(0, `rgba(56, 189, 248, ${p.opacity})`);
            gradient.addColorStop(0.5, `rgba(14, 165, 233, ${p.opacity * 0.7})`);
            gradient.addColorStop(1, `rgba(6, 182, 212, 0)`);
            
            ctx.beginPath();
            ctx.arc(p.x, p.y, p.size, 0, Math.PI * 2);
            ctx.fillStyle = gradient;
            ctx.shadowBlur = 20;
            ctx.shadowColor = '#06b6d4';
            ctx.fill();
          }
        });
      } else {
        ctx.clearRect(0, 0, canvas.width, canvas.height);
        particles.length = 0;
      }
      
      requestAnimationFrame(animate);
    }
    
    animate();
  });
}

function observeElements() {
  const observer = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
      if (entry.isIntersecting) {
        entry.target.classList.add('aos-animate');
        
        const delay = entry.target.getAttribute('data-aos-delay');
        if (delay) {
          entry.target.style.transitionDelay = `${delay}ms`;
        }
      }
    });
  }, {
    threshold: 0.1,
    rootMargin: '0px 0px -100px 0px'
  });
  
  document.querySelectorAll('[data-aos]').forEach(el => {
    observer.observe(el);
  });
}

function addSmoothScroll() {
  document.querySelectorAll('a[href^="#"]').forEach(anchor => {
    anchor.addEventListener('click', function(e) {
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
}

function addGlitchEffect() {
  const glitchElement = document.querySelector('.glitch');
  if (!glitchElement) return;
  
  setInterval(() => {
    if (Math.random() > 0.95) {
      glitchElement.style.textShadow = `
        ${Math.random() * 5}px ${Math.random() * 5}px 0 #00ffff,
        ${Math.random() * -5}px ${Math.random() * -5}px 0 #ff00ff
      `;
      
      setTimeout(() => {
        glitchElement.style.textShadow = 'none';
      }, 100);
    }
  }, 2000);
}

document.querySelectorAll('.server-card').forEach(card => {
  card.addEventListener('mouseenter', function(e) {
    const rect = this.getBoundingClientRect();
    const x = e.clientX - rect.left;
    const y = e.clientY - rect.top;
    
    this.style.setProperty('--mouse-x', `${x}px`);
    this.style.setProperty('--mouse-y', `${y}px`);
  });
});

const cursorGlow = document.createElement('div');
cursorGlow.style.cssText = `
  position: fixed;
  width: 300px;
  height: 300px;
  background: radial-gradient(circle, rgba(99, 102, 241, 0.15) 0%, transparent 70%);
  pointer-events: none;
  z-index: 9999;
  transform: translate(-50%, -50%);
  transition: opacity 0.3s ease;
  opacity: 0;
`;
document.body.appendChild(cursorGlow);

document.addEventListener('mousemove', (e) => {
  cursorGlow.style.left = e.clientX + 'px';
  cursorGlow.style.top = e.clientY + 'px';
  cursorGlow.style.opacity = '1';
});

document.addEventListener('mouseleave', () => {
  cursorGlow.style.opacity = '0';
});

function initDiscordCopy() {
  const discordUsername = document.getElementById('discordUsername');
  const copyBtn = document.getElementById('copyBtn');
  const copyHint = document.getElementById('copyHint');
  const usernameText = 'ernesto_1574';
  
  if (!discordUsername || !copyBtn || !copyHint) return;
  
  const copyToClipboard = async () => {
    try {
      await navigator.clipboard.writeText(usernameText);
      
      copyHint.textContent = '¡Copiado!';
      copyHint.classList.add('success');
      
      discordUsername.style.background = 'rgba(16, 185, 129, 0.25)';
      discordUsername.style.borderColor = 'rgba(16, 185, 129, 0.5)';
      
      setTimeout(() => {
        copyHint.textContent = 'Haz clic para copiar';
        copyHint.classList.remove('success');
        discordUsername.style.background = 'rgba(88, 101, 242, 0.15)';
        discordUsername.style.borderColor = 'rgba(88, 101, 242, 0.3)';
      }, 2000);
      
    } catch (err) {
      console.error('Error al copiar:', err);
      copyHint.textContent = 'Error al copiar';
      setTimeout(() => {
        copyHint.textContent = 'Haz clic para copiar';
      }, 2000);
    }
  };
  
  discordUsername.addEventListener('click', copyToClipboard);
  copyBtn.addEventListener('click', (e) => {
    e.stopPropagation();
    copyToClipboard();
  });
}
