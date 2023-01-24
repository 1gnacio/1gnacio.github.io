document.addEventListener("DOMContentLoaded", function() {
    document.getElementById("send-email").addEventListener("click", function(e) {
        e.preventDefault();
        var name = document.getElementById("name").value;
        var email = document.getElementById("email").value;
        var message = document.getElementById("message").value;
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
    interval: 2000,
    touch: false
    })
});
