document.addEventListener('DOMContentLoaded', function() {
    const containers = document.querySelectorAll('.engineering-position');
    let currentIndex = 0;

    const leftArrow = document.getElementById('leftArrow');
    const rightArrow = document.getElementById('rightArrow');

    function showContainer(index) {
        containers.forEach((container, i) => {
            container.style.display = i === index ? 'flex' : 'none';
        });
    }

    leftArrow.addEventListener('click', function() {
        currentIndex = (currentIndex === 0) ? containers.length - 1 : currentIndex - 1;
        showContainer(currentIndex);
    });

    rightArrow.addEventListener('click', function() {
        currentIndex = (currentIndex === containers.length - 1) ? 0 : currentIndex + 1;
        showContainer(currentIndex);
    });

    // Изначально показываем первый контейнер
    showContainer(currentIndex);
});
