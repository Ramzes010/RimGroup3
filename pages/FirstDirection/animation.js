document.addEventListener("DOMContentLoaded", () => {
    const elements = document.querySelectorAll('.animate');

    elements.forEach((element, index) => {
        setTimeout(() => {
            element.classList.add('visible'); // Добавляем класс, который активирует анимацию
        }, (index + 1) * 100); // Задержка в 100ms между анимациями элементов
    });
});

document.addEventListener("DOMContentLoaded", () => {
    const titles = document.querySelectorAll('.title'); // Выбираем все элементы с классом .title

    const observerOptions = {
        threshold: 0.5, // Анимация сработает, когда 50% элемента будет видно
    };

    const titleObserver = new IntersectionObserver((entries, observer) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                entry.target.classList.add('visible'); // Добавляем класс .visible к элементу
                observer.unobserve(entry.target); // Останавливаем наблюдение за этим элементом
            }
        });
    }, observerOptions);

    titles.forEach(title => {
        titleObserver.observe(title); // Начинаем наблюдение за каждым элементом .title

        // Проверка на видимость элемента сразу после загрузки
        if (isElementInViewport(title)) {
            title.classList.add('visible');
            titleObserver.unobserve(title);
        }
    });
});

// Parent animate

document.addEventListener("DOMContentLoaded", () => {
    const title = document.querySelector('.title');
    const parent = document.querySelector('.parent');
    const children = document.querySelectorAll('.categorias__parent > div');
    const titles = document.querySelectorAll('.categorias__title');

    const observerOptions = {
        threshold: 0.2, // Когда 20% элемента будет видно, сработает анимация
    };

    const titleObserver = new IntersectionObserver((entries, observer) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                title.classList.add('visible');
                observer.unobserve(entry.target);
            }
        });
    }, observerOptions);

    const parentObserver = new IntersectionObserver((entries, observer) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                parent.classList.add('visible');
                observer.unobserve(entry.target);

                // Запускаем анимацию для дочерних элементов
                children.forEach((child, index) => {
                    setTimeout(() => {
                        child.classList.add('visible');
                    }, (index + 1) * 70); // Задержка 70ms между элементами
                });

                // Добавляем класс к "categorias__title" после завершения анимации всех контейнеров
                setTimeout(() => {
                    titles.forEach(title => {
                        title.classList.add('visible');
                    });
                }, (children.length + 1) * 70); // Задержка после завершения всех контейнеров
            }
        });
    }, observerOptions);

    titleObserver.observe(title);
    parentObserver.observe(parent);

    // Проверка на видимость элементов сразу после загрузки
    if (isElementInViewport(title)) {
        title.classList.add('visible');
        titleObserver.unobserve(title);
    }

    if (isElementInViewport(parent)) {
        parent.classList.add('visible');
        parentObserver.unobserve(parent);
        // Запуск анимации для дочерних элементов и заголовков
        children.forEach((child, index) => {
            setTimeout(() => {
                child.classList.add('visible');
            }, (index + 1) * 150);
        });
        setTimeout(() => {
            titles.forEach(title => {
                title.classList.add('visible');
            });
        }, (children.length + 1) * 100);
    }
});

// presentation animate
document.addEventListener("DOMContentLoaded", () => {
    const presentation = document.querySelector('.presentation');
    const content = document.querySelector('.presentation__content');
    const image = document.querySelector('.presentation__img');

    const observerOptions = {
        threshold: 0.2, // Анимация сработает, когда 50% элемента будет видно
    };

    const presentationObserver = new IntersectionObserver((entries, observer) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                // Сначала появляется контейнер
                presentation.classList.add('visible');

                // Контент появляется с задержкой после контейнера
                setTimeout(() => {
                    content.classList.add('visible');
                }, 70); // Задержка в 70ms

                // Изображение появляется после контента
                setTimeout(() => {
                    image.classList.add('visible');
                }, 100); // Задержка в 100ms

                observer.unobserve(entry.target); // Остановить наблюдение после срабатывания анимации
            }
        });
    }, observerOptions);

    presentationObserver.observe(presentation);

    // Проверка на видимость элемента сразу после загрузки
    if (isElementInViewport(presentation)) {
        presentation.classList.add('visible');
        setTimeout(() => {
            content.classList.add('visible');
        }, 500);
        setTimeout(() => {
            image.classList.add('visible');
        }, 1000);
        presentationObserver.unobserve(presentation);
    }
});

// roadMap animate
document.addEventListener("DOMContentLoaded", () => {
    const roadMap = document.querySelector('.roadMap');
    const title = document.querySelector('.roadMap__title');
    const trends = document.querySelectorAll('.trend');
    const image = document.querySelector('.roadMap__img');

    const observerOptions = {
        threshold: 0.2, // Анимация сработает, когда 20% элемента будет видно
    };

    const roadMapObserver = new IntersectionObserver((entries, observer) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                // Сначала появляется фон roadMap
                roadMap.classList.add('visible');

                // Заголовок появляется после фона
                setTimeout(() => {
                    title.classList.add('visible');
                }, 50); // Задержка в 50ms

                // Контейнеры появляются по очереди после заголовка
                trends.forEach((trend, index) => {
                    setTimeout(() => {
                        trend.classList.add('visible');
                    }, (index + 1) * 100); // Задержка 200ms между контейнерами
                });

                // Изображение появляется после всех контейнеров
                setTimeout(() => {
                    image.classList.add('visible');
                }, 300 + trends.length * 50); // Задержка после появления всех контейнеров

                observer.unobserve(entry.target); // Остановить наблюдение после срабатывания анимации
            }
        });
    }, observerOptions);

    roadMapObserver.observe(roadMap);

    // Проверка на видимость элемента сразу после загрузки
    if (isElementInViewport(roadMap)) {
        roadMap.classList.add('visible');
        setTimeout(() => {
            title.classList.add('visible');
        }, 100);
        trends.forEach((trend, index) => {
            setTimeout(() => {
                trend.classList.add('visible');
            }, (index + 1) * 200);
        });
        setTimeout(() => {
            image.classList.add('visible');
        }, 300 + trends.length * 200);
        roadMapObserver.unobserve(roadMap);
    }
});

// ПРОИЗВОДСТВенно-технический отдел animate


// Функция для проверки, виден ли элемент на экране
function isElementInViewport(el) {
    const rect = el.getBoundingClientRect();
    return (
        rect.top >= 0 &&
        rect.left >= 0 &&
        rect.bottom <= (window.innerHeight || document.documentElement.clientHeight) &&
        rect.right <= (window.innerWidth || document.documentElement.clientWidth)
    );
}
