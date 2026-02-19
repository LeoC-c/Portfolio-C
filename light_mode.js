var light = document.querySelectorAll(".hero_header_lightmode_btn");

//ForEach cause there is a second button on the HTML
light.forEach(button => {
    button.addEventListener("click", () => {
        document.body.classList.toggle("light_mode");
    });
});