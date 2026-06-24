// Smooth scrolling
const links = document.querySelectorAll("nav a");

links.forEach(link => {
    link.addEventListener("click", function(e) {
        e.preventDefault();

        const targetId = this.getAttribute("href");
        const targetSection = document.querySelector(targetId);

        if(targetSection){
            targetSection.scrollIntoView({
                behavior: "smooth"
            });
        }
    });
});

// Sign Up buttons
const buttons = document.querySelectorAll("button");

buttons.forEach(button => {
    button.addEventListener("click", () => {
        alert("Thank you for your interest! Sign up feature coming soon.");
    });
});

// Gallery animation
const galleryItems = document.querySelectorAll(".gallery-item");

galleryItems.forEach((item, index) => {
    item.style.opacity = "0";
    item.style.transform = "translateY(30px)";

    setTimeout(() => {
        item.style.transition = "0.8s";
        item.style.opacity = "1";
        item.style.transform = "translateY(0)";
    }, index * 300);
});