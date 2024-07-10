document.addEventListener("DOMContentLoaded", () => {
    const header = document.querySelector('header');
    const elements = document.querySelectorAll('.parent div');

    // Анимация для header
    setTimeout(() => {
        header.classList.add('animate');
    }, 500); // Задержка в 500ms для header

    // Анимация для элементов внутри .parent
    elements.forEach((element, index) => {
        setTimeout(() => {
            element.classList.add('animate');
        }, (index + 1) * 100); // Задержка в 100ms между анимациями элементов
    });
});
