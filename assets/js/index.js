/*=============== SERVICES MODAL ===============*/
const modal = document.querySelectorAll('.services__modal'),
      modalButton = document.querySelectorAll('.services__button'),
      modalClose = document.querySelectorAll('.services__modal-close')

let activeModal = (modalClick) => {
  modal[modalClick].classList.add('active-modal')
}

modalButton.forEach((modalButton, i) => {
  modalButton.addEventListener('click', () => {
    activeModal(i)
  })
})

modalClose.forEach((modalClose) => {
  modalClose.addEventListener('click', () => {
    modal.forEach((modalRemove) => {
      modalRemove.classList.remove('active-modal')
    })
  })
})

/*=============== SWIPER TESTIMONIAL ===============*/
const swiperTestimonial = new Swiper('.testimonial__swiper', {
  direction: 'horizontal',
  loop: true,
  sapaceBetween: 32,
  grabCursor: true,

  pagination: {
    el: '.swiper-pagination',
    dynamicBullets:   true,
    clickable: true,
  }
});

/*=============== SHOW SCROLL UP ===============*/ 
const scrollup = () => {
  const scrollup = document.getElementById('scroll-up')
  // When the scroll is higher than 350 viewport height, add the
  if (this.scrollY >= 350) {
    scrollup.classList.add('show-scroll')
  } else {
    scrollup.classList.remove('show-scroll')
  }
}
window.addEventListener('scroll', scrollup)