document.addEventListener("DOMContentLoaded", function() {
    var blocks = document.querySelectorAll('.block__module');

    function onScroll() {
        blocks.forEach(function(block) {
            var rect = block.getBoundingClientRect();
            if (rect.top < window.innerHeight && rect.bottom > 0) {
                block.style.opacity = 1;
                // Если курсор находится на блоке, масштабируем его, иначе просто перемещаем его в видимую область
                block.style.transform = block.isHovered ? 'scale(1.05)' : 'translateY(0)';
                var title = block.querySelector('.block__module__title');
                var subtitle = block.querySelector('.block__module__subtitle');
                title.style.opacity = 1;
                title.style.transform = 'translateY(0)';
                subtitle.style.opacity = 1;
                subtitle.style.transform = 'translateY(0)';
            } else {
                // Сброс трансформации блока, если он не в видимой области
                block.style.opacity = 0;
                block.style.transform = 'translateY(20px)';
            }
        });
    }

    function addHoverEffect(block) {
        block.isHovered = false;

        block.addEventListener('mouseenter', function() {
            block.isHovered = true;
            block.style.transition = 'transform 0.3s ease-in-out';
            block.style.transform = 'scale(1.05)';
        });

        block.addEventListener('mouseleave', function() {
            block.isHovered = false;
            block.style.transition = 'transform 0.3s ease-in-out';
            block.style.transform = 'scale(1)';
        });
    }

    blocks.forEach(function(block) {
        addHoverEffect(block);
    });

    window.addEventListener('scroll', onScroll);
    onScroll(); // Проверка при загрузке страницы
});
