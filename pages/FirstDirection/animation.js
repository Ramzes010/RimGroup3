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
    });
});

// Parent animate

document.addEventListener("DOMContentLoaded", () => {
    const title = document.querySelector('.title');
    const parent = document.querySelector('.parent');
    const children = document.querySelectorAll('.categorias__parent > div');
    const titles = document.querySelectorAll('.categorias__title');

    const observerOptions = {
        threshold: 0.2, // Когда 80% элемента будет видно, сработает анимация
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
                    }, (index + 1) * 150); // Задержка 150ms между элементами
                });

                // Добавляем класс к "categorias__title" после завершения анимации всех контейнеров
                setTimeout(() => {
                    titles.forEach(title => {
                        title.classList.add('visible');
                    });
                }, (children.length + 1) * 100); // Задержка после завершения всех контейнеров
            }
        });
    }, observerOptions);

    titleObserver.observe(title);
    parentObserver.observe(parent);
});

// Parent animate
// presentation animate
document.addEventListener("DOMContentLoaded", () => {
    const presentation = document.querySelector('.presentation');
    const content = document.querySelector('.presentation__content');
    const image = document.querySelector('.presentation__img');

    const observerOptions = {
        threshold: 0.5, // Анимация сработает, когда 50% элемента будет видно
    };

    const presentationObserver = new IntersectionObserver((entries, observer) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                // Сначала появляется контейнер
                presentation.classList.add('visible');

                // Контент появляется с задержкой после контейнера
                setTimeout(() => {
                    content.classList.add('visible');
                }, 500); // Задержка в 500ms

                // Изображение появляется после контента
                setTimeout(() => {
                    image.classList.add('visible');
                }, 1000); // Задержка в 1000ms

                observer.unobserve(entry.target); // Остановить наблюдение после срабатывания анимации
            }
        });
    }, observerOptions);

    presentationObserver.observe(presentation);
});
// presentation animate
// roadMap inmate
document.addEventListener("DOMContentLoaded", () => {
    const roadMap = document.querySelector('.roadMap');
    const title = document.querySelector('.roadMap__title');
    const trends = document.querySelectorAll('.trend');
    const image = document.querySelector('.roadMap__img');

    const observerOptions = {
        threshold: 0.2, // Анимация сработает, когда 50% элемента будет видно
    };

    const roadMapObserver = new IntersectionObserver((entries, observer) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                // Сначала появляется фон roadMap
                roadMap.classList.add('visible');

                // Заголовок появляется после фона
                setTimeout(() => {
                    title.classList.add('visible');
                }, 100); // Задержка в 100ms

                // Контейнеры появляются по очереди после заголовка
                trends.forEach((trend, index) => {
                    setTimeout(() => {
                        trend.classList.add('visible');
                    }, (index + 1) * 200); // Задержка 200ms между контейнерами
                });

                // Изображение появляется после всех контейнеров
                setTimeout(() => {
                    image.classList.add('visible');
                }, 300 + trends.length * 200); // Задержка после появления всех контейнеров

                observer.unobserve(entry.target); // Остановить наблюдение после срабатывания анимации
            }
        });
    }, observerOptions);

    roadMapObserver.observe(roadMap);
});
// roadMap inmate
/* ПРОИЗВОДСТВенно-технический отдел animate*/ 
document.addEventListener("DOMContentLoaded", () => {
    const parents = document.querySelectorAll('.info-content__parent');
    const images = document.querySelectorAll('.info-content__img img');

    const observerOptions = {
        threshold: 0.5, // Анимация сработает, когда 50% элемента будет видно
    };

    const parentObserver = new IntersectionObserver((entries, observer) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                // Поочередная анимация для каждого контейнера .info-content__parent
                parents.forEach((parent, index) => {
                    setTimeout(() => {
                        parent.classList.add('visible');
                    }, index * 300); // Задержка 300ms между контейнерами
                });

                // Анимация для изображений после появления всех контейнеров
                setTimeout(() => {
                    images.forEach((image, index) => {
                        setTimeout(() => {
                            image.classList.add('visible');
                        }, index * 300); // Задержка 300ms между изображениями
                    });
                }, parents.length * 300); // Начинаем анимацию изображений после контейнеров

                observer.unobserve(entry.target); // Останавливаем наблюдение после анимации
            }
        });
    }, observerOptions);

    // Начинаем наблюдение за первым родительским контейнером, чтобы запустить анимацию
    parentObserver.observe(parents[0]);
});
/* ПРОИЗВОДСТВенно-технический отдел animate*/

/* Factory animate */

/* Factory animate */