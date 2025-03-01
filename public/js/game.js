// Wait for the DOM to be fully loaded
document.addEventListener('DOMContentLoaded', function() {
    // Get references to the main UI elements
    const beginnerBtn = document.getElementById('beginner-btn');
    const challengeBtn = document.getElementById('challenge-btn');
    const homeIcon = document.getElementById('home-icon');
    const driverIcon = document.getElementById('driver-icon');
    const circuitIcon = document.getElementById('circuit-icon');
    const menuIcon = document.getElementById('menu-icon');
    
    // Add event listeners for the game mode buttons
    beginnerBtn.addEventListener('click', function() {
        console.log('Beginner mode selected');
        // Add game start logic here
        playButtonSound();
        flashButton(this);
    });
    
    challengeBtn.addEventListener('click', function() {
        console.log('Challenge mode selected');
        // Add game start logic here
        playButtonSound();
        flashButton(this);
    });
    
    // Add event listeners for the navigation icons
    homeIcon.addEventListener('click', function(e) {
        e.preventDefault();
        console.log('Home selected');
        highlightNavIcon(this);
    });
    
    driverIcon.addEventListener('click', function(e) {
        e.preventDefault();
        console.log('Driver selected');
        highlightNavIcon(this);
    });
    
    circuitIcon.addEventListener('click', function(e) {
        e.preventDefault();
        console.log('Circuit selected');
        highlightNavIcon(this);
    });
    
    menuIcon.addEventListener('click', function(e) {
        e.preventDefault();
        console.log('Menu selected');
        highlightNavIcon(this);
    });
    
    // Add subtle cloud animations
    animateClouds();
    
    // Make sure the layout adjusts properly on window resize
    window.addEventListener('resize', adjustLayout);
});

// Function to add visual feedback when buttons are clicked
function flashButton(button) {
    button.style.backgroundColor = '#f0f0f0';
    setTimeout(function() {
        button.style.backgroundColor = 'white';
    }, 200);
}

// Function to highlight the selected navigation icon
function highlightNavIcon(icon) {
    // Remove highlight from all icons
    const allIcons = document.querySelectorAll('.nav-icon');
    allIcons.forEach(function(navIcon) {
        navIcon.style.backgroundColor = '';
    });
    
    // Highlight the selected icon
    icon.style.backgroundColor = '#d00000';
}

// Function to play a button click sound (would need to add audio element)
function playButtonSound() {
    // This would connect to an audio element if one was added
    console.log('Button sound played');
}

// Function to animate the clouds for a more dynamic feel
function animateClouds() {
    const clouds = document.querySelectorAll('.cloud');
    
    clouds.forEach(function(cloud, index) {
        // Set different starting positions
        const startingLeft = parseFloat(cloud.style.left || '0');
        
        // Create animation with different speeds for each cloud
        animateCloud(cloud, startingLeft, 0.02 + (index * 0.005));
    });
}

// Function to animate a single cloud
function animateCloud(cloud, startLeft, speed) {
    let position = startLeft;
    let direction = -1; // Start moving left
    
    function move() {
        // Update position
        position += speed * direction;
        
        // Reverse direction at edges
        if (position < 0 || position > 90) {
            direction *= -1;
        }
        
        // Apply the new position
        cloud.style.left = position + '%';
        
        // Continue animation
        requestAnimationFrame(move);
    }
    
    // Start the animation
    move();
}

// Function to adjust layout based on screen size
function adjustLayout() {
    const container = document.querySelector('.game-container');
    const aspectRatio = window.innerHeight / window.innerWidth;
    
    // If screen is wider than tall, adjust container width
    if (aspectRatio < 1) {
        container.style.width = (window.innerHeight * 0.6) + 'px';
    } else {
        container.style.width = '100%';
    }
}

// Initial layout adjustment
adjustLayout();