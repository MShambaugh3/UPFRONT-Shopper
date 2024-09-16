// Loading Screen
window.addEventListener('load', function() {
    setTimeout(function() {
        document.getElementById('loadingScreen').style.display = 'none';
        document.getElementById('appContent').style.display = 'block';
    }, 3000); // 3 seconds delay for loading animation
});

// Sliding Menu Toggle
document.getElementById('menuToggle').addEventListener('click', function() {
    const menu = document.getElementById('slidingMenu');
    menu.classList.toggle('open');
});

// Placeholder functionality for buttons
document.getElementById('callCartBtn').addEventListener('click', function() {
    alert('Calling cart...');
    // Add functionality to send a text to a phone number
});

document.getElementById('scheduleCartBtn').addEventListener('click', function() {
    alert('Scheduling cart...');
    // Add functionality for selecting a date/time to send a text
});

document.getElementById('changeStoreBtn').addEventListener('click', function() {
    alert('Opening map to change store...');
    // Add map functionality here
});
