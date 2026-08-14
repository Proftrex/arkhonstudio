/* =====================================================
   ARKHON STUDIO V1.1
   ===================================================== */


/* =====================================================
   IDEA FORM
   ===================================================== */


   const ARKHON_FORM_URL = "https://script.google.com/macros/s/AKfycby3q8vxAox6iW8MFJ9fImkjfXOEPyQ1ZR34i-jumU3I5dTlGv6ZF1xgBch-yjv6fVRY/exec";


const ideaForm = document.getElementById("ideaForm");
const formMessage = document.getElementById("formMessage");


if (ideaForm) {

  ideaForm.addEventListener("submit", function (event) {

    event.preventDefault();


    const name =
      document.getElementById("name").value.trim();

    const email =
      document.getElementById("email").value.trim();

    const idea =
      document.getElementById("idea").value.trim();


    if (!name || !email || !idea) {

      formMessage.textContent =
        "Hey, give us at least your name, email, and idea. 👀";

      formMessage.style.color = "#d94c4c";

      return;
    }


    const button =
      ideaForm.querySelector(".submit-button");


    button.disabled = true;

    button.textContent =
      "Sending your weird idea...";


    try {

  const data = {
    name: document.getElementById("name").value.trim(),
    email: document.getElementById("email").value.trim(),
    idea: document.getElementById("idea").value.trim(),
    why: document.getElementById("why").value.trim()
  };


  fetch(ARKHON_FORM_URL, {

    method: "POST",

    mode: "no-cors",

    headers: {
      "Content-Type": "text/plain;charset=utf-8"
    },

    body: JSON.stringify(data)

  });


  /*
   * Show success message after sending
   */

  setTimeout(function () {

    ideaForm.innerHTML = `

      <div class="success-message">

        <div style="
          font-size: 55px;
          margin-bottom: 20px;
        ">
          ✦
        </div>

        <h3 style="
          font-size: 35px;
          margin: 0 0 15px;
        ">
          Got it.
        </h3>

        <p style="
          color: #666;
          line-height: 1.5;
        ">
          Now we have another idea to think about.
        </p>

        <p style="
          font-size: 28px;
          margin-top: 25px;
        ">
          🤨 💡 🛠️
        </p>

      </div>

    `;

  }, 900);


} catch (error) {

  button.disabled = false;

  button.textContent =
    "Send the idea →";

  formMessage.textContent =
    "Something went wrong. Try again.";

  formMessage.style.color =
    "#d94c4c";

}

  });

}


/* =====================================================
   PROJECT LINKS
   ===================================================== */

document.querySelectorAll(".project-link").forEach(function (link) {

  link.addEventListener("click", function (event) {

    const href = link.getAttribute("href");

    if (!href || href === "#") {

      event.preventDefault();

    }

  });

});


/* =====================================================
   SIMPLE SCROLL REVEAL
   ===================================================== */

const revealElements = document.querySelectorAll(
  ".project-card, .idea-note, .intro-grid, .tell-grid"
);


const revealObserver =
  new IntersectionObserver(

    function (entries) {

      entries.forEach(function (entry) {

        if (entry.isIntersecting) {

          entry.target.classList.add("revealed");

          revealObserver.unobserve(entry.target);

        }

      });

    },

    {
      threshold: 0.12
    }

  );


revealElements.forEach(function (element) {

  element.style.opacity = "0";

  element.style.transform +=
    " translateY(20px)";

  element.style.transition =
    "opacity 0.6s ease, transform 0.6s ease";

  revealObserver.observe(element);

});


/* =====================================================
   REVEAL CLASS
   ===================================================== */

const revealStyle =
  document.createElement("style");

revealStyle.textContent = `

  .revealed {
    opacity: 1 !important;
    transform: none !important;
  }

`;

document.head.appendChild(revealStyle);


/* =====================================================
   CURSOR TILT — DESKTOP ONLY
   ===================================================== */

if (window.matchMedia("(min-width: 801px)").matches) {

  document
    .querySelectorAll(".project-card")
    .forEach(function (card) {

      card.addEventListener("mousemove", function (event) {

        const rect =
          card.getBoundingClientRect();

        const x =
          event.clientX - rect.left;

        const y =
          event.clientY - rect.top;

        const centerX =
          rect.width / 2;

        const centerY =
          rect.height / 2;

        const rotateX =
          ((y - centerY) / centerY) * -2;

        const rotateY =
          ((x - centerX) / centerX) * 2;


        card.style.transform =
          `perspective(800px)
           rotateX(${rotateX}deg)
           rotateY(${rotateY}deg)
           translateY(-5px)`;

      });


      card.addEventListener("mouseleave", function () {

        card.style.transform = "";

      });

    });

}


/* =====================================================
   CURRENT YEAR
   ===================================================== */

const yearElements =
  document.querySelectorAll(".copyright");


yearElements.forEach(function (element) {

  element.textContent =
    `© ${new Date().getFullYear()} ARKHON STUDIO`;

});