document.querySelectorAll('.zoom-container').forEach(zoomContainer => {
    // Находим все элементы с классом .zoom-container и проходим по каждому из них
    const img = zoomContainer.querySelector('.zoom-img');
    // Внутри каждого контейнера находим изображение с классом .zoom-img

    const lens = document.createElement('div');
    lens.classList.add('zoom-lens');
    // Создаем новый элемент div, который будет использоваться как лупа
    zoomContainer.appendChild(lens);
    // Добавляем этот элемент (лупу) внутрь контейнера

    lens.style.backgroundImage = `url('${img.src}')`;
    // Устанавливаем фоновое изображение для лупы таким же, как у изображения

    img.addEventListener('mousemove', moveLens);
    lens.addEventListener('mousemove', moveLens);
    // Добавляем обработчики событий для перемещения лупы при движении курсора над изображением

    img.addEventListener('mouseleave', () => {
        lens.style.display = 'none';
    });
    // Когда курсор покидает изображение, лупа скрывается

    img.addEventListener('mouseenter', () => {
        lens.style.display = 'block';
    });
    // Когда курсор входит в область изображения, лупа отображается

    function moveLens(e) {
        const pos = getCursorPos(e);
        // Получаем координаты курсора относительно изображения

        let x = pos.x - lens.offsetWidth / 2;
        let y = pos.y - lens.offsetHeight / 2;
        // Вычисляем положение лупы так, чтобы центр лупы был под курсором

        if (x > img.width - lens.offsetWidth) x = img.width - lens.offsetWidth;
        if (x < 0) x = 0;
        if (y > img.height - lens.offsetHeight) y = img.height - lens.offsetHeight;
        if (y < 0) y = 0;
        // Ограничиваем положение лупы, чтобы она не выходила за границы изображения

        lens.style.left = `${x}px`;
        lens.style.top = `${y}px`;
        // Устанавливаем позицию лупы на странице

        const cx = (lens.offsetWidth / img.width) * 10.3; // Увеличиваем коэффициент 
        const cy = (lens.offsetHeight / img.height) * 7.25;

        // Вычисляем коэффициенты масштабирования для фона лупы

        lens.style.backgroundPosition = `-${x * cx}px -${y * cy}px`;
        // Устанавливаем положение фонового изображения внутри лупы так, чтобы показывать увеличенный фрагмент под курсором
    }

    function getCursorPos(e) {
        const rect = img.getBoundingClientRect();
        // Получаем размеры и координаты изображения относительно окна браузера

        return {
            x: e.clientX - rect.left,
            y: e.clientY - rect.top,
        };
        // Возвращаем координаты курсора относительно верхнего левого угла изображения
    }
});

