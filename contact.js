document.getElementById('contactForm').addEventListener('submit', function(event) {
    event.preventDefault(); // Prevent the default form submission
    
    // Get form values
    const name = document.getElementById('name').value;
    const email = document.getElementById('email').value;
    const message = document.getElementById('message').value;

    const data = new FormData();
    data.append('access_key', '59b3ba11-381c-41dd-8e77-da490f71730d');
    data.append('name', name);
    data.append('email', email);
    data.append('message', message);

    fetch('https://api.web3forms.com/submit', {
      method: 'POST',
      body: data,
    })
    .then(response => {
      if (!response.ok) {
        throw new Error('Network response was not ok');
      }
      return response.json();
    })
    .then(data => {
      console.log('Success:', data);
      alert('Message sent successfully!');
      document.getElementById('contactForm').reset();
    })
    .catch(error => {
      console.error('Error:', error);
      alert('There was an error sending your message. Please try again later.');
    });
  });