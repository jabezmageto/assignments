document.getElementById('contactForm').addEventListener('submit', function(event) {
    event.preventDefault(); // Prevent default form submission

    // Get form values
    const name = document.getElementById('name').value.trim();
    const email = document.getElementById('email').value.trim();
    const subject = document.getElementById('subject').value.trim();
    const message = document.getElementById('message').value.trim();

    // Validate form fields
    if (!name || !email || !subject || !message) {
        document.getElementById('status').textContent = 'Please fill in all fields.';
        document.getElementById('status').style.color = 'red';
        return;
    }

    // Prepare template parameters
    const templateParams = {
        from_name: name,
        from_email: email,
        subject: subject,
        message: message
    };

    // Send the email using EmailJS
    emailjs.send('service_gmail', 'template_dklwy4k', templateParams)
        .then(function(response) {
            console.log('SUCCESS!', response.status, response.text);
            document.getElementById('status').textContent = 'Message sent successfully!';
            document.getElementById('status').style.color = 'green';
            document.getElementById('contactForm').reset();
        }, function(error) {
            console.log('FAILED...', error);
            document.getElementById('status').textContent = 'Failed to send message. Please try again later.';
            document.getElementById('status').style.color = 'red';
        });
});
