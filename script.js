let menuList = document.getElementById("menuList")
menuList.style.maxHeight = "0px"


function toggleMenu(){
    if(menuList.style.maxHeight == "0px"){
        menuList.style.maxHeight = "400px"

    }
    else{
        menuList.style.maxHeight = "0px"
    }
}

const swiper = new Swiper('.slider-wrapper', {
    loop: true,
    grabCursor: true,
    spaceBetween: 30,
    // Pagination bullets
    pagination: {
      el: '.swiper-pagination',
      clickable: true,
      dynamicBullets: true
    },
    // Navigation arrows
    navigation: {
      nextEl: '.swiper-button-next',
      prevEl: '.swiper-button-prev',
    },
    // Responsive breakpoints
    breakpoints: {
      0: {
        slidesPerView: 1
      },
      768: {
        slidesPerView: 2
      },
      1024: {
        slidesPerView: 3
      }
    }
  });

  
  const modal = document.querySelector('.signInModal')
  const displayBtn = document.querySelector('.display')

  const closeBtn = document.querySelector('.close')

  displayBtn.addEventListener('click', () => {
    modal.classList.add("show")
  })


  closeBtn.addEventListener('click', () => {
    modal.classList.remove("show")
  })



  