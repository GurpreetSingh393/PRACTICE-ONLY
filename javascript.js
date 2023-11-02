
const slideContainer = document.querySelector('.video-container');
const slide = document.querySelector('.slides');
const nextBtn = document.getElementById('next-btn');
const prevBtn = document.getElementById('prev-btn');
const interval = 3000;

let slides = document.querySelectorAll('.slide');
let index = 1;
let slideId;

const firstClone = slides[0].cloneNode(true);
const lastClone = slides[slides.length - 1].cloneNode(true);

firstClone.id = 'first-clone';
lastClone.id = 'last-clone';

slide.append(firstClone);
slide.prepend(lastClone);

const slideWidth = slides[index].clientWidth;

slide.style.transform = `translateX(${-slideWidth * index}px)`;

console.log(slides);

const startSlide = () => {
  slideId = setInterval(() => {
    moveToNextSlide();
  }, interval);
};

const getSlides = () => document.querySelectorAll('.slide');

slide.addEventListener('transitionend', () => {
  slides = getSlides();
  if (slides[index].id === firstClone.id) {
    slide.style.transition = 'none';
    index = 1;
    slide.style.transform = `translateX(${-slideWidth * index}px)`;
  }

  if (slides[index].id === lastClone.id) {
    slide.style.transition = 'none';
    index = slides.length - 2;
    slide.style.transform = `translateX(${-slideWidth * index}px)`;
  }
});

const moveToNextSlide = () => {
  slides = getSlides();
  if (index >= slides.length - 1) return;
  index++;
  slide.style.transition = '.7s ease-out';
  slide.style.transform = `translateX(${-slideWidth * index}px)`;
};

const moveToPreviousSlide = () => {
  if (index <= 0) return;
  index--;
  slide.style.transition = '.7s ease-out';
  slide.style.transform = `translateX(${-slideWidth * index}px)`;
};

slideContainer.addEventListener('mouseenter', () => {
  clearInterval(slideId);
});

slideContainer.addEventListener('mouseleave', startSlide);
nextBtn.addEventListener('click', moveToNextSlide);
prevBtn.addEventListener('click', moveToPreviousSlide);

startSlide();

function openNav() {
          document.getElementById("myNav").style.display = "block";/*Show curtain menu*/         
        }

        function closeNav() {
          document.getElementById("myNav").style.display = "none";/*Hide the curtain menu*/
        }

const gridItems = document.querySelectorAll('.grid-item');

gridItems.forEach(item => {
    const image = item.querySelector('img');
    const text = item.querySelector('p');
    image.addEventListener('mouseover', function() {
        this.style.opacity = 0.6;
        text.style.fontWeight = 'bold';
    });
	
    image.addEventListener('mouseout', function() {
        this.style.opacity = 1;
        text.style.fontWeight = 'normal';
    });
});



// Function to highlight the current page link
function highlightCurrentPageLink() {
    var currentPageURL = window.location.href;
    var links = document.querySelectorAll('.overlay-content a');

    links.forEach(function(link) {
        if (link.href === currentPageURL) {
            link.classList.add('highlight');
        } else {
            link.classList.remove('highlight');
        }
    });
}

// Call the function to highlight the current page link
highlightCurrentPageLink();


// Reference to login page for the Login button.
var loginButton = document.getElementById("login_button");
// Add a click event listener to the button
loginButton.addEventListener("click", function() {
 // Redirect to another page
    window.location.href = "login.html";
});
		
// Reference to login page for the Login button.
var freeTrialButton = document.getElementById("free_trial_button");
// Add a click event listener to the button
freeTrialButton.addEventListener("click", function() {
// Redirect to another page
    window.location.href = "mainpage.html";
});

// Reference to login page for the Login button.
var continueToPaymentButton = document.getElementById("continue_to_payment");
// Add a click event listener to the button
continueToPaymentButton.addEventListener("click", function() {
// Redirect to another page
    window.location.href = "payment.html";
});

document.getElementById('signup-form').addEventListener('submit', function(e) {
            e.preventDefault();

            var password = document.getElementById('password').value;
            var confirmPassword = document.getElementById('confirm-password').value;

            if (password === confirmPassword) {
                // Passwords match, navigate to signup.html
                window.location.href = 'login.html';
            } else {
                // Passwords do not match
                document.getElementById('message').textContent = 'Error: Passwords do not match.';
            }
        });
		
		
		




