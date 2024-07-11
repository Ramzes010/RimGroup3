document.addEventListener("DOMContentLoaded", function() {
    var blocks = document.querySelectorAll('.block__module');

    function onScroll() {
        blocks.forEach(function(block) {
            var rect = block.getBoundingClientRect();
            if (rect.top < window.innerHeight && rect.bottom > 0) {
                block.style.opacity = 1;
                block.style.transform = 'translateY(0)';
                var title = block.querySelector('.block__module__title');
                var subtitle = block.querySelector('.block__module__subtitle');
                title.style.opacity = 1;
                title.style.transform = 'translateY(0)';
                subtitle.style.opacity = 1;
                subtitle.style.transform = 'translateY(0)';
            } else {
                block.style.opacity = 0;
                block.style.transform = 'translateY(20px)';
                var title = block.querySelector('.block__module__title');
                var subtitle = block.querySelector('.block__module__subtitle');
                title.style.opacity = 0;
                title.style.transform = 'translateY(20px)';
                subtitle.style.opacity = 0;
                subtitle.style.transform = 'translateY(20px)';
            }
        });
    }

    window.addEventListener('scroll', onScroll);
    onScroll(); // Проверка при загрузке страницы
});