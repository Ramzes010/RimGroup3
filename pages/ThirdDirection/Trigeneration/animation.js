window.addEventListener('scroll', () => {
    if (window.scrollX !== 0) {
        window.scrollTo(0, window.scrollY); // Возвращает скролл по оси X в 0
    }
});

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
// presentation animate
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
document.addEventListener("DOMContentLoaded", function () {
    const title = document.getElementById('animated-title2');
    const blocks = [
        document.getElementById('block-12'),
        document.getElementById('block-22'),
        document.getElementById('block-32'),
        document.getElementById('block-42'),
        document.getElementById('block-52')
    ];
    const images = [
        document.getElementById('img-12'),
        document.getElementById('img-22')
    ];
  
    function animateBlocks(blocks) {
        blocks.forEach((block, index) => {
            setTimeout(() => {
                block.classList.add('visible');
            }, index * 70); // Задержка между анимациями блоков
        });
    }

    function animateImages(images) {
        images.forEach((img, index) => {
            setTimeout(() => {
                img.classList.add('visible');
            }, index * 70); // Задержка между анимациями изображений
        });
    }

    function checkVisibility() {
        const rect = title.getBoundingClientRect();
        if (rect.top < window.innerHeight && rect.bottom > 0 && !title.classList.contains('visible')) {
            title.classList.add('visible');
            setTimeout(() => animateBlocks(blocks), 300); // Начать анимацию блоков после заголовка
            setTimeout(() => animateImages(images), 300 + blocks.length * 70); // Начать анимацию картинок после блоков
        }
    }
  
    window.addEventListener('scroll', checkVisibility);
    checkVisibility(); // Проверка при загрузке страницы
});
// ПРОИЗВОДСТВенно-технический отдел animate

// Проектный ИНСТИТУТ animate
document.addEventListener("DOMContentLoaded", () => {
    const title = document.getElementById('title');
    const blocks = [
        document.getElementById('info-content__block-13'),
        document.getElementById('info-content__block-23'),
        document.getElementById('info-content__block-33')
    ];
    const images = [
        document.getElementById('info-content__img-13'),
        document.getElementById('info-content__img-23'),
        document.getElementById('info-content__img-33')
    ];

    function animateOnScroll() {
        const titlePosition = title.getBoundingClientRect().top;
        const screenHeight = window.innerHeight;

        if (titlePosition < screenHeight) {
            // Анимация для заголовка
            title.style.opacity = '1';
            title.style.transform = 'translateX(0)';

            // Анимация для блоков (перемещение справа налево)
            blocks.forEach((block, index) => {
                setTimeout(() => {
                    block.style.opacity = '1';
                    block.style.transform = 'translateX(0)';
                }, (index + 1) * 70); // Задержка в 70ms для каждого блока
            });

            // Анимация для картинок (перемещение снизу вверх)
            images.forEach((image, index) => {
                setTimeout(() => {
                    image.style.opacity = '1';
                    image.style.transform = 'translateY(0)';
                }, (blocks.length + index + 1) * 70); // Задержка для начала анимации картинок после блоков
            });

            // Удаляем обработчик события, чтобы анимация не повторялась при последующих скроллах
            window.removeEventListener('scroll', animateOnScroll);
        }
    }

    // Добавляем обработчик скролла
    window.addEventListener('scroll', animateOnScroll);

    // Запускаем проверку сразу на случай, если элементы уже видны при загрузке
    animateOnScroll();
});

// Architectural solutions
document.addEventListener("DOMContentLoaded", () => {
    const title = document.getElementById('gradient__title4');
    const images = [
        document.getElementById('info-content__img-4-1'),
        document.getElementById('info-content__img-4-2'),
        document.getElementById('info-content__img-4-3'),
        document.getElementById('info-content__img-4-4'),
        document.getElementById('info-content__img-4-5'),
        document.getElementById('info-content__img-4-6'),
        document.getElementById('info-content__img-4-7'),
        document.getElementById('info-content__img-4-8'),
        // Добавьте остальные элементы по ID
    ];

    const observerOptions = {
        threshold: 0.2, // Анимация сработает, когда 20% элемента будет видно
    };

    const titleObserver = new IntersectionObserver((entries, observer) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                // Анимация заголовка
                title.classList.add('visible');
                observer.unobserve(entry.target); // Остановить наблюдение после срабатывания анимации
            }
        });
    }, observerOptions);

    titleObserver.observe(title);

    const imagesObserver = new IntersectionObserver((entries, observer) => {
        entries.forEach((entry, index) => {
            if (entry.isIntersecting) {
                setTimeout(() => {
                    entry.target.classList.add('visible');
                }, index * 100); // Задержка в 100ms для каждого изображения
                observer.unobserve(entry.target);
            }
        });
    }, observerOptions);

    images.forEach(img => imagesObserver.observe(img));
});
// Architectural solutions

// Проектный ИНСТИТУТ animate
//  retention processes animate
document.addEventListener("DOMContentLoaded", () => {
    const title = document.getElementById('title-mt20');
    const subtitle = document.getElementById('subtitle-4');
    const imageContainer = document.getElementById('info-content__img-4');

    const observerOptions = {
        threshold: 0.2, // Анимация сработает, когда 20% элемента будет видно
    };

    const contentObserver = new IntersectionObserver((entries, observer) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                // Анимация заголовка (слева направо)
                title.classList.add('visible');

                // Анимация подзаголовка (справа налево)
                setTimeout(() => {
                    subtitle.classList.add('visible');
                }, 100); // Задержка в 100ms для подзаголовка

                // Анимация изображения (снизу вверх)
                setTimeout(() => {
                    imageContainer.classList.add('visible');
                }, 200); // Задержка в 200ms для изображения

                observer.unobserve(entry.target); // Остановить наблюдение после срабатывания анимации
            }
        });
    }, observerOptions);

    // Наблюдение за элементами
    contentObserver.observe(title);
    contentObserver.observe(subtitle);
    contentObserver.observe(imageContainer);
});
//  retention processes animate

// Factory animate
// Factory animate
document.addEventListener("DOMContentLoaded", () => {
    const title = document.getElementById('mb5-title');
    const images = document.querySelectorAll('.info-content__img');

    const observerOptions = {
        threshold: 0.1, // Анимация сработает, когда 10% элемента будет видно
    };

    // Функция для добавления класса "visible" к заголовку и изображениям
    const animateTitle = () => {
        title.classList.add('visible');
    };

    // Используем IntersectionObserver для запуска анимации заголовка при скролле
    const titleObserver = new IntersectionObserver((entries, observer) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                animateTitle();
                observer.unobserve(entry.target); // Останавливаем наблюдение после срабатывания
            }
        });
    }, observerOptions);

    // Наблюдаем за заголовком, так как он появляется первым
    titleObserver.observe(title);

    // Используем IntersectionObserver для запуска анимации изображений при скролле
    const imageObserver = new IntersectionObserver((entries, observer) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                entry.target.classList.add('visible');
                observer.unobserve(entry.target); // Останавливаем наблюдение после срабатывания
            }
        });
    }, observerOptions);

    // Наблюдаем за каждым изображением
    images.forEach(img => {
        imageObserver.observe(img);
    });
});

// Factory animate
// Factory animate

// Factory animate 2
document.addEventListener("DOMContentLoaded", () => {
    const title = document.querySelectorAll('.factory__title');
    const blocks = document.querySelectorAll('.factory__block');
    const blockTitles = document.querySelectorAll('.factory__block__title');
    const blockSubtitles = document.querySelectorAll('.factory__block__subtitle');
    const images = document.querySelectorAll('.factory__img');

    const observerOptions = {
        threshold: 0.1, // Анимация сработает, когда 10% элемента будет видно
    };

    const animateElement = (element, observer) => {
        element.classList.add('visible');
        observer.unobserve(element); // Останавливаем наблюдение после срабатывания
    };

    // Создаем наблюдателя для каждого типа элементов
    const titleObserver = new IntersectionObserver((entries, observer) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                animateElement(entry.target, observer);
            }
        });
    }, observerOptions);

    const blockObserver = new IntersectionObserver((entries, observer) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                animateElement(entry.target, observer);
            }
        });
    }, observerOptions);

    const textObserver = new IntersectionObserver((entries, observer) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                animateElement(entry.target, observer);
            }
        });
    }, observerOptions);

    const imageObserver = new IntersectionObserver((entries, observer) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                animateElement(entry.target, observer);
            }
        });
    }, observerOptions);

    // Применяем наблюдатели к соответствующим элементам
    title.forEach(title => titleObserver.observe(title));
    blocks.forEach(block => blockObserver.observe(block));
    blockTitles.forEach(blockTitle => textObserver.observe(blockTitle));
    blockSubtitles.forEach(blockSubtitle => textObserver.observe(blockSubtitle));
    images.forEach(image => imageObserver.observe(image));
});
// Factory animate 2
// listOfServices
document.addEventListener("DOMContentLoaded", () => {
    const title = document.querySelector('.title__center h2');
    const warrantyTitles = document.querySelectorAll('.warranty__title');
    const serviceTitles = document.querySelectorAll('.listOfServices__title');
    const serviceContent = document.querySelectorAll('.listOfServices__content p');
    const serviceImages = document.querySelectorAll('.listOfServices__img img');
    const warrantySections = document.querySelectorAll('.listOfServices__warranty__title, .listOfServices__warranty__subtitle');

    const observerOptions = {
        threshold: 0.1, // Анимация сработает, когда 10% элемента будет видно
    };

    const animateElement = (element, observer) => {
        element.classList.add('visible');
        observer.unobserve(element); // Останавливаем наблюдение после срабатывания
    };

    // Создаем наблюдателя для каждого типа элементов
    const createObserver = (elements) => {
        const observer = new IntersectionObserver((entries, observer) => {
            entries.forEach(entry => {
                if (entry.isIntersecting) {
                    animateElement(entry.target, observer);
                }
            });
        }, observerOptions);

        elements.forEach(element => observer.observe(element));
    };

    // Применяем наблюдатели к соответствующим элементам
    createObserver([title]);
    createObserver(warrantyTitles);
    createObserver(serviceTitles);
    createObserver(serviceContent);
    createObserver(serviceImages);
    createObserver(warrantySections);
});
// listOfServices

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

// 