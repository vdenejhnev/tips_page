const merits = document.querySelectorAll("li.merit")
merits.forEach((merit) => {
    merit.addEventListener("click", () => {
        merit.children[0].children[0].toggleAttribute('checked')
    });
});