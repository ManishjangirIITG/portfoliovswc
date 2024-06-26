document.getElementById('contact-form').addEventListener('submit', function(event) {
    event.preventDefault();

    const name = document.getElementById('name').value;
    const email = document.getElementById('email').value;
    const message = document.getElementById('message').value;

    if (name && email && message) {
        alert(`Thank you, ${name}! Your message has been sent.`);
        this.reset();
    } else {
        alert('Please fill out all fields.');
    }
});

// Smooth scrolling for navigation links
document.querySelectorAll('header a').forEach(anchor => {
    anchor.addEventListener('click', function(e) {
        e.preventDefault();

        const sectionId = this.getAttribute('href').substring(1);
        const section = document.getElementById(sectionId);

        window.scrollTo({
            top: section.offsetTop,
            behavior: 'smooth'
        });
    });
});

// Form validation
// document.getElementById('contact-form').addEventListener('submit', function(event) {
//     event.preventDefault();

//     // Get form data
//     const formData = new FormData(this);
//     const formDataObject = {};
//     formData.forEach((value, key) => {
//         formDataObject[key] = value;
//     });

//     // Example: Send form data to server using fetch API
//     fetch('/submit', {
//         method: 'POST',
//         body: JSON.stringify(formDataObject),
//         headers: {
//             'Content-Type': 'application/json'
//         }
//     })
//     .then(response => response.json())
//     .then(data => {
//         console.log(data);
//         // Handle response, e.g., display success message
//     })
//     .catch(error => {
//         console.error('Error:', error);
//         // Handle error, e.g., display error message
//     });
// });


// Highlight active navigation link based on scroll position
window.addEventListener('scroll', function() {
    const scrollPosition = window.scrollY;

    document.querySelectorAll('header a').forEach(anchor => {
        const sectionId = anchor.getAttribute('href').substring(1);
        const section = document.getElementById(sectionId);

        if (section) {
            if (section.offsetTop <= scrollPosition && section.offsetTop + section.offsetHeight > scrollPosition) {
                anchor.classList.add('active');
            } else {
                anchor.classList.remove('active');
            }
        }
    });
});



