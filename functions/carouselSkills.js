const skillsData = {
    frontend: [
        { name: 'HTML', icon: '', class: 'chip-html' },
        { name: 'CSS', icon: '', class: 'chip-css' },
        { name: 'Tailwind', icon: '', class: 'chip-tailwind' },
        { name: 'React', icon: '', class: 'chip-react' },
        { name: 'Next.js', icon: '', class: 'chip-next' }
    ],
    backend: [
        { name: 'Discord.js', icon: '', class: 'chip-discord' },
        { name: 'Elysia', icon: 'https://i.imgur.com/eID7Yh4.png', class: 'chip-elysia' },
        { name: 'JavaScript', icon: '', class: 'chip-javascript' },
        { name: 'TypeScript', icon: '', class: 'chip-typescript' },
        { name: 'Python', icon: '', class: 'chip-python' },
        { name: 'Java', icon: '', class: 'chip-java' }
    ],
    other: [
        { name: 'GitHub', icon: '', class: 'chip-github' },
        { name: 'NPM', icon: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/npm/npm-original-wordmark.svg', class: 'chip-npm' },
        { name: 'VS Code', icon: '', class: 'chip-vscode' },
        { name: 'IntelliJ IDEA', icon: 'https://i.imgur.com/OfGZ98A.png', class: 'chip-intellij' },
        { name: 'NetBeans', icon: 'https://i.imgur.com/tB9AFJw.png', class: 'chip-netbeans' },
        { name: 'Insomnia', icon: 'https://i.imgur.com/1sRmXFv.png', class: 'chip-insomnia' },
        { name: 'Cloudflare', icon: '', class: 'chip-cloudflare' },
        { name: 'Postman', icon: '', class: 'chip-postman' },
        { name: 'Git', icon: '', class: 'chip-git' },
        { name: 'Linux', icon: '', class: 'chip-linux' }
    ]
};

/* --- ICON URL MAPPING --- */

function getDeviconUrl(name) {
    const iconMap = {
        'HTML': 'html5',
        'CSS': 'css3',
        'Tailwind': 'tailwindcss',
        'React': 'react',
        'Next.js': 'nextjs',
        'JavaScript': 'javascript',
        'TypeScript': 'typescript',
        'Python': 'python',
        'Java': 'java',
        'GitHub': 'github',
        'Postman': 'postman',
        'NPM': 'npm/npm-original-wordmark',
        'VS Code': 'vscode',
        'Cloudflare': 'cloudflare',
        'Git': 'git',
        'Discord.js': 'discordjs',
        'Linux': 'linux',
    };

    const folder = iconMap[name] || name.toLowerCase().replace(/\./g, '').replace(/\s+/g, '');
    return `https://cdn.jsdelivr.net/gh/devicons/devicon/icons/${folder}/${folder}-original.svg`;
}

/* --- TECH CHIP CREATION --- */

function createTechChip(tech) {
    let iconHtml = '';

    if (tech.icon.startsWith('fa')) {
        iconHtml = `<i class="${tech.icon}"></i>`;
    } else if (tech.icon.startsWith('http')) {
        iconHtml = `<img src="${tech.icon}" alt="${tech.name} icon" />`;
    } else {
        const iconUrl = getDeviconUrl(tech.name);
        iconHtml = `<img src="${iconUrl}" alt="${tech.name} icon" />`;
    }

    let techUrl = '#';
    switch (tech.name) {
        case "HTML": techUrl = "https://developer.mozilla.org/en-US/docs/Web/HTML"; break;
        case "CSS": techUrl = "https://developer.mozilla.org/en-US/docs/Web/CSS"; break;
        case "Tailwind": techUrl = "https://tailwindcss.com"; break;
        case "React": techUrl = "https://reactjs.org"; break;
        case "Next.js": techUrl = "https://nextjs.org"; break;
        case "Discord.js": techUrl = "https://discord.js.org"; break;
        case "Elysia": techUrl = "https://elysiajs.com"; break;
        case "JavaScript": techUrl = "https://developer.mozilla.org/en-US/docs/Web/JavaScript"; break;
        case "TypeScript": techUrl = "https://www.typescriptlang.org"; break;
        case "Python": techUrl = "https://www.python.org"; break;
        case "Java": techUrl = "https://www.java.com"; break;
        case "GitHub": techUrl = "https://github.com"; break;
        case "VS Code": techUrl = "https://code.visualstudio.com"; break;
        case "Insomnia": techUrl = "https://insomnia.rest"; break;
        case "Cloudflare": techUrl = "https://www.cloudflare.com"; break;
        case "Postman": techUrl = "https://www.postman.com"; break;
        case "Git": techUrl = "https://git-scm.com"; break;
        case "NPM": techUrl = "https://www.npmjs.com"; break;
        case "Linux": techUrl = "https://www.linux.org"; break;
        case "IntelliJ IDEA": techUrl = "https://www.jetbrains.com/idea"; break;
        case "NetBeans": techUrl = "https://netbeans.apache.org"; break;
    }

    return `
        <a href="${techUrl}" target="_blank" rel="noopener noreferrer" class="tech-chip ${tech.class}" title="${tech.name}">
            ${iconHtml}
            <span>${tech.name}</span>
        </a>
    `;
}

/* --- CAROUSEL POPULATION --- */

function populateCarousel(carouselId, techs) {
    const carousel = document.getElementById(carouselId);
    if (!carousel) return;
    const content = techs.map(createTechChip).join('');
    carousel.innerHTML = content + content;
}

/* --- ANIMATION CHECK --- */

function shouldAnimate(containerWidth, contentWidth) {
    return contentWidth > containerWidth;
}

/* --- SMOOTH CAROUSEL CLASS --- */

class SmoothCarousel {
    constructor(element, speed = 1) {
        this.element = element;
        this.speed = speed;
        this.position = 0;
        this.isHovered = false;
        this.animationFrame = null;
        this.lastTimestamp = 0;

        this.init();
    }

    init() {
        const content = this.element.innerHTML;
        this.element.innerHTML = content + content;
        this.element.style.display = 'flex';
        this.element.style.gap = '16px';

        this.setupEvents();
        this.animate();
    }

    setupEvents() {
        const container = this.element.parentElement;

        container.addEventListener('mouseenter', () => {
            this.isHovered = true;
        });

        container.addEventListener('mouseleave', () => {
            this.isHovered = false;
        });
    }

    animate(timestamp = 0) {
        if (!this.lastTimestamp) this.lastTimestamp = timestamp;

        const delta = timestamp - this.lastTimestamp;
        this.lastTimestamp = timestamp;

        if (!this.isHovered) {
            this.position += (this.speed * delta) / 16;
            if (this.position >= this.element.scrollWidth / 2) {
                this.position = 0;
            }
            this.element.style.transform = `translateX(${-this.position}px)`;
        }

        this.animationFrame = requestAnimationFrame(this.animate.bind(this));
    }

    destroy() {
        if (this.animationFrame) {
            cancelAnimationFrame(this.animationFrame);
        }
    }
}

/* --- CAROUSEL SETUP --- */

function setupCarousels() {
    const carousels = [
        { id: 'frontend-carousel', data: skillsData.frontend, row: 'frontend-row', speed: 1.2 },
        { id: 'backend-carousel', data: skillsData.backend, row: 'backend-row', speed: 1.0 },
        { id: 'other-carousel', data: skillsData.other, row: 'other-row', speed: 1.5 }
    ];

    if (window.carouselInstances) {
        window.carouselInstances.forEach(instance => instance.destroy());
    }
    window.carouselInstances = [];

    carousels.forEach(({id, data, row, speed}) => {
        populateCarousel(id, data);

        const rowElement = document.getElementById(row);
        const carouselElement = document.getElementById(id);

        if (rowElement && carouselElement) {
            requestAnimationFrame(() => {
                const containerWidth = rowElement.offsetWidth;
                const contentWidth = carouselElement.scrollWidth;

                if (!shouldAnimate(containerWidth, contentWidth)) {
                    rowElement.classList.remove('animated');
                    rowElement.classList.add('static');
                } else {
                    rowElement.classList.add('animated');
                    const instance = new SmoothCarousel(carouselElement, speed);
                    window.carouselInstances.push(instance);
                }
            });
        }
    });
}

/* --- ANIMATION ON SCROLL --- */

const observer = new IntersectionObserver((entries) => {
    entries.forEach((entry, index) => {
        if (entry.isIntersecting) {
            setTimeout(() => {
                entry.target.classList.add('animate-in');
            }, index * 200);
            observer.unobserve(entry.target);
        }
    });
}, {
    threshold: 0.1,
    rootMargin: '0px 0px -50px 0px'
});

function initializeAnimations() {
    document.querySelectorAll('.skills-block').forEach(block => observer.observe(block));
}

/* --- WINDOW EVENTS --- */

function handleResize() {
    if (window.resizeTimeout) {
        cancelAnimationFrame(window.resizeTimeout);
    }
    window.resizeTimeout = requestAnimationFrame(setupCarousels);
}

/* --- MAIN EXPORT FUNCTION --- */

export function carouselSkills() {
    setupCarousels();
    initializeAnimations();
    window.addEventListener('resize', handleResize);
}
