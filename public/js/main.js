$(document).ready(function () {
  $('.js-example-basic-single').select2()
  new WOW().init()
  // setTimeout(function() {
  //   $(document).scrollTop(0)
  // },0);
  // if($(window).width() > 1024){

  // wow = new WOW({
  //   animateClass: 'animate__animated',
  //   mobile:       false,
  //   offset: 200
  // })
  // wow.init();
  // }

  if (document.querySelector('[name="phone"]')) {
    $('[name="phone"]').mask('+7 (999) 999-99-99', {
      placeholder: '',
      autoclear: false,
    })
  }

  const visible = document.querySelectorAll('.entry__label-icon')

  visible?.forEach((icon) => {
    const password = icon.previousElementSibling
    icon.addEventListener('click', () => {
      if (password.getAttribute('type') === 'password') {
        password.setAttribute('type', 'text')
      } else {
        password.setAttribute('type', 'password')
      }
    })
  })

  const body = document.querySelector('body')
  const burger = document.querySelector('.burger')
  const menu = document.querySelector('.menu')
  const menuItem = document.querySelectorAll('.menu__item')

  if (burger) {
    $(document).on('click', function (e) {
      if (!$(e.target).closest('.active').length) {
        burger.classList.remove('active')
        menu.classList.remove('active')
        body.classList.remove('no-scroll')
      }
      e.stopPropagation()
    })
    menuItem.forEach((item) => {
      item.addEventListener('click', () => {
        burger.classList.toggle('active')
        menu.classList.remove('active')
        body.classList.remove('no-scroll')
      })
    })
    burger.addEventListener('click', () => {
      burger.classList.toggle('active')
      menu.classList.toggle('active')
      body.classList.toggle('no-scroll')
    })
  }

  if (document.querySelector('.streams__box')) {
    var targetMaps = document.querySelectorAll('[data-target]'),
      maps = document.querySelectorAll('.streams__box')
    targetMaps?.forEach((elem) => {
      elem.addEventListener('click', function (e) {
        e.preventDefault()
        var target = this.getAttribute('data-target')
        maps.forEach((elem) => {
          elem.classList.remove('streams__box--opacity', 'streams__box--active')
        })
        targetMaps.forEach((elem) => {
          elem.classList.remove('detail__tabs-item--active')
        })
        this.classList.add('detail__tabs-item--active')
        var cat = document.querySelector('[data-info="' + target + '"]')
        cat.classList.add('streams__box--active')
        setTimeout(() => {
          cat.classList.add('streams__box--opacity')
        }, 400)
      })
    })
  }
  if (document.querySelector('.result__wrapper')) {
    var targetMaps = document.querySelectorAll('[data-target]'),
      maps = document.querySelectorAll('.result__wrapper')
    targetMaps?.forEach((elem) => {
      elem.addEventListener('click', function (e) {
        e.preventDefault()
        var target = this.getAttribute('data-target')
        maps.forEach((elem) => {
          elem.classList.remove('result__wrapper--opacity', 'result__wrapper--active')
        })
        targetMaps.forEach((elem) => {
          elem.classList.remove('result__tabs-item--active')
        })
        this.classList.add('result__tabs-item--active')
        var cat = document.querySelector('[data-info="' + target + '"]')
        cat.classList.add('result__wrapper--active')
        setTimeout(() => {
          cat.classList.add('result__wrapper--opacity')
        }, 400)
      })
    })
  }

  const swiper = new Swiper('.promo-swiper', {
    direction: 'horizontal',
    slidesPerView: 1,
    spaceBetween: 40,
    loop: true,
    pagination: {
      el: '.swiper-pagination',
    },
  })
  const swiper1 = new Swiper('.residents-swiper', {
    direction: 'horizontal',

    spaceBetween: 30,
    breakpoints: {
      993: {
        slidesPerView: 3,
      },
      576: {
        slidesPerView: 2,
      },
    },
  })
  // $(window).on('scroll', function() {
  //   $('.animate__animated').each(function() {
  //     var elementTop = $(this).offset().top;
  //     var elementBottom = elementTop + $(this).outerHeight();
  //     var viewportTop = $(window).scrollTop();
  //     var viewportBottom = viewportTop + $(window).height();

  //     // if (elementBottom > viewportTop && elementTop < viewportBottom) {
  //     //   $(this).addClass('animate__fadeInUp');
  //     // } else {
  //     //   $(this).removeClass('animate__fadeInUp');
  //     // }
  //   });
  // });
  if ($(window).width() > 1024) {
    $(this)
      .find('.about__top')
      ?.addClass('wow fadeInUp')
      .css({ animationDelay: '0.5s', animateDuration: '1s' })
    $(this)
      .find('.about__text')
      ?.eq(0)
      .addClass('wow fadeInUp')
      .css({ animationDelay: '0.5s', animateDuration: '1s' })
    $(this)
      .find('.about__text')
      ?.eq(1)
      .addClass('wow fadeInUp')
      .css({ animationDelay: '0.57s', animateDuration: '1s' })
    $(this)
      .find('.line')
      ?.eq(0)
      .addClass('wow fadeInUp')
      .css({ animationDelay: '1.2s', animateDuration: '1s' })
    $(this)
      .find('.line')
      ?.eq(1)
      .addClass('wow fadeInUp')
      .css({ animationDelay: '1.4s', animateDuration: '1s' })
    $(this)
      .find('.line')
      ?.eq(2)
      .addClass('wow fadeInUp')
      .css({ animationDelay: '1.2s', animateDuration: '1s' })
    $(this)
      .find('.line')
      ?.eq(3)
      .addClass('wow fadeInUp')
      .css({ animationDelay: '0.8s', animateDuration: '1s' })
    $(this)
      .find('.line')
      ?.eq(4)
      .addClass('wow fadeInUp')
      .css({ animationDelay: '0.5s', animateDuration: '1s' })
    $(this)
      .find('.about__list-item')
      ?.eq(0)
      .addClass('wow fadeInUp')
      .css({ animationDelay: '1.2s', animateDuration: '1s' })
    $(this)
      .find('.about__list-item')
      ?.eq(1)
      .addClass('wow fadeInUp')
      .css({ animationDelay: '1.3s', animateDuration: '1s' })
    $(this)
      .find('.about__list-item')
      ?.eq(2)
      .addClass('wow fadeInUp')
      .css({ animationDelay: '1.4s', animateDuration: '1s' })
    $(this)
      .find('.about__list-item')
      ?.eq(3)
      .addClass('wow fadeInUp')
      .css({ animationDelay: '1.5s', animateDuration: '1s' })
    $(this)
      .find('.residents__top')
      ?.addClass('wow fadeInUp')
      .css({ animationDelay: '0.5s', animateDuration: '1s' })
    $(this)
      .find('.residents-slide')
      ?.eq(0)
      .find('.residents__img')
      .addClass('wow fadeInUp')
      .css({ animationDelay: '1s', animateDuration: '1s' })
    $(this)
      .find('.residents-slide')
      ?.eq(1)
      .find('.residents__img')
      .addClass('wow fadeInUp')
      .css({ animationDelay: '1.1s', animateDuration: '1s' })
    $(this)
      .find('.residents-slide')
      ?.eq(2)
      .find('.residents__img')
      .addClass('wow fadeInUp')
      .css({ animationDelay: '1.15s', animateDuration: '1s' })
    $(this)
      .find('.residents-slide')
      ?.eq(3)
      .find('.residents__img')
      .addClass('wow fadeInUp')
      .css({ animationDelay: '1.2s', animateDuration: '1s' })
    $(this)
      .find('.residents-slide')
      ?.eq(0)
      .find('.residents__content')
      .addClass('wow fadeInUp')
      .css({ animationDelay: '1s', animateDuration: '1s' })
    $(this)
      .find('.residents-slide')
      ?.eq(1)
      .find('.residents__content')
      .addClass('wow fadeInUp')
      .css({ animationDelay: '1.1s', animateDuration: '1s' })
    $(this)
      .find('.residents-slide')
      ?.eq(2)
      .find('.residents__content')
      .addClass('wow fadeInUp')
      .css({ animationDelay: '1.15s', animateDuration: '1s' })
    $(this)
      .find('.residents-slide')
      ?.eq(3)
      .find('.residents__content')
      .addClass('wow fadeInUp')
      .css({ animationDelay: '1.2s', animateDuration: '1s' })
    $(this)
      .find('.conditions__top')
      ?.addClass('wow fadeInUp')
      .css({ animationDelay: '1s', animateDuration: '1s' })
    $(this)
      .find('.conditions__bottom')
      ?.addClass('wow fadeInUp')
      .css({ animationDelay: '0.5s', animateDuration: '1s' })
    $(this)
      .find('.conditions__right')
      ?.addClass('wow fadeInRight')
      .css({ animationDelay: '1s', animateDuration: '1s' })
    // $(this).find('.table')?.addClass('wow fadeInUp').css({animationDelay: '1s', animateDuration: '1s'});
    $(this)
      .find('.tests__list-item')
      ?.eq(0)
      .addClass('wow fadeInUp')
      .css({ animationDelay: '1s', animateDuration: '1s' })
    $(this)
      .find('.tests__list-item')
      ?.eq(1)
      .addClass('wow fadeInUp')
      .css({ animationDelay: '1.1s', animateDuration: '1s' })
    $(this)
      .find('.tests__list-item')
      ?.eq(2)
      .addClass('wow fadeInUp')
      .css({ animationDelay: '1.2s', animateDuration: '1s' })
    $(this)
      .find('.tests__list-item')
      ?.eq(3)
      .addClass('wow fadeInUp')
      .css({ animationDelay: '1.3s', animateDuration: '1s' })
    $(this)
      .find('.tests__list-item')
      ?.eq(4)
      .addClass('wow fadeInUp')
      .css({ animationDelay: '1.4s', animateDuration: '1s' })
    $(this)
      .find('.tests__list-item')
      ?.eq(5)
      .addClass('wow fadeInUp')
      .css({ animationDelay: '1.5s', animateDuration: '1s' })
    $(this)
      .find('.tests__list-item')
      ?.eq(6)
      .addClass('wow fadeInUp')
      .css({ animationDelay: '1.6s', animateDuration: '1s' })
    $(this)
      .find('.tests__list-item')
      ?.eq(7)
      .addClass('wow fadeInUp')
      .css({ animationDelay: '1.7s', animateDuration: '1s' })
    $(this)
      .find('.tests__list-item')
      ?.eq(8)
      .addClass('wow fadeInUp')
      .css({ animationDelay: '1.8s', animateDuration: '1s' })
    new WOW().init()
  }
})
