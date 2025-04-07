particlesJS("particles-js", {
    particles: {
        number: { value: 100, density: { enable: true, value_area: 800 } },
        color: { value: "#FF8C00" }, // Darker orange (closer to dark mode contrast)
        shape: { type: "circle" },
        opacity: { value: 1.9, random: true }, // Increased opacity to make particles more visible
        size: { value: 4.5, random: true },
        line_linked: { enable: true, distance: 100, color: "#FF8C00", opacity: 1.5, width: 1.8 }, // Darker & thicker lines
        move: { enable: true, speed: 5, out_mode: "out" } // Increased speed from 1.5 to 3
    },
    interactivity: { detect_on: "canvas" },
    retina_detect: true,
});
