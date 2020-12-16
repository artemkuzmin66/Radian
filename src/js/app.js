(() => {
   const images = document.querySelectorAll(".slider__li")
   const buttons = document.querySelectorAll(".slider__button")
   const pages = document.querySelectorAll(".slider__pages-li")
   const sliderBlock = document.querySelector(".slider")

   const slider = new Slider(
      images,
      buttons,
      pages
   );

   slider.startSlideShow()

   sliderBlock.addEventListener("click", slider.controllerClick.bind(slider))
})();

const burger = document.querySelector(".burger")
const burgerMenu = document.querySelector(".burger__menu")

burger.addEventListener("click", () => {
   burger.classList.toggle("burger-active")
   burgerMenu.classList.toggle("burgerMenu-active")
})
// burger

const list = document.querySelectorAll(".product__bottom-col-list-item")
list.forEach(l => {
   l.addEventListener('click', (e) => {
      e.preventDefault()
      e.target.classList.toggle("product__bottom-col-list-item-active")
   })
})
// list 


const accordion = document.querySelectorAll('.product__bottom-col')

if (/iPhone|iPad|iPod|Android/i.test(navigator.userAgent)) {
   for (item of accordion) {
      item.addEventListener('click', function () {
         if (this.classList.contains('active')) {
            this.classList.remove('active')
         } else {
            for (el of accordion) {
               el.classList.remove('active')
            }
            this.classList.add('active')
         }
      })
   }
}

// accordion