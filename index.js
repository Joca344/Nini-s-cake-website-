// Hamburger Menu Toggle
const hamburger = document.querySelector('.hamburger-menu');
const navMenu = document.querySelector('nav ul');

hamburger.addEventListener('click', () => {
    navMenu.classList.toggle('active');
    
    // Animate hamburger to X
    const bars = document.querySelectorAll('.bar');
    bars.forEach(bar => bar.classList.toggle('active'));
});

// Close menu when clicking outside
document.addEventListener('click', (e) => {
    if (!hamburger.contains(e.target) && !navMenu.contains(e.target)) {
        navMenu.classList.remove('active');
        const bars = document.querySelectorAll('.bar');
        bars.forEach(bar => bar.classList.remove('active'));
    }
});

///////////////////////////////////////////////////////////////////


// Get all button elements
const buttons = document.querySelectorAll('order');

// Add event listener to each button
buttons.forEach(button => {
  button.addEventListener('click', () => {
    alert('Your order has been recieved succefully');
  });
}); 

// Get the specific input and button elements by their IDs
const subscriptionInput = document.getElementById('subscription-input');
const subscribeBtn = document.getElementById('subscription-btn');

// Add event listener to the subscribe button
subscribeBtn.addEventListener('click', (e) => {
  e.preventDefault(); // Prevent default form submission behavior
  const inputValue = subscriptionInput.value.trim();
  if (inputValue === '') {
    alert('Write something');
  } else {
    alert('You have successfully subscribed');
    // Optional: Clear the input box after subscription
    subscriptionInput.value = '';
  }
});



// Get all buttons with the class 'alert-button'
const alertButtons = document.querySelectorAll('.order-button');

// Add event listener to each of these buttons
alertButtons.forEach((button) => {
  button.addEventListener('click', () => {
    // Trigger the particular type of alert for these 14 buttons
    alert('Your order has been recieved succefully!');
  });
});

// Get all buttons with the class 'special-alert-button'
const specialAlertButtons = document.querySelectorAll('.special-alert-button');

// Add event listener to each of these buttons
specialAlertButtons.forEach((button) => {
  button.addEventListener('click', () => {
    // Trigger a different alert for these 2 buttons
    alert('Different alert for these special buttons!');
  });
});
