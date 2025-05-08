document.getElementById("menu-toggle").addEventListener("click", function () {
    var menu = document.getElementById("nav-menu");
    menu.style.display = (menu.style.display === "block") ? "none" : "block";
});

document.querySelectorAll('a[href^="#"]').forEach(anchor => {
    anchor.addEventListener("click", function (e) {
        e.preventDefault();
        document.querySelector(this.getAttribute("href")).scrollIntoView({
            behavior: "smooth"
        });
    });
});

document.addEventListener("DOMContentLoaded", function () {
    document.querySelector("footer p").innerHTML = `&copy; ${new Date().getFullYear()} T. Morris Painting & Decorating. All Rights Reserved.`;
});


