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

// title animate
document.addEventListener("DOMContentLoaded", function () {
    const title = document.getElementById('title-animation');
  
    function checkVisibility() {
      const rect = title.getBoundingClientRect();
      if (rect.top < window.innerHeight && rect.bottom > 0 && !title.classList.contains('visible')) {
        // Добавляем класс 'visible', чтобы запустить анимацию
        title.classList.add('visible');
      }
    }
  
    window.addEventListener('scroll', checkVisibility);
    checkVisibility(); // Проверка при загрузке страницы
  });
// title animate

// Parent animate
document.addEventListener("DOMContentLoaded", function () {
    const containers = document.querySelectorAll('.categorias__parent');
  
    function checkVisibility() {
      containers.forEach((container, index) => {
        const rect = container.getBoundingClientRect();
        if (rect.top < window.innerHeight && rect.bottom > 0 && !container.classList.contains('visible')) {
          // Добавляем класс 'visible', чтобы предотвратить повторное выполнение анимации
          container.classList.add('visible');
          
          setTimeout(() => {
            container.style.transform = 'translateX(0)';
            container.style.opacity = '1';
  
            // После того, как контейнер появился, запускаем анимацию заголовков
            setTimeout(() => {
              const titles = container.querySelectorAll('.categorias__title, .div11__title, .div11__subtitle, .div11__link');
              titles.forEach((title, i) => {
                setTimeout(() => {
                  title.style.opacity = '1';
                }, i * 100); // Задержка появления заголовков внутри каждого контейнера
              });
            }, 800); // Задержка перед появлением заголовков после появления контейнера
  
          }, index * 100); // Задержка появления каждого контейнера
        }
      });
    }
  
    window.addEventListener('scroll', checkVisibility);
    checkVisibility(); // Проверка при загрузке страницы
  });
  
// Parent animate




// presentation animate
document.addEventListener("DOMContentLoaded", () => {
    const presentation = document.querySelector('.presentation');
    const content = document.querySelector('.presentation__content');
    const image = document.querySelector('.presentation__img');

    const observerOptions = {
        threshold: 0.2, // Анимация сработает, когда 20% элемента будет видно
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
