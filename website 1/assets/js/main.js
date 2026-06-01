async function loadSection(id, file) {
  $.ajax({
    url: file,
    success: function (data) {
      $(`#${id}`).html(data);
    },
  });
}

loadSection('hero-section', './sections/hero.html');
loadSection('who-we-are', 'sections/who_we_are.html');
loadSection('pipline', 'sections/pipline.html');
loadSection('modernize-motion', 'sections/modernize_motion.html');
loadSection('architecture', 'sections/architecture.html');
loadSection('build-motion', 'sections/build_motion.html');
loadSection('build-extend-modernize', 'sections/build_extend_modernize.html');
loadSection('extend-motion', 'sections/extend_motion.html');
loadSection('pricing', 'sections/pricing.html');
loadSection('footer', 'sections/footer.html');

if (typeof ewww_webp_supported === "undefined") {
  var ewww_webp_supported = !1;
}
if (ewww_webp_supported) {
  document.body.classList.add("webp-support");
}
window.module = {};
window.confetti = module.exports;
window.lazyLoadOptions = {
  elements_selector: "img[data-src],.perfmatters-lazy,.perfmatters-lazy-css-bg",
  thresholds: "0px 0px",
  class_loading: "pmloading",
  class_loaded: "pmloaded",
  callback_loaded: function (element) {
    if (element.tagName === "IFRAME") {
      if (element.classList.contains("pmloaded")) {
        if (typeof window.jQuery != "undefined") {
          if (jQuery.fn.fitVids) {
            jQuery(element).parent().fitVids();
          }
        }
      }
    }
  },
};
window.addEventListener("LazyLoad::Initialized", function (e) {
  var lazyLoadInstance = e.detail.instance;
});
//       slidesPerView: 3,
//       spaceBetween: 20,
//       loop: true,

//       autoplay: {
//         delay: 5000,
//       },

//       pagination: {
//         el: ".swiper-pagination",
//         clickable: true,
//       },

//       navigation: {
//         nextEl: ".swiper-button-next",
//         prevEl: ".swiper-button-prev",
//       },

//       breakpoints: {
//         0: {
//           slidesPerView: 1,
//         },
//         768: {
//           slidesPerView: 2,
//         },
//         1024: {
//           slidesPerView: 3,
//         }
//       }
//     });

//   const swiper = new Swiper('.swiper', {
//   loop: true,

//   autoplay: {
//     delay: 3000,
//     disableOnInteraction: false,
//   },

//   slidesPerView: 1,
//   spaceBetween: 30,

//   pagination: {
//     el: '.swiper-pagination',
//     clickable: true,
//   },

//   navigation: {
//     nextEl: '.swiper-button-next',
//     prevEl: '.swiper-button-prev',
//   },
// });
