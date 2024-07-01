document.addEventListener("DOMContentLoaded", function() {
    // Change background color of the body when a button is clicked
    const changeBgColorButton = document.createElement('button');
    changeBgColorButton.innerText = 'Change Background Color';
    changeBgColorButton.style.position = 'fixed';
    changeBgColorButton.style.top = '10px';
    changeBgColorButton.style.right = '10px';
    changeBgColorButton.className = 'btn btn-primary';
    document.body.appendChild(changeBgColorButton);
  
    changeBgColorButton.addEventListener('click', function() {
      document.body.style.backgroundColor = document.body.style.backgroundColor === 'black' ? 'white' : 'black';
      const formControls = document.querySelectorAll('.form-control');
      formControls.forEach(control => {
        control.style.backgroundColor = document.body.style.backgroundColor === 'black' ? 'grey' : 'white';
        control.style.borderColor = document.body.style.backgroundColor === 'black' ? 'white' : 'blue';
      });
    });
  
    // Display an alert when the form is submitted
    const form = document.querySelector('form');
    form.addEventListener('submit', function(event) {
      event.preventDefault();
      alert('Form submitted! Name: ' + form.querySelector('input[type="search"]').value);
    });
  
    // Enhance carousel functionality
    const carouselElement = document.getElementById('carouselExampleAutoplaying');
    const carousel = new bootstrap.Carousel(carouselElement, {
      interval: 2000,
      wrap: true
    });
  
    // Add event listeners for the carousel controls
    const prevButton = document.querySelector('.carousel-control-prev');
    const nextButton = document.querySelector('.carousel-control-next');
    prevButton.addEventListener('click', function() {
      carousel.prev();
    });
    nextButton.addEventListener('click', function() {
      carousel.next();
    });

    // Select all elements with the class "card"
const cards = document.querySelectorAll('.card');

// Add an event listener to each card to toggle the background color on hover
cards.forEach((card) => {
    card.addEventListener('mouseover', () => {
      card.style.transform = 'scale(1.1)';
      card.style.transition = 'transform 0.3s ease-in-out';
      card.style.backgroundColor = '#23abbd';
    });
    card.addEventListener('mouseout', () => {
      card.style.transform = 'scale(1)';
      card.style.transition = 'transform 0.3s ease-in-out';
      card.style.backgroundColor = 'black';
    });
  });

// Select the navbar toggle button
const navbarToggle = document.querySelector('.navbar-toggler');

// Add an event listener to the navbar toggle button to toggle the navbar collapse
navbarToggle.addEventListener('click', () => {
  document.querySelector('.navbar-collapse').classList.toggle('show');
});

// Select all elements with the class "carousel-item"
const carouselItems = document.querySelectorAll('.carousel-item');
// Add an event listener to each carousel item to toggle the active class => make the clicked carousel the active one
carouselItems.forEach((item) => {
  item.addEventListener('click', () => {
    carouselItems.forEach((otherItem) => {
      otherItem.classList.remove('active');
    });
    item.classList.add('active');
  });
});

// Select the search form
const searchForm = document.querySelector('form');

// Add an event listener to the search form to prevent default submission => avoids page reload 
searchForm.addEventListener('submit', (e) => {
  e.preventDefault();
  console.log('Search form submitted!'); 
});

// Select all elements with the class "nav-link"
const navLinks = document.querySelectorAll('.nav-link');

// Add an event listener to each nav link to scroll to the corresponding section
navLinks.forEach((link) => {
  link.addEventListener('click', (e) => {
    e.preventDefault();
    const sectionId = link.getAttribute('href').replace('#', '');
    const section = document.getElementById(sectionId);
    section.scrollIntoView({ behavior: 'smooth' }); 
    // makes the scrolling smooth and animated, rather than instantaneous.
  });
});

// help icon functionality
const helpIcon = document.getElementById('helpIcon');
const phoneNumber = '9644208491';
const helpMessage = `For assistance , call ${phoneNumber}.`;
helpIcon.addEventListener('click' , function(){
    alert(helpMessage);
});
  });
