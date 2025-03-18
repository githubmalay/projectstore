const projects = [
    {
        title: 'E-Commerce Website',
        description: 'A complete e-commerce solution without payment gateway. There is 2 User Panel(Admin Panel, Customer panel) available.',
        price: '₹4999',
        features: ['User Dashboard', 'Order Management', 'Product Management', 'Feedback Management', 'Order Report'],
        images: [
            'ec01.2.png',
            'ec02.png'
        ]
    },
    {
        title: 'Bus Booking System',
        description: 'A fully automated bus booking platform with seat selection.',
        price: '$120',
        features: ['Seat Selection', 'Route Management', 'Payment Integration'],
        images: [
            'p2.png',
            'p3.png'
        ]
    },
    {
        title: 'Hotel Booking Website',
        description: 'A modern hotel booking platform with real-time availability.',
        price: '$150',
        features: ['Room Availability', 'User Reviews', 'Secure Payment'],
        images: [
            'p3.png',
            'p4.png'
        ]
    },
    {
        title: 'Rental E-Commerce Website',
        description: 'A rental platform for products with secure payment processing.',
        price: '$110',
        features: ['User Dashboard', 'Rental Management', 'Payment Gateway'],
        images: [
            'p4.png',
            'p5.png'
        ]
    },
    {
        title: 'Rental Bus Booking System',
        description: 'A bus rental platform with route selection and seat availability.',
        price: '$130',
        features: ['Route Management', 'Payment Integration', 'Booking History'],
        images: [
            'p5.png',
            'p1.png'
        ]
    },
    {
        title: 'Cab Booking App',
        description: 'A taxi booking platform with driver tracking and secure payments.',
        price: '$140',
        features: ['Driver Tracking', 'Payment Integration', 'Ride History'],
        images: [
            'p1.png',
            'p2.png'
        ]
    },
    {
        title: 'Food Delivery Website',
        description: 'An online food delivery platform with real-time order tracking.',
        price: '$125',
        features: ['Restaurant Listings', 'Order Tracking', 'Payment Gateway'],
        images: [
            'p2.png',
            'p3.png'
        ]
    },
    {
        title: 'Campus Recruitment System',
        description: 'A platform for managing campus recruitment processes.',
        price: '$135',
        features: ['Company Listings', 'Student Registration', 'Interview Scheduling'],
        images: [
            'p4.png',
            'p5.png'
        ]
    }
];


// Load Projects
const projectList = document.getElementById('projectList');
projectList.innerHTML = '';
projects.forEach((project, index) => {
    projectList.innerHTML += `
        <div class="col-md-3 mb-4">
            <div class="card" onclick="showProject(${index})">
                <img src="${project.images[0]}" class="card-img-top" alt="${project.title}">
                <div class="card-body">
                    <h5>${project.title}</h5>
                    <span class="price">${project.price}</span>
                </div>
            </div>
        </div>`;
});

// Show Modal
function showProject(index) {
    const project = projects[index];
    document.getElementById('modalTitle').innerText = project.title;
    document.getElementById('modalDescription').innerText = project.description;
    document.getElementById('modalPrice').innerText = project.price;
    document.getElementById('modalFeatures').innerHTML = project.features
        .map(f => `<li>${f}</li>`)
        .join('');
    
    document.getElementById('carouselImages').innerHTML = project.images
        .map((img, i) => `
            <div class="carousel-item ${i === 0 ? 'active' : ''}">
                <img src="${img}" class="d-block w-100" alt="${project.title}">
            </div>
        `).join('');

    $('#projectModal').modal('show');
}

    function scrollToTop() {
        window.scrollTo({ top: 0, behavior: 'smooth' });
    }
