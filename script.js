// ===============================
// MOBILE MENU
// ===============================

const menuToggle = document.querySelector(".menu-toggle");

const nav = document.querySelector("nav");

menuToggle.addEventListener("click", () => {

    nav.classList.toggle("active");

});

// ===============================
// LIGHTBOX
// ===============================

const galleryImages =
    document.querySelectorAll(".gallery-card img");

const lightbox =
    document.querySelector(".lightbox");

const lightboxImg =
    document.querySelector(".lightbox-img");

const closeBtn =
    document.querySelector(".close-btn");


// OPEN LIGHTBOX

galleryImages.forEach(image => {

    image.addEventListener("click", () => {

        lightbox.classList.add("active");

        lightboxImg.src = image.src;

    });

});


// CLOSE LIGHTBOX

closeBtn.addEventListener("click", () => {

    lightbox.classList.remove("active");

});


// CLOSE ON OUTSIDE CLICK

lightbox.addEventListener("click", (e) => {

    if (e.target === lightbox) {

        lightbox.classList.remove("active");

    }

});