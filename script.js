/* =========================================================
   TITUS NYUMA KORFEH
   Main JavaScript
========================================================= */


/* =========================================================
   MOBILE NAVIGATION
========================================================= */

const menuToggle = document.querySelector(".menu-toggle");
const navMenu = document.querySelector(".nav-menu");

if (menuToggle && navMenu) {

    menuToggle.addEventListener("click", () => {

        navMenu.classList.toggle("active");

    });


    const navLinks = document.querySelectorAll(".nav-menu a");

    navLinks.forEach(link => {

        link.addEventListener("click", () => {

            navMenu.classList.remove("active");

        });

    });

}


/* =========================================================
   CONTACT FORM
========================================================= */

const contactForm = document.getElementById("contactForm");

if (contactForm) {

    contactForm.addEventListener("submit", function(event) {

        event.preventDefault();


        const name = document.getElementById("name").value.trim();

        const email = document.getElementById("email").value.trim();

        const subject = document.getElementById("subject").value.trim();

        const message = document.getElementById("message").value.trim();


        const recipient = "titusnkorfeh@gmail.com";


        const emailSubject = encodeURIComponent(
            subject
        );


        const emailBody = encodeURIComponent(
`Dear Professor Korfeh,

My name is ${name}.

My email address is: ${email}

Message:

${message}


Best regards,
${name}`
        );


        const mailtoLink =
            `mailto:${recipient}?subject=${emailSubject}&body=${emailBody}`;


        window.location.href = mailtoLink;

    });

}