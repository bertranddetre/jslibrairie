const nav = document.querySelector("nav");
// console.log(nav);
window.addEventListener("scroll", () => {
    console.log("scroll");
    if (window.scrollY > 120) { /*120 sont en pixels */
        nav.style.top = 0;
    } else {
        nav.style.top = "-50px";
    }
});