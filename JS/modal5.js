document.addEventListener("DOMContentLoaded", () => {
    const modal = document.getElementById('modal');
    const modalImg = document.getElementById("modal-img");
    const captionText = document.getElementById("modal-caption");
    const images = document.querySelectorAll('.portfolio__parent div');
    const prevButton = document.querySelector('.prev');
    const nextButton = document.querySelector('.next');
    let currentImages = [];
    let currentIndex = 0;

    const openModal = (index) => {
        currentIndex = index;
        modal.style.display = "block";
        modalImg.src = currentImages[currentIndex];
        captionText.innerHTML = `Image ${currentIndex + 1} of ${currentImages.length}`;
    };

    const closeModal = () => {
        modal.style.display = "none";
    };

    const showNext = () => {
        currentIndex = (currentIndex + 1) % currentImages.length;
        openModal(currentIndex);
    };

    const showPrev = () => {
        currentIndex = (currentIndex - 1 + currentImages.length) % currentImages.length;
        openModal(currentIndex);
    };

    // Open modal on click
    images.forEach((div) => {
        div.addEventListener('click', () => {
            currentImages = JSON.parse(div.getAttribute('data-images'));
            openModal(0);
        });
    });

    // Close the modal
    document.querySelector('.close').addEventListener('click', closeModal);

    // Navigate through images
    nextButton.addEventListener('click', showNext);
    prevButton.addEventListener('click', showPrev);

    // Close modal when clicking outside of the image
    window.addEventListener('click', (event) => {
        if (event.target == modal) {
            closeModal();
        }
    });
});