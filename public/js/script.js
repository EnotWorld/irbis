$(window).on('load', init);
function init() {
  fullPage();
  initSwiper();
  alternativeContainer();
  burgerMenu();
  centerCircles();
  translateContacts();
  gallery();
  addCards();
  if (document.querySelector('.phone')) {
    $('.phone').mask('+7(999) 999-9999');
  }
  fullPageScrollSection();
  $('.preloader').fadeOut('slow');
}
function addCards() {
  // Функция для форматирования даты
  function formatDate(dateString) {
    const date = new Date(dateString);
    const options = { day: 'numeric', month: 'long' }; // Опции для форматирования даты
    const formattedDate = date.toLocaleDateString('ru-RU', options); // Форматирование даты
    const [day, month] = formattedDate.split(' ');
    return { day, month };
  }

// Функция для отображения новостей на странице index.html
  function displayIndexNews(news) {
    const newsCardsContainer = document.querySelector('.newsCards');
    news.slice(0, 3).forEach(data => {
      const { day, month } = formatDate(data.publish_date);
      const newsCard = document.createElement('div');
      newsCard.classList.add('newsCard');

      newsCard.innerHTML = `
            <img class="newsCard__bg" src="./img/icon/partnersCardBg.svg" alt="" />
            <div class="newsCard__content">
                <p class="newsCard__title">${data.title}</p>
                <p class="newsCard__text">${data.content}</p>
            </div>
            <div class="newsCard__date">
                <p class="newsCard__date-number">${day}</p>
                <p class="newsCard__date-month">${month}</p>
            </div>
        `;

      newsCardsContainer.appendChild(newsCard);
    });
  }

// Функция для отображения новостей на всех остальных страницах
  function displayOtherNews(news) {
    const newsCardsContainer = document.querySelector('.newsCards');

    // Создание столбцов для новостей
    let columns = [];
    for (let i = 0; i < 3; i++) {
      const column = document.createElement('div');
      column.classList.add('newsCards__column');
      columns.push(column);
      newsCardsContainer.appendChild(column);
    }

    // Добавление карточек новостей в столбцы
    let columnIndex = 0;
    news.forEach((data, index) => {
      const { day, month } = formatDate(data.publish_date);
      const newsCard = document.createElement('div');
      newsCard.classList.add('newsCard');

      newsCard.innerHTML = `
            <img class="newsCard__bg" src="./img/icon/partnersCardBg.svg" alt="" />
            <div class="newsCard__content">
                <p class="newsCard__title">${data.title}</p>
                <p class="newsCard__text">${data.content}</p>
            </div>
            <div class="newsCard__date">
                <p class="newsCard__date-number">${day}</p>
                <p class="newsCard__date-month">${month}</p>
            </div>
        `;

      columns[columnIndex].appendChild(newsCard);
      columnIndex = (columnIndex + 1) % 3; // Переключение на следующую колонку по кругу
    });
  }

// Выполнение запроса к серверу Node.js для получения новостей
  fetch('http://localhost:3000/api/news')
    .then(response => response.json()) // Преобразование ответа в JSON
    .then(news => {
      console.log('Полученные новости:', news);
      const newsCardsContainer = document.querySelector('.newsCards');

      if (newsCardsContainer.classList.contains('index-page')) {
        // Если находимся на странице index.html, отображаем только первые 3 новости
        displayIndexNews(news);
      } else {
        // На остальных страницах используем логику с колонками
        displayOtherNews(news);
      }
    })
    .catch(error => {
      console.error('Ошибка при получении новостей:', error);
    });

}
function fullPageScrollSection() {
  $('#companyMission').click(function () {
    // задаем функцию при нажатиии на элемент <button>
    let classForSearch = 'companyMission';
    searchIndexSection(classForSearch);
  });
  $('#whyChooseUs').click(function () {
    // задаем функцию при нажатиии на элемент <button>
    let classForSearch = 'whyChooseUs';
    searchIndexSection(classForSearch);
  });
  $('#workingFor').click(function () {
    // задаем функцию при нажатиии на элемент <button>
    let classForSearch = 'workingFor';
    searchIndexSection(classForSearch);
  });
}

function gallery() {
  Fancybox.bind('.projectsGallery__item', {
    groupAll: true,
  });
  Fancybox.bind('.innovativeTechnologies__link', {
  });
  Fancybox.bind('#answ1', {
    href: '#modal2',
  });
  Fancybox.bind('#answ2', {
    href: '#modal3',
  });
}

function searchIndexSection(classForSearch) {
  $('section').each(function (index) {
    if ($(this).hasClass(classForSearch)) {
      let sectionNumber = index + 1;
      $.fn.pagepiling.moveTo(sectionNumber);
    }
  });
}
function initSwiper() {
  if (document.querySelector('.partners__slide')) {
    const partnersSlide = document.querySelector('.partners__slide').offsetHeight;
    const swiperPartners = new Swiper('.partners__slider', {
      // loop: true,
      // slidesPerView: 5,
      spaceBetween: 50,
      width: partnersSlide,

      navigation: {
        nextEl: '.partners__nav-icon--right',
        prevEl: '.partners__nav-icon--left',
      },
      breakpoints: {
        1920: {
          spaceBetween: 50,
        },
        992: {
          spaceBetween: 50,
        },
        180: {
          spaceBetween: 15,
        },
      },
    });
  }
  if (document.querySelector('.solutions__item')) {
    const solutionsItem = document.querySelector('.solutions__item');
    const solutionsSwiper = document.querySelector('.solutions__swiper');
    solutionsSwiper.style.width = solutionsItem.offsetWidth + 'px';
  }
  const swiperWorkingFor = new Swiper('.workingFor__swiper', {
    loop: true,
    slidesPerView: 3,
    spaceBetween: 30,
    navigation: {
      nextEl: '.workingFor__left-button--right',
      prevEl: '.workingFor__left-button--left',
    },
    breakpoints: {
      993: {
        slidesPerView: 3,
      },
      769: {
        slidesPerView: 1.5,
      },
      577: {
        slidesPerView: 2,
      },
      420: {
        slidesPerView: 1.5,
      },
      180: {
        slidesPerView: 1,
      },
    },
  });

  const swiperWorkingFor2 = new Swiper('.workingFor__swiper-2', {
    slidesPerView: 3,
    spaceBetween: 30,
    slidesOffsetAfter: 50,
    navigation: {
      nextEl: '.workingFor__left-button--right',
      prevEl: '.workingFor__left-button--left',
    },
    breakpoints: {
      993: {
        slidesPerView: 2.1,
      },
      769: {
        slidesPerView: 1.5,
      },
      577: {
        slidesPerView: 1.5,
      },
      420: {
        slidesPerView: 1.5,
      },
      180: {
        slidesPerView: 1.2,
      },
    },
  });
  const swiperWorkingForNews = new Swiper('.workingFor__swiper--news', {
    loop: true,
    slidesPerView: 2.5,
    spaceBetween: 30,
    navigation: {
      nextEl: '.workingFor__left-button--right',
      prevEl: '.workingFor__left-button--left',
    },
    breakpoints: {
      993: {
        slidesPerView: 3,
      },
      577: {
        slidesPerView: 2,
      },
      420: {
        slidesPerView: 1.5,
      },
      180: {
        slidesPerView: 1,
      },
    },
  });
  const swiperSolutions = new Swiper('.solutions__slider', {
    loop: true,
    slidesPerView: 3,
    spaceBetween: 30,
    navigation: {
      nextEl: '.solutions__nav-icon--right',
      prevEl: '.solutions__nav-icon--left',
    },
    breakpoints: {
      1600: {
        slidesPerView: 3,
      },
      993: {
        slidesPerView: 2,
      },
      200: {
        slidesPerView: 2,
        spaceBetween: 15,
      },
    },
  });
}
function fullPage() {
  if (document.documentElement.offsetWidth > 1200) {
    if (document.querySelector('.products__wrapper')) {
      $('.products__cards').pagepiling({
        direction: 'vertical',
        sectionSelector: '.products__card',
        easing: 'linear',
        scrollingSpeed: 200,
      });

      const productsCard = document.querySelectorAll('.products__card');
      const products = document.querySelector('.products');
      const productsCardLast = productsCard[productsCard.length - 1];
      const observer = new MutationObserver((mutationsList, observer) => {
        mutationsList.forEach((mutation) => {
          if (mutation.target.classList.contains('active')) {
            setTimeout(() => {
              document.querySelector('.footer').classList.add('active');
              products.classList.add('active');
            }, 200);
          } else {
            setTimeout(() => {
              document.querySelector('.footer').classList.remove('active');
              products.classList.remove('active');
            }, 200);
          }
        });
      });
      observer.observe(productsCardLast, { attributes: true, attributeFilter: ['class'] });
    } else {
      $('#pagepiling').pagepiling({
        direction: 'vertical',
        sectionSelector: 'section',
        easing: 'linear',
        scrollingSpeed: 200,
      });
    }
  }
}
function burgerMenu() {
  if (992 >= window.innerWidth) {
    document.querySelector('.burgerMenu').addEventListener('click', function () {
      document.querySelector('.burgerMenu').classList.toggle('active');
    });
  }
}
function alternativeContainer() {
  if (document.querySelector('.content')) {
    var content = document.querySelectorAll('.content');
    var container = document.querySelector('.container');
    var domRect;
    var result;
    if (container) {
      domRect = container.getBoundingClientRect();
      result = domRect.left + 15;
    }
    content.forEach(function (el) {
      var blocksLeft = el.querySelectorAll('.box__left');
      var blocksRight = el.querySelectorAll('.box__right');
      blocksLeft.forEach(function (el) {
        el.style.paddingLeft = '' + result + 'px';
      });
      blocksRight.forEach(function (el) {
        el.style.paddingRight = '' + result + 'px';
      });
      if (window.innerWidth <= 992) {
        blocksLeft.forEach(function (el) {
          el.style.paddingRight = '' + result + 'px';
        });
        blocksRight.forEach(function (el) {
          el.style.paddingLeft = '' + result + 'px';
        });
      }
    });
    window.addEventListener('resize', function () {
      var container = document.querySelector('.container');
      var domRect = container.getBoundingClientRect();
      var result = domRect.left + 15;

      content.forEach(function (el) {
        var blocksLeft = el.querySelectorAll('.box__left');
        var blocksRight = el.querySelectorAll('.box__right');

        blocksLeft.forEach(function (el) {
          el.style.paddingLeft = '' + result + 'px';
        });
        blocksRight.forEach(function (el) {
          el.style.paddingRight = '' + result + 'px';
        });
        if (window.innerWidth <= 992) {
          blocksLeft.forEach(function (el) {
            el.style.paddingRight = '' + result + 'px';
          });
          blocksRight.forEach(function (el) {
            el.style.paddingLeft = '' + result + 'px';
          });
        }
      });
    });
  }
}
function centerCircles() {
  if (document.querySelector('.aboutCompany__circles')) {
    let circlesBlock = document.querySelector('.aboutCompany__circles');
    if (768 >= window.innerWidth) {
      let percent = 600;
      centerCirclesCalculation(circlesBlock, percent);
    }
    if (1920 <= window.innerWidth) {
      let percent = 2000;
      centerCirclesCalculation(circlesBlock, percent);
    }
  }
  if (document.querySelector('.whyChooseUs__circles')) {
    const circlesBlock = document.querySelector('.whyChooseUs__circles');
    if (470 >= window.innerWidth) {
      let percent = 500;
      centerCirclesCalculation(circlesBlock, percent);
    } else if (768 >= window.innerWidth) {
      let percent = 550;
      centerCirclesCalculation(circlesBlock, percent);
    } else if (992 >= window.innerWidth) {
      let percent = 750;
      centerCirclesCalculation(circlesBlock, percent);
    }
  }
}
function centerCirclesCalculation(circlesBlock, percent) {
  const windowScreen = window.screen.width;
  const circlesLeftPosition = (windowScreen - percent) / 2;
  circlesBlock.style.left = circlesLeftPosition + 'px';
}

function translateContacts() {
  if (document.querySelector('.contacts--page')) {
    if (window.innerWidth < 992) {
      const contactsPage = document.querySelector('.contacts--page');
      const contactsPageWrapper = contactsPage.querySelector('.contacts__wrapper');
      let contactsPageWrapperHeight = contactsPageWrapper.offsetHeight;

      const map = document.querySelector('.map');
      let mapHeight = map.offsetHeight;

      map.style.width = document.querySelector('.header__wrapper').offsetWidth - contactsPageWrapper.offsetLeft + 'px';
      map.style.top =
        document.querySelector('.header__wrapper').offsetHeight + document.querySelector('.breadcrumbs').offsetHeight + document.querySelector('.contacts__wrapper-box').offsetHeight + 40 + 'px';
      map.style.left = contactsPageWrapper.offsetLeft + 'px';

      contactsPageWrapper.style.height =
        mapHeight +
        document.querySelector('.header__wrapper').offsetHeight +
        document.querySelector('.breadcrumbs').offsetHeight +
        document.querySelector('.contacts__wrapper-box').offsetHeight +
        60 +
        'px';

      addEventListener('resize', () => {
        map.style.width = document.querySelector('.header__wrapper').offsetWidth + 'px';
        map.style.top =
          document.querySelector('.header__wrapper').offsetHeight + document.querySelector('.breadcrumbs').offsetHeight + document.querySelector('.contacts__wrapper-box').offsetHeight + 40 + 'px';
        map.style.left = contactsPageWrapper.offsetLeft + 'px';

        contactsPageWrapper.style.height =
          mapHeight +
          document.querySelector('.header__wrapper').offsetHeight +
          document.querySelector('.breadcrumbs').offsetHeight +
          document.querySelector('.contacts__wrapper-box').offsetHeight +
          60 +
          'px';
      });
    }
  }
}
