const wishlistBtns = document.querySelectorAll(".wishlist-btn");
wishlistBtns.forEach(btn => {
    btn.addEventListener("click",() => {
        const icon = btn.querySelector("i");

        icon.classList.toggle("fa-regular");
        icon.classList.toggle("fa-solid");

        icon.classList.toggle("active");
    });
});

history.scrollRestoration = "manual";
window.addEventListener("load", () => {
    window.scrollTo(0, 0);
});