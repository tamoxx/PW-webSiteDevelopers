/* =====================================================
   ANIMAÇÕES AO ROLAR
===================================================== */

const elementosReveal = document.querySelectorAll(
    ".section-header, " +
    ".why-content, " +
    ".benefits-grid, " +
    ".projects-header, " +
    ".project-featured, " +
    ".project-card, " +
    ".process-header, " +
    ".process-card, " +
    ".cta-box"
);


const observer = new IntersectionObserver(

    (entries) => {

        entries.forEach((entry) => {

            if (entry.isIntersecting) {

                entry.target.classList.add("active");

                observer.unobserve(entry.target);

            }

        });

    },

    {
        threshold: 0.12
    }

);


elementosReveal.forEach((elemento) => {

    elemento.classList.add("reveal");

    observer.observe(elemento);

});


/* =====================================================
   HEADER AO ROLAR
===================================================== */

const header = document.querySelector("header");


window.addEventListener("scroll", () => {

    if (!header) return;


    if (window.scrollY > 50) {

        header.classList.add("header-scrolled");

    } else {

        header.classList.remove("header-scrolled");

    }

});
