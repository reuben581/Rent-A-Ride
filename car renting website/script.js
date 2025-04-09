// script.js
document.addEventListener('DOMContentLoaded', () => {
    // Car data
    const cars = [
        { name: 'Toyota Camry', price: 50, image: 'https://www.edmunds.com/assets/m/cs/blt91de99359f393dab/6621fc74528fc1ce1e558f25/2025_toyota_camry_front.jpg' },
        { name: 'Honda Civic', price: 45, image: 'https://imgd.aeplcdn.com/664x374/n/cw/ec/27074/civic-exterior-right-front-three-quarter-148155.jpeg?q=80' },
        { name: 'Ford Mustang', price: 80, image: 'https://imgd.aeplcdn.com/664x374/cw/ec/23766/Ford-Mustang-Exterior-126883.jpg?wm=0&q=80' },
        { name: 'Tesla Model 3', price: 100, image: 'https://media.ed.edmunds-media.com/tesla/model-3/2022/oem/2022_tesla_model-3_sedan_performance_fq_oem_1_1600.jpg' }
    ];

    // Display cars
    const carContainer = document.getElementById('carContainer');
    const carSelect = document.getElementById('carSelect');

    cars.forEach(car => {
        // Add to car display
        const carCard = document.createElement('div');
        carCard.className = 'car-card';
        carCard.innerHTML = `
            <img src="${car.image}" alt="${car.name}">
            <h3>${car.name}</h3>
            <p>$${car.price}/day</p>
        `;
        carContainer.appendChild(carCard);

        // Add to select dropdown
        const option = document.createElement('option');
        option.value = car.name;
        option.textContent = `${car.name} - $${car.price}/day`;
        carSelect.appendChild(option);
    });

    // Booking form submission
    const bookingForm = document.getElementById('bookingForm');
    bookingForm.addEventListener('submit', (e) => {
        e.preventDefault();
        const formData = new FormData(bookingForm);
        const bookingDetails = {
            name: formData.get('fullname'),
            date: formData.get('date'),
            car: formData.get('carSelect'),
            days: formData.get('rentalDays')
        };
        alert(`Booking confirmed!\nName: ${bookingDetails.name}\nCar: ${bookingDetails.car}\nDate: ${bookingDetails.date}\nDays: ${bookingDetails.days}`);
        bookingForm.reset();
    });

    // Smooth scroll for nav links
    document.querySelectorAll('a[href^="#"]').forEach(anchor => {
        anchor.addEventListener('click', function(e) {
            e.preventDefault();
            document.querySelector(this.getAttribute('href')).scrollIntoView({
                behavior: 'smooth'
            });
        });
    });
});