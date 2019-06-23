document.addEventListener('DOMContentLoaded', function () {

    const $carousel = document.querySelector('.flickity-carousel');
    const flkty = new Flickity( $carousel, {
      cellAlign: 'left',
      contain: true,
      wrapAround: true,
      autoPlay: true,
      prevNextButtons: false
    });

})

