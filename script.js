document.addEventListener("DOMContentLoaded", function () {
    // GSAP Animations for taglines
    gsap.to(".taglines", { opacity: 1, y: 0, stagger: 0.3, duration: 1.5, ease: "power3.out" });

    // Client Number Animation on Scroll
    window.addEventListener('scroll', function () {
        const clientNumberSection = document.getElementById('client-number');
        const rect = clientNumberSection.getBoundingClientRect();
        if (rect.top < window.innerHeight - 100) {
            clientNumberSection.classList.add('visible');
            // Animate the client's number
            gsap.to(".clients-count", {
                innerText: 100, // Example: change to actual number dynamically
                duration: 3,
                ease: "power3.out",
                snap: { innerText: 1 }
            });
        }
    });

    // Scroll-triggered animation for Mission, Vision, and Policy sections
    window.addEventListener('scroll', function () {
        const sections = document.querySelectorAll('.mission, .vision, .policy');
        sections.forEach(function (section) {
            const rect = section.getBoundingClientRect();
            if (rect.top < window.innerHeight - 100) {
                section.classList.add('visible');
            }
        });
    });
});

// JavaScript to animate the client count with "+" symbol
document.addEventListener("DOMContentLoaded", function () {
    let clientsCount = document.querySelector('.clients-count');
    let count = 0;
    let target = 90; // Change this number to your desired final count
    
    let interval = setInterval(function () {
        if (count < target) {
            count++;
            clientsCount.textContent = count + "+"; // Add "+" after the count
        } else {
            clearInterval(interval);
            clientsCount.textContent = target + "+"; // Ensure the target number displays with "+"
        }
    }, 30); // The interval speed for number animation
});

// GSAP with ScrollTrigger for taglines animation
document.addEventListener("DOMContentLoaded", function () {
    gsap.registerPlugin(ScrollTrigger);

    // Tagline Animation
    gsap.from(".tagline1", {
        scrollTrigger: {
            trigger: ".about-content",
            start: "top 80%", // Trigger animation when about-content is 80% in the viewport
            end: "bottom top",
            scrub: true,
            toggleActions: "play none none reverse", // Play animation when scrolling in, reverse on scroll out
        },
        x: "-100vw", // Start from the left
        opacity: 0,
        duration: 1.5,
        ease: "power4.out",
        textShadow: "0 0 15px rgba(255, 184, 30, 1)", // Orange glow effect
        stagger: 0.3,
    });

    gsap.from(".tagline2", {
        scrollTrigger: {
            trigger: ".about-content",
            start: "top 80%",
            end: "bottom top",
            scrub: true,
            toggleActions: "play none none reverse",
        },
        x: "100vw", // Start from the right
        opacity: 0,
        duration: 1.5,
        ease: "power4.out",
        textShadow: "0 0 15px rgba(255, 184, 30, 1)", // Orange glow effect
        stagger: 0.3,
    });

    gsap.from(".tagline3", {
        scrollTrigger: {
            trigger: ".about-content",
            start: "top 80%",
            end: "bottom top",
            scrub: true,
            toggleActions: "play none none reverse",
        },
        y: "100px", // Start from bottom and slide up
        opacity: 0,
        duration: 1.5,
        ease: "power4.out",
        textShadow: "0 0 15px rgba(255, 184, 30, 1)", // Orange glow effect
    });
});

gsap.from(".about-us-section .animate", {
    opacity: 0,
    y: 50,
    duration: 2.0,
    stagger: 0.3,
    ease: "power2.out",
    scale: 0.95,   // Shrinks slightly before appearing
    rotateX: 10,   // Slight 3D effect
    scrollTrigger: {
        trigger: ".about-us-section",
        start: "top 80%",
        toggleActions: "play none none none",
    }
});


document.addEventListener("DOMContentLoaded", function () {
    const aboutUsSection = document.querySelector(".about-us");

    function revealOnScroll() {
        const sectionPos = aboutUsSection.getBoundingClientRect().top;
        const screenPos = window.innerHeight / 1.3; // Adjust visibility trigger point

        if (sectionPos < screenPos) {
            aboutUsSection.classList.add("visible");
        }
    }

    window.addEventListener("scroll", revealOnScroll);
});


document.addEventListener("DOMContentLoaded", function () {
    const serviceItems = document.querySelectorAll(".service-item");
    const shipIcon = document.querySelector(".ship-icon");

    function handleScroll() {
        let activeIndex = -1;

        serviceItems.forEach((item, index) => {
            const rect = item.getBoundingClientRect();
            if (rect.top < window.innerHeight) { // Triggers almost immediately
                item.classList.add("active");
                activeIndex = index;
            } else {
                item.classList.remove("active");
            }
        });

        if (activeIndex >= 0) {
            let activeElement = serviceItems[activeIndex];
            let activeTop = activeElement.offsetTop - 60; // Adjusts to stay on top of the frame
            
            // ✅ Slower transition (1.5s) for smoother movement
            shipIcon.style.transition = "top 1.5s ease-in-out"; 
            shipIcon.style.top = activeTop + "px";
        }
    }

    window.addEventListener("scroll", handleScroll);
    handleScroll();
});

document.addEventListener("DOMContentLoaded", function () {
    const servicesSection = document.getElementById("services");
    
    // Create and style canvas
    const canvas = document.createElement("canvas");
    canvas.id = "services-bg";
    canvas.style.position = "absolute";
    canvas.style.top = "0";
    canvas.style.left = "0";
    canvas.style.width = "100%";
    canvas.style.height = "100%";
    canvas.style.zIndex = "0"; // Keeps it behind the content
    servicesSection.appendChild(canvas);
    
    const ctx = canvas.getContext("2d");
    
    function resizeCanvas() {
        canvas.width = servicesSection.offsetWidth;
        canvas.height = servicesSection.offsetHeight;
    }
    
    resizeCanvas();
    
    let particles = [];
    
    class Particle {
        constructor() {
            this.x = Math.random() * canvas.width;
            this.y = Math.random() * canvas.height;
            this.radius = Math.random() * 3 + 1;
            this.speedX = (Math.random() - 0.5) * 0.6;
            this.speedY = (Math.random() - 0.5) * 0.6;
        }
        
        move() {
            this.x += this.speedX;
            this.y += this.speedY;
            if (this.x < 0 || this.x > canvas.width) this.speedX *= -1;
            if (this.y < 0 || this.y > canvas.height) this.speedY *= -1;
        }
        
        draw() {
            ctx.fillStyle = "rgba(255, 255, 255, 0.3)";
            ctx.beginPath();
            ctx.arc(this.x, this.y, this.radius, 0, Math.PI * 2);
            ctx.fill();
        }
    }
    
    function initParticles() {
        particles = [];
        for (let i = 0; i < 80; i++) particles.push(new Particle());
    }
    
    function animateParticles() {
        ctx.clearRect(0, 0, canvas.width, canvas.height);
        particles.forEach(p => {
            p.move();
            p.draw();
        });
        requestAnimationFrame(animateParticles);
    }
    
    initParticles();
    animateParticles();
    
    window.addEventListener("resize", () => {
        resizeCanvas();
        initParticles();
    });
});




