document.getElementById('contact-form').addEventListener('submit', function(event) {
    event.preventDefault();

    const name = document.getElementById('name').value;
    const email = document.getElementById('email').value;
    const message = document.getElementById('message').value;

    const templateParams = {
        from_name: name,
        from_email: email,
        message: message
    };

    emailjs.send('service_0l2kf56', 'template_zbs6j5p', templateParams)
        .then(function(response) {
            console.log('SUCCESS!', response.status, response.text);
            alert('Thank you for your message!');
        }, function(error) {
            console.log('FAILED...', error);
            alert('Oops! Something went wrong.');
        });
});

// Call the function to create shapes with reduced animation speed
document.addEventListener('DOMContentLoaded', function(){
    createShapes();
    setupNavigation();
});


function createShapes() {
    const backgroundAnimation = document.getElementById('background-animation');
    const shapes = ['circle', 'triangle', 'rectangle'];

    for (let i = 0; i < 100; i++) {
        const shapeType = shapes[Math.floor(Math.random() * shapes.length)];
        const shape = document.createElement('div');
        shape.classList.add('shape', shapeType);
        shape.style.top = `${Math.random() * 100}vh`;
        shape.style.left = `${Math.random() * 100}vw`;
        shape.style.animationDuration = `${20 + Math.random() * 20}s`; // Adjust animation speed
        backgroundAnimation.appendChild(shape);
    }
}

function setupNavigation() {
    const link = document.querySelectorAll('nav ul li a');
    links.forEach(link => {
        link.addEventListener('click', function(event) {
            event.preventDefault();
            const targetId = this.getAttribute('href').substring(1);
            const targetElement = document.getElementById(targetId);
            targetElement.scrollIntoView({ behavior: 'smooth' });
        });
    });
}
