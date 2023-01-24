document.addEventListener("DOMContentLoaded", function() {
    document.getElementById("send-email").addEventListener("click", function(e) {
        e.preventDefault();
        var name = document.getElementById("name").value;
        var email = document.getElementById("email").value;
        var message = document.getElementById("message").value;
        var hasErrors = false;
        var validElements = document.getElementsByClassName("is-valid");
        var invalidElements = document.getElementsByClassName("is-invalid");
        
        message = message.replace(/(\r\n|\n|\r)/gm, "%0D%0A");

        while (validElements.length > 0) {
            validElements[0].classList.remove("is-valid");
        }

        while (invalidElements.length > 0) {
            invalidElements[0].classList.remove("is-invalid");
        }

        if (name == ""){
            document.getElementById("name-validation").style.display = "block";
            document.getElementById("name").classList.add("is-invalid");
            hasErrors = true;
        } else {
            document.getElementById("name-validation").style.display = "none";
            document.getElementById("name").classList.add("is-valid");
        }

        if (email == ""){
            document.getElementById("email-validation").style.display = "block";
            document.getElementById("email").classList.add("is-invalid");
            hasErrors = true;
        } else {
            document.getElementById("email-validation").style.display = "none";
            document.getElementById("email").classList.add("is-valid");
        }

        if (message == ""){
            document.getElementById("message-validation").style.display = "block";
            document.getElementById("message").classList.add("is-invalid");
            hasErrors = true;
        } else {
            document.getElementById("message-validation").style.display = "none";
            document.getElementById("message").classList.add("is-valid");
        }

        if (hasErrors) {
            return false;
        }

        var mailto = "mailto:igarcia@fi.uba.ar?subject=New contact form submission from " + name + "&body=" + message + " %0D%0A %0D%0A From: " + email;
        window.location.href = mailto;
    });

    // Get all the links with the class "scroll"
    var links = document.querySelectorAll('.scroll');

    // Add a click event listener to each link
    for (var i = 0; i < links.length; i++) {
        links[i].addEventListener('click', function(event) {
            // Prevent the default link behavior
            event.preventDefault();

            // Get the target element's id from the link's href
            var id = this.getAttribute('href');

            // Get the target element
            var target = document.querySelector(id);

            // Calculate the distance from the top of the page to the target element
            var distance = target.getBoundingClientRect().top;

            // Scroll the page smoothly to the target element
            window.scrollBy({
                top: distance,
                behavior: 'smooth',
                duration: 5000
            });
            
        });
    }

    const myCarouselElement = document.querySelector('#carouselExampleCaptions')

    const carousel = new bootstrap.Carousel(myCarouselElement, {
    interval: 6000,
    touch: false
    })

});
