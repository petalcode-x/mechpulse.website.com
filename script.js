function toggleMenu() {

    const menu = document.getElementById("navMenu");

    menu.classList.toggle("active");

}


const links = document.querySelectorAll("#navMenu a");

links.forEach(function(link) {

    link.addEventListener("click", function() {

        document
            .getElementById("navMenu")
            .classList.remove("active");

    });

});