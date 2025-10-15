// Array of image sources
const images = ["img1.jpg", "img2.jpg", "img3.jpg"];

let currentImageIndex = 0; // The index of the currently displayed image

const imageElement = document.getElementById('image');
const prevBtn = document.getElementById('prevBtn');
const nextBtn = document.getElementById('nextBtn');

// Function to update the image source
function updateImage() {
    imageElement.src = images[currentImageIndex];
}

// Event listener for the Next button
nextBtn.addEventListener('click', function() {
    currentImageIndex++;
    // If we go past the last image, loop back to the first (index 0)
    if (currentImageIndex > images.length - 1) {
        currentImageIndex = 0;
    }
    updateImage();
});

// Event listener for the Previous button
prevBtn.addEventListener('click', function() {
    currentImageIndex--;
    // If we go before the first image, loop back to the last image
    if (currentImageIndex < 0) {
        currentImageIndex = images.length - 1;
    }
    updateImage();
});

// Initialize the first image when the page loads
updateImage();
