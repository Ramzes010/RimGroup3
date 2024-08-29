document.addEventListener("DOMContentLoaded", () => {
    const modal = document.getElementById('modal');
    const modalImg = document.getElementById("modal-img");
    const captionText = document.getElementById("modal-caption");
    const images = document.querySelectorAll('.portfolio__parent div');
    const prevButton = document.querySelector('.prev');
    const nextButton = document.querySelector('.next');
    let currentIndex = 0;

    const openModal = (index) => {
        currentIndex = index;
        const div = images[index];
        const imgUrl = div.getAttribute('data-image-url'); // Получаем URL из data-атрибута
        modal.style.display = "block";
        modalImg.src = imgUrl;
        captionText.innerHTML = `Image ${index + 1} of ${images.length}`;
    };

    const closeModal = () => {
        modal.style.display = "none";
    };

    const showNext = () => {
        currentIndex = (currentIndex + 1) % images.length;
        openModal(currentIndex);
    };

    const showPrev = () => {
        currentIndex = (currentIndex - 1 + images.length) % images.length;
        openModal(currentIndex);
    };

    // Open modal on click
    images.forEach((div, index) => {
        div.addEventListener('click', () => openModal(index));
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
