// Grabbing elements from the HTML
const yesButton = document.getElementById('yesButton');
const noButton = document.getElementById('noButton');
const responseMessage = document.getElementById('responseMessage');

// Handle the "Yes" button click
yesButton.addEventListener('click', function() {
    responseMessage.innerHTML = "Yay! I knew you'd say yes! 💖";
    responseMessage.classList.remove('hidden');
    responseMessage.classList.add('visible');
    
    // Open a new window with cute messages
    setTimeout(function() {
        window.open('cuteMessages.html', '_blank', 'width=600,height=400');
    }, 500); // 0.5 second delay before opening the new window
});

// Handle the "No" button running away
noButton.addEventListener('mouseover', function() {
    const randomX = Math.random() * (window.innerWidth - noButton.clientWidth);
    const randomY = Math.random() * (window.innerHeight - noButton.clientHeight);

    noButton.style.position = 'absolute';
    noButton.style.left = `${randomX}px`;
    noButton.style.top = `${randomY}px`;
});
